"""
SlotBot Landing Page Server with Network Sharing Support
"""
import http.server
import os
import socket
import socketserver
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return socket.gethostbyname(socket.gethostname())

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    socketserver.TCPServer.allow_reuse_address = True
    local_ip = get_local_ip()
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("  🚀 SlotBot Landing Server ЗАПУЩЕН!")
        print("=" * 60)
        print(f"  📍 Для вас (на этом ПК):")
        print(f"     http://localhost:{PORT}")
        print()
        print(f"  📱 Для устройств в вашей сети Wi-Fi (телефон/ноутбук):")
        print(f"     http://{local_ip}:{PORT}")
        print()
        print("  🌍 Чтобы поделиться с ЛЮБЫМ человеком через интернет:")
        print("     Откройте новое окно PowerShell и выполните:")
        print("     ssh -p 443 -R0:localhost:8080 a.pinggy.io")
        print("=" * 60)
        print("  Нажмите Ctrl+C, чтобы остановить сервер.\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nСервер остановлен.")

if __name__ == "__main__":
    run()
