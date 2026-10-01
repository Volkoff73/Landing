document.addEventListener('DOMContentLoaded', () => {

  // Copywriter's UI Simulation Logic
  const $ = s => document.querySelector(s);
  const SV = [
    ["Наращивание ресниц", "2 ч", "2 500 ₽"],
    ["Коррекция бровей", "45 мин", "1 200 ₽"],
    ["Маникюр с покрытием", "1 ч 45 мин", "2 400 ₽"]
  ];
  const MENU = [];
  const H = [
    "Нажмите на услугу в телефоне: так запись видит ваш клиент.",
    "Выберите день, затем время.",
    "Откройте вкладку «Глазами мастера»: там пришла новая запись. Подтвердите её.",
    "Клиент получил подтверждение, а потом напоминания за 24 и за 2 часа. Так бот сокращает неявки."
  ];
  
  let mode = "c", log, kb, pk, tm = [];
  const add = (w, c, h) => log[w].push([c, h]);
  const hint = n => $("#hint").textContent = H[n];

  function render() {
    $("#chat").innerHTML = log[mode].map(x => `<div class="${x[0]}">${x[1]}</div>`).join("");
    $("#chat").scrollTop = 1e5;
    const k = $("#kb"); 
    k.className = mode; 
    k.innerHTML = "";
    (mode == "m" && !kb.m.length ? MENU.map(t => [t, () => {}]) : kb[mode]).forEach(([t, f]) => {
      const b = document.createElement("button");
      b.textContent = t;
      b.onclick = f;
      k.appendChild(b);
    });
  }

  function setMode(m) {
    mode = m;
    $("#tc").className = m == "c" ? "on" : "";
    $("#tm").className = m == "m" ? "on" : "";
    if (m == "m") $("#dot").hidden = true;
    render();
  }

  function reset() {
    tm.forEach(clearTimeout); 
    tm = []; 
    pk = {}; 
    log = { c: [], m: [] }; 
    kb = { c: [], m: [] }; 
    $("#dot").hidden = true;
    
    add("c", "b", "👋 <b>Здравствуйте!</b> Выберите услугу, и я покажу свободное время.");
    kb.c = SV.map((s, i) => [`${s[0]}, ${s[1]}, ${s[2]}`, () => s1(i)]);
    add("m", "b", "🏠 <b>Главное меню мастера</b><br>Выберите раздел для управления.");
    
    hint(0);
    setMode("c");
  }

  function s1(i) {
    pk.s = SV[i];
    add("c", "u", pk.s[0]);
    add("c", "b", "📅 Выберите день:");
    kb.c = ["Понедельник", "Вторник", "Среда"].map(d => [d, () => s2(d)]);
    hint(1);
    render();
  }

  function s2(d) {
    pk.d = d;
    add("c", "u", d);
    add("c", "b", `⏰ <b>Выберите время визита</b><br><br>📋 Услуга: ${pk.s[0]} (${pk.s[1]})<br>📅 День: ${d}<br>💰 Стоимость: ${pk.s[2]}<br><br><i>Показаны окна, в которые услуга помещается целиком.</i>`);
    kb.c = ["11:00", "13:30", "15:00"].map(t => [t, () => s3(t)]);
    render();
  }

  function s3(t) {
    pk.t = t;
    add("c", "u", t);
    add("c", "b", `✅ <b>Вы записаны!</b><br>${pk.s[0]}, ${pk.d}, ${t}.<br>Ждём подтверждения мастера.`);
    kb.c = [["Пройти заново", reset]];
    add("m", "b", `🔔 <b>Новая запись</b><br>${pk.s[0]}<br>${pk.d}, ${t}, ${pk.s[2]}`);
    kb.m = [["✅ Подтвердить", ok], ["❌ Отклонить", reset]];
    $("#dot").hidden = false;
    hint(2);
    render();
  }

  function ok() {
    add("m", "u", "✅ Подтвердить");
    add("m", "b", "Готово, клиент получил уведомление.");
    kb.m = [];
    add("c", "b", "🎉 Мастер подтвердил вашу запись.");
    if (typeof ym === 'function') { ym(113220443, 'reachGoal', 'demo_completed'); }
    hint(3);
    setMode("c");
    
    tm.push(setTimeout(() => {
      add("c", "s", "за 24 часа до визита");
      add("c", "b", `⏰ <b>Напоминание</b><br>Завтра в ${pk.t}: ${pk.s[0]}. Ждём вас!`);
      render();
    }, 1600));
    
    tm.push(setTimeout(() => {
      add("c", "s", "за 2 часа до визита");
      add("c", "b", "⏰ Через 2 часа ваш визит. До встречи!");
      render();
    }, 3400));
  }

  $("#tc").onclick = () => setMode("c");
  $("#tm").onclick = () => setMode("m");
  reset();

  // Copywriter's ROI Calculator Logic
  const rp = $("#rp"), rw = $("#rw"), rn = $("#rn"), rr = $("#rr");
  const vp = $("#vp"), vw = $("#vw"), vn = $("#vn"), vr = $("#vr");
  const lost_ = $("#lost"), back = $("#back"), need = $("#need");
  
  const f = n => Math.round(n).toLocaleString("ru-RU") + " ₽";
  
  function calc() {
    const p = +rp.value, w = +rw.value, n = +rn.value, r = +rr.value;
    vp.textContent = f(p);
    vw.textContent = w;
    vn.textContent = n + "%";
    vr.textContent = r + "%";
    
    const lost = p * w * 4 * n / 100;
    lost_.textContent = f(lost);
    back.textContent = f(lost * r / 100);
    
    function pluralizeRu(n, one, two, five) {
      const t = Math.abs(n) % 100;
      const n1 = t % 10;
      if (t > 10 && t < 20) return five;
      if (n1 > 1 && n1 < 5) return two;
      if (n1 === 1) return one;
      return five;
    }

    const okonStr = pluralizeRu(k, "запись", "записи", "записей");
    need.textContent = `Тариф стоит 590 ₽ в месяц. Он окупается, если бот вернёт всего ${k} ${okonStr} в месяц.`;
  }
  
  document.querySelectorAll(".calc input").forEach(i => i.oninput = calc);
  calc();

  // Animation on Scroll Logic (Reveal)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Sticky bottom bar graceful reveal on mobile
  const bar = document.querySelector('.bar');
  if (bar) {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        bar.classList.add('visible');
      } else {
        bar.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Yandex Metrika Goals Tracking
  const trackGoal = (goalName, params) => {
    if (typeof ym === 'function') {
      try {
        ym(113220443, 'reachGoal', goalName, params);
      } catch (e) {
        console.warn('Metrika goal error:', e);
      }
    }
  };

  document.querySelectorAll('a[href*="t.me/zapishis_app_bot"]').forEach(link => {
    link.addEventListener('click', () => {
      trackGoal('lead_telegram');
      const href = link.getAttribute('href') || '';
      if (href.includes('site_nav')) trackGoal('lead_nav');
      else if (href.includes('site_hero')) trackGoal('lead_hero');
      else if (href.includes('site_pricing')) trackGoal('lead_pricing');
      else if (href.includes('site_sticky')) trackGoal('lead_sticky');
      else if (href.includes('site_final')) trackGoal('lead_final');
    });
  });

  let calcTracked = false;
  document.querySelectorAll('.calc input').forEach(input => {
    input.addEventListener('change', () => {
      if (!calcTracked) {
        trackGoal('calc_used');
        calcTracked = true;
      }
    });
  });

});
