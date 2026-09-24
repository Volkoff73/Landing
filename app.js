/**
 * BEAUTYBOT / ZAPISHIS - HIGH-TECH INTERACTIVE ENGINE
 * AuthKit & Apple Keynote Synthesized Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile menu drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* ==========================================================================
     1. 7 TARGET NICHES DATA & DYNAMIC EXHIBITION PLINTH
     ========================================================================== */
  const NICHES = [
    {
      id: 'beauty',
      name: '💅 Бьюти',
      badge: 'Флагманская спецификация',
      role: 'Мастера маникюра, бровисты, стилисты, лешмейкеры, косметологи',
      headline: 'Клиенты бронируют слоты за 20 секунд, пока вы работаете с пилкой или пинцетом',
      pains: [
        'Руки в перчатках — невозможно ответить на звонок или писать в мессенджере во время процедуры.',
        'Пока вы пилите ногти или наращиваете ресницы, клиент пишет троим мастерам и уходит к первому ответившему.',
        'Клиент забыл про запись — вы сидите 2 часа вхолостую, теряя от 2 500 ₽ за каждое сгоревшее окно.',
        'Путаница при наложении записей и ручном подсчёте перерывов на стерилизацию инструментов.'
      ],
      solution: 'Бот мгновенно выдаёт клиенту реальные свободные окна с учётом перерывов и напоминает за 24 ч и 2 ч. Доходимость вырастает до 98%.',
      services: [
        { name: 'Маникюр со снятием и покрытием', duration: '1 ч 45 мин', price: '2 400 ₽' },
        { name: 'Архитектура и ламинирование бровей', duration: '50 мин', price: '1 600 ₽' },
        { name: 'Наращивание ресниц (2D объём)', duration: '2 ч', price: '2 800 ₽' },
        { name: 'Сложное окрашивание / AirTouch', duration: '3 ч 30 мин', price: '7 500 ₽' }
      ],
      metrics: {
        savedHours: '32 часа',
        savedMoney: 'от 12 000 ₽',
        highlight: '0 пустых окон'
      },
      quote: {
        text: '«Раньше вечерами сидела до полуночи с блокнотом и отвечала на 50 сообщений "А когда свободно?". Теперь просто скидываю ссылку на бота в шапку профиля — записались 90% клиентов сами!»',
        author: 'Екатерина В.',
        specialty: 'Топ-мастер маникюра, опыт 6 лет'
      }
    },
    {
      id: 'mental',
      name: '🧠 Ментальное',
      badge: 'Для терапевтов и коучей',
      role: 'Психологи, психотерапевты, коучи, гештальт-консультанты',
      headline: 'Индивидуальные сессии без неловких обсуждений свободного графика в мессенджере',
      pains: [
        'Клиентам тяжело и неудобно долго переписываться, чтобы найти общее свободное терапевтическое окно.',
        'Частые отмены за пару часов до сессии из-за сопротивления или забывчивости, лишающие вас гонорара.',
        'Необходимость строго выдерживать 50-минутный сеттинг и 15-минутный перерыв между клиентами.',
        'Нарушение личных границ постоянными сообщениями о переносах в нерабочее время и выходные.'
      ],
      solution: 'Клиент бережно и конфиденциально выбирает удобный слот для онлайн или очной консультации. Бот автоматически закладывает интервал на отдых между сессиями.',
      services: [
        { name: 'Индивидуальная консультация (онлайн)', duration: '50 мин', price: '4 000 ₽' },
        { name: 'Очная психологическая сессия', duration: '55 мин', price: '5 500 ₽' },
        { name: 'Парная терапия / Семейная встреча', duration: '1 ч 20 мин', price: '7 000 ₽' },
        { name: 'Диагностическая экспресс-сессия', duration: '30 мин', price: '2 500 ₽' }
      ],
      metrics: {
        savedHours: '20 часов',
        savedMoney: 'от 16 000 ₽',
        highlight: 'Строгий сеттинг'
      },
      quote: {
        text: '«Психологу важно сохранять ресурс. До бота процесс согласования времени забирал массу душевных сил. Сейчас клиент сам нажимает день и время — сессия подтверждена!»',
        author: 'Михаил С.',
        specialty: 'Психолог, гештальт-терапевт'
      }
    },
    {
      id: 'tutors',
      name: '📚 Репетиторы',
      badge: 'Для преподавателей',
      role: 'Репетиторы по языкам, предметам ОГЭ/ЕГЭ, преподаватели вокала и IT',
      headline: 'Чёткое расписание уроков без бесконечных согласований с родителями учеников',
      pains: [
        'Родители пишут в разное время дня и ночи: «А можно мы в четверг перенесём на пятницу?».',
        'Постоянная путаница в часовых поясах, если ученики из других городов и стран.',
        'Пропущенные уроки: ученик проспал или забыл — вы потеряли оплату за запланированный академический час.',
        'Тратите по 4–5 часов в воскресенье только на то, чтобы собрать расписание на следующую неделю.'
      ],
      solution: 'Бот держит актуальную сетку уроков. Ученики бронируют доступные часы, а напоминания за день и за 2 часа исключают оправдания «ой, я забыл про урок».',
      services: [
        { name: 'Урок английского языка (разговорный)', duration: '60 мин', price: '2 000 ₽' },
        { name: 'Подготовка к ЕГЭ по математике', duration: '90 мин', price: '3 000 ₽' },
        { name: 'Пробный урок-тестирование уровня', duration: '30 мин', price: '1 000 ₽' },
        { name: 'Индивидуальный IT-менторинг', duration: '60 мин', price: '3 500 ₽' }
      ],
      metrics: {
        savedHours: '28 часов',
        savedMoney: 'от 14 000 ₽',
        highlight: 'Без накладок'
      },
      quote: {
        text: '«У меня 25 учеников в неделю. Раньше составление графика было сущим адом с таблицами в Excel. В SlotBot всё настроил за 10 минут — родители в восторге от удобства.»',
        author: 'Ольга К.',
        specialty: 'Преподаватель английского и IELTS'
      }
    },
    {
      id: 'fitness',
      name: '🏋️ Фитнес',
      badge: 'Тренеры и массажисты',
      role: 'Персональные фитнес-тренеры, массажисты, тренеры по пилатесу и йоге',
      headline: 'Полная запись на персональные тренировки и массаж прямо из зала',
      pains: [
        'Во время тренировки или сеанса массажа физически невозможно отвечать в телефоне.',
        'Клиенты записываются на словах в раздевалке, а потом забывают и не приходят.',
        'Сложно оперативно заполнить свободное «окно», если кто-то заболел или уехал в командировку.',
        'Необходимость учитывать время на душ, отдых и подготовку кабинета между сеансами.'
      ],
      solution: 'Бот автоматизирует бронь слотов в зале или массажном кабинете, а функция рассылки «горящих окон» закрывает внезапные отмены за считанные минуты.',
      services: [
        { name: 'Персональная силовая тренировка', duration: '60 мин', price: '2 200 ₽' },
        { name: 'Спортивный / восстановительный массаж', duration: '60 мин', price: '3 000 ₽' },
        { name: 'Лимфодренажный массаж тела', duration: '90 мин', price: '4 200 ₽' },
        { name: 'Индивидуальная растяжка / сплит', duration: '50 мин', price: '2 000 ₽' }
      ],
      metrics: {
        savedHours: '25 часов',
        savedMoney: 'от 15 000 ₽',
        highlight: 'Закрытие отмен'
      },
      quote: {
        text: '«Когда ты массируешь человека, руки заняты маслом. Отвлекаться на телефон нельзя. Бот полностью взял запись на себя. Мои доходы выросли на 25%, так как отмен больше нет!»',
        author: 'Денис М.',
        specialty: 'Массажист-реабилитолог'
      }
    },
    {
      id: 'esoterics',
      name: '🔮 Эзотерика',
      badge: 'Таро и астрология',
      role: 'Тарологи, астрологи, нумерологи, рунологи, специалисты Human Design',
      headline: 'Комфортная запись на расклады и натальные карты без эмоционального выгорания',
      pains: [
        'Поток сообщений в директ: «А посмотрите быстро один вопросик?», отнимающий колоссальное количество энергии.',
        'Сложно донести регламент работы, ценность и длительность разбора до начала консультации.',
        'Клиенты не приходят на онлайн-созвон вовремя, сбивая всю последующую очередь раскладов.',
        'Постоянные споры о времени консультации и ручной сбор данных (дата, время и город рождения).'
      ],
      solution: 'Бот представляет чёткий каталог услуг с фиксированной стоимостью, собирает необходимые вводные и напоминает о сессии.',
      services: [
        { name: 'Полный расклад Таро на год / сферу', duration: '60 мин', price: '3 500 ₽' },
        { name: 'Разбор натальной карты (предназначение)', duration: '90 мин', price: '6 000 ₽' },
        { name: 'Экспресс-консультация по 1 вопросу', duration: '30 мин', price: '1 800 ₽' },
        { name: 'Совместимость пары (синастрия)', duration: '75 мин', price: '5 000 ₽' }
      ],
      metrics: {
        savedHours: '30 часов',
        savedMoney: 'от 18 000 ₽',
        highlight: 'Личные границы'
      },
      quote: {
        text: '«У меня огромный поток из соцсетей, и личка разрывалась. Бот помог выстроить здоровые границы: теперь клиенты сразу видят услуги, цены и записываются цивилизованно.»',
        author: 'Алина R.',
        specialty: 'Астролог, таролог'
      }
    },
    {
      id: 'pets',
      name: '🐾 Груминг',
      badge: 'Уход за животными',
      role: 'Грумеры, кинологи, зоопсихологи, специалисты по передержке и спа для питомцев',
      headline: 'Простая запись хвостиков на стрижку и гигиену без шума фенов и лая',
      pains: [
        'В салоне работает компрессор и сушилка — телефонных звонков элементарно не слышно.',
        'Нельзя бросать собаку на столе, чтобы ответить хозяину на сообщение — это вопрос безопасности животного.',
        'Хозяева часто забывают забрать питомца вовремя или пропускают визит.',
        'Разные породы требуют разного времени: на йорка уходит 1 час, на шпица или пуделя — 2.5 часа.'
      ],
      solution: 'Каталог с указанием породы и времени услуги исключает накладки, а хозяева получают пуш о записи и напоминание забрать питомца.',
      services: [
        { name: 'Комплексный груминг йорка / шпица', duration: '1 ч 45 мин', price: '2 700 ₽' },
        { name: 'Экспресс-линька для крупных собак', duration: '2 ч 30 мин', price: '4 500 ₽' },
        { name: 'Гигиеническая стрижка и когти', duration: '45 мин', price: '1 500 ₽' },
        { name: 'Индивидуальное занятие с кинологом', duration: '60 мин', price: '2 500 ₽' }
      ],
      metrics: {
        savedHours: '26 часов',
        savedMoney: 'от 13 500 ₽',
        highlight: 'Безопасность'
      },
      quote: {
        text: '«Когда стрижёшь собаку ножницами, любое отвлечение на телефон опасно. Бот стал моим виртуальным администратором. Клиенты в восторге от простоты!»',
        author: 'Мария Т.',
        specialty: 'Владелец груминг-кабинета'
      }
    },
    {
      id: 'consulting',
      name: '💼 Консалтинг',
      badge: 'Для бизнеса и права',
      role: 'Юристы, бухгалтеры, налоговые консультанты, маркетологи, трекеры',
      headline: 'Профессиональная запись клиентов на консультации без секретарей и ассистентов',
      pains: [
        'Дорогие клиенты ценят своё время и не готовы ждать ответа юриста или консультанта часами.',
        'Согласование времени консультации через 3 помощников выглядит громоздко и медленно.',
        'Неявки на консультации срывают рабочий график и подготовку юридических материалов.',
        'Тратится рабочее время эксперта со ставкой 5 000+ ₽/час на банальное администрирование календаря.'
      ],
      solution: 'Бот выглядит как современный корпоративный ассистент в Telegram. Клиент бронирует свободный слот, получая статусное подтверждение.',
      services: [
        { name: 'Юридическая консультация по договорам', duration: '60 мин', price: '5 000 ₽' },
        { name: 'Налоговый аудит для ИП и ООО', duration: '90 мин', price: '8 500 ₽' },
        { name: 'Стратегическая сессия по маркетингу', duration: '2 ч', price: '15 000 ₽' },
        { name: 'Экспресс-разбор кейса', duration: '30 мин', price: '3 500 ₽' }
      ],
      metrics: {
        savedHours: '22 часа',
        savedMoney: 'от 25 000 ₽',
        highlight: 'Высокий статус'
      },
      quote: {
        text: '«Мой час стоит дорого, и тратить его на переписку с клиентами о свободном времени было преступлением. Бот решил проблему за 1 день. Рекомендую всем коллегам!»',
        author: 'Андрей П.',
        specialty: 'Юрист по коммерческому праву'
      }
    }
  ];

  let currentNicheIndex = 0;

  const nicheTabsContainer = document.getElementById('nicheTabsContainer');
  const nicheContentCard = document.getElementById('nicheContentCard');

  function renderNicheTabs() {
    if (!nicheTabsContainer) return;
    nicheTabsContainer.innerHTML = '';
    NICHES.forEach((niche, index) => {
      const btn = document.createElement('button');
      btn.className = `niche-nav-pill ${index === currentNicheIndex ? 'active' : ''}`;
      btn.innerHTML = `<span>${niche.name}</span>`;
      btn.addEventListener('click', () => {
        currentNicheIndex = index;
        renderNicheTabs();
        renderNicheContent();
        syncSimulatorWithNiche(niche);
      });
      nicheTabsContainer.appendChild(btn);
    });
  }

  function renderNicheContent() {
    if (!nicheContentCard) return;
    const niche = NICHES[currentNicheIndex];
    nicheContentCard.innerHTML = `
      <div class="grid lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Column: Specs & Pains -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="flex items-center gap-3">
            <span class="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-electric-blue/15 text-electric-blue border border-electric-blue/30">
              ${niche.badge}
            </span>
            <span class="text-xs font-mono text-fog-veil">${niche.role}</span>
          </div>

          <h3 class="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
            ${niche.headline}
          </h3>

          <div class="space-y-2.5">
            <div class="font-mono text-[11px] uppercase tracking-wider text-rose-400">
              Специфические боли в вашей сфере:
            </div>
            ${niche.pains.map(pain => `
              <div class="flex items-start gap-3 text-xs sm:text-sm text-moon-mist">
                <span class="text-rose-400 shrink-0 font-bold">✕</span>
                <span>${pain}</span>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-2xl bg-gradient-to-r from-electric-blue/10 to-emerald-glow/10 border border-electric-blue/20 text-xs sm:text-sm text-frost-glow flex items-start gap-3">
            <span class="text-emerald-glow text-base font-bold shrink-0">✓</span>
            <div>
              <strong class="text-white font-medium">Решение бота:</strong> ${niche.solution}
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-graphite border border-white/[0.06] space-y-2">
            <p class="text-xs sm:text-sm text-moon-mist italic">${niche.quote.text}</p>
            <div class="text-xs font-mono text-white flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
              <span>${niche.quote.author}</span>
              <span class="text-fog-veil font-normal">(${niche.quote.specialty})</span>
            </div>
          </div>

        </div>

        <!-- Right Column: Live Menu Matrix -->
        <div class="lg:col-span-5 space-y-4">
          <div class="p-5 rounded-2xl bg-graphite border border-white/[0.08] space-y-3.5">
            
            <div class="flex justify-between items-center pb-2.5 border-b border-white/[0.08]">
              <span class="font-mono text-[10px] uppercase text-fog-veil tracking-wider">Пример каталога услуг</span>
              <span class="font-mono text-[10px] text-electric-blue">Live Preview</span>
            </div>

            <div class="space-y-2">
              ${niche.services.map(svc => `
                <div class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between hover:border-electric-blue/40 transition-colors">
                  <div>
                    <div class="text-xs font-medium text-white">${svc.name}</div>
                    <div class="text-[10px] font-mono text-fog-veil mt-0.5">${svc.duration}</div>
                  </div>
                  <div class="font-display font-semibold text-sm text-emerald-glow shrink-0 ml-3">
                    ${svc.price}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center font-mono text-[10px]">
              <div class="p-2 rounded-lg bg-white/[0.02]">
                <div class="font-display font-bold text-sm text-white">${niche.metrics.savedHours}</div>
                <div class="text-fog-veil">в месяц</div>
              </div>
              <div class="p-2 rounded-lg bg-white/[0.02]">
                <div class="font-display font-bold text-sm text-emerald-glow">${niche.metrics.savedMoney}</div>
                <div class="text-fog-veil">сохранено</div>
              </div>
              <div class="p-2 rounded-lg bg-white/[0.02]">
                <div class="font-display font-bold text-sm text-electric-blue">${niche.metrics.highlight}</div>
                <div class="text-fog-veil">результат</div>
              </div>
            </div>

            <a href="https://t.me/zapishis_app_bot" target="_blank" rel="noopener noreferrer" class="btn-keynote-primary w-full text-xs py-3 text-center">
              <span>Запустить @zapishis_app_bot</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>

          </div>
        </div>

      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Initial Niche render
  renderNicheTabs();
  renderNicheContent();

  /* ==========================================================================
     2. HARDWARE INTERACTIVE PHONE SIMULATOR
     ========================================================================== */
  const phoneBotName = document.getElementById('phoneBotName');
  const phoneBotStatus = document.getElementById('phoneBotStatus');
  const phoneChatBody = document.getElementById('phoneChatBody');
  const phoneKeyboardArea = document.getElementById('phoneKeyboardArea');
  const simModeClient = document.getElementById('simModeClient');
  const simModeMaster = document.getElementById('simModeMaster');
  const masterPushBadge = document.getElementById('masterPushBadge');
  const simResetBtn = document.getElementById('simResetBtn');
  const phoneQuickReset = document.getElementById('phoneQuickReset');

  let simState = {
    mode: 'client',
    step: 'welcome',
    selectedService: null,
    selectedDate: null,
    selectedSlot: null,
    clientName: 'Анна К.',
    clientPhone: '+7 (999) 123-45-67',
    masterHasNewBooking: false,
    masterDecision: null,
    currentServices: NICHES[0].services
  };

  function syncSimulatorWithNiche(niche) {
    simState.currentServices = niche.services;
    if (phoneBotName) {
      phoneBotName.textContent = `SlotBot | @zapishis_app_bot`;
    }
    resetSimulator();
  }

  function resetSimulator() {
    simState.step = 'welcome';
    simState.selectedService = null;
    simState.selectedDate = null;
    simState.selectedSlot = null;
    simState.masterHasNewBooking = false;
    simState.masterDecision = null;
    if (masterPushBadge) masterPushBadge.classList.add('hidden');
    renderSimulator();
  }

  if (simResetBtn) simResetBtn.addEventListener('click', resetSimulator);
  if (phoneQuickReset) phoneQuickReset.addEventListener('click', resetSimulator);

  if (simModeClient && simModeMaster) {
    simModeClient.addEventListener('click', () => {
      simState.mode = 'client';
      simModeClient.className = 'flex-1 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 bg-electric-blue text-white shadow-lg';
      simModeMaster.className = 'flex-1 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 text-fog-veil hover:text-white hover:bg-white/[0.04]';
      renderSimulator();
    });

    simModeMaster.addEventListener('click', () => {
      simState.mode = 'master';
      if (masterPushBadge) masterPushBadge.classList.add('hidden');
      simModeMaster.className = 'flex-1 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 bg-electric-blue text-white shadow-lg';
      simModeClient.className = 'flex-1 py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 text-fog-veil hover:text-white hover:bg-white/[0.04]';
      renderSimulator();
    });
  }

  function formatTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  function renderSimulator() {
    if (!phoneChatBody || !phoneKeyboardArea) return;
    const timeStr = formatTime();

    if (simState.mode === 'client') {
      phoneBotStatus.textContent = 'онлайн-запись 24/7';
      renderClientView(timeStr);
    } else {
      phoneBotStatus.textContent = 'кабинет мастера';
      renderMasterView(timeStr);
    }

    setTimeout(() => {
      phoneChatBody.scrollTop = phoneChatBody.scrollHeight;
    }, 50);

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function renderClientView(timeStr) {
    let chatHtml = '';
    let keyboardHtml = '';

    chatHtml += `
      <div class="sim-bubble-in">
        👋 <strong>Добро пожаловать!</strong><br />
        Я бот для моментальной онлайн-записи.<br />
        Выберите процедуру и свободное время прямо в Telegram ✨
        <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
      </div>
    `;

    if (simState.step === 'welcome') {
      keyboardHtml = `
        <button id="simBtnStartBooking" class="btn-keynote-primary w-full text-xs py-3">
          <i data-lucide="calendar" class="w-4 h-4"></i>
          <span>💅 Записаться на процедуру</span>
        </button>
        <div class="text-[10px] font-mono text-center text-fog-veil">Нажмите на кнопку выше для старта</div>
      `;
    }

    if (['catalog', 'dates', 'slots', 'confirm', 'success'].includes(simState.step)) {
      chatHtml += `
        <div class="sim-bubble-out">
          💅 Записаться на процедуру
          <span class="float-right text-[9px] text-white/60 ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
        <div class="sim-bubble-in">
          📋 <strong>Каталог процедур:</strong><br />
          Выберите интересующую вас услугу:
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;
    }

    if (simState.step === 'catalog') {
      keyboardHtml = `
        <div class="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          ${simState.currentServices.map((svc, idx) => `
            <button class="sim-btn-action sim-select-svc text-left flex justify-between items-center py-2 px-3" data-idx="${idx}">
              <span class="text-white">${svc.name}</span>
              <span class="font-mono text-emerald-glow font-semibold shrink-0 ml-2">${svc.price}</span>
            </button>
          `).join('')}
        </div>
        <div class="text-[10px] font-mono text-center text-fog-veil">Выберите процедуру из каталога</div>
      `;
    }

    if (['dates', 'slots', 'confirm', 'success'].includes(simState.step) && simState.selectedService) {
      chatHtml += `
        <div class="sim-bubble-out">
          Выбрано: ${simState.selectedService.name} (${simState.selectedService.price})
          <span class="float-right text-[9px] text-white/60 ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
        <div class="sim-bubble-in">
          📅 <strong>Выберите удобный день:</strong><br />
          Зелёный индикатор — есть свободные окна:
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;
    }

    if (simState.step === 'dates') {
      const dates = [
        { label: 'Завтра (Ср, 25 сент)', free: true },
        { label: 'Четверг (26 сент)', free: true },
        { label: 'Пятница (27 сент)', free: true },
        { label: 'Суббота (28 сент)', free: false }
      ];
      keyboardHtml = `
        <div class="grid grid-cols-2 gap-1.5">
          ${dates.map(d => `
            <button class="sim-btn-action sim-select-date text-xs py-2 px-2.5 flex items-center justify-between ${d.free ? '' : 'opacity-30 pointer-events-none'}" data-label="${d.label}">
              <span>${d.label}</span>
              <span class="w-1.5 h-1.5 rounded-full ${d.free ? 'bg-emerald-glow' : 'bg-rose-500'}"></span>
            </button>
          `).join('')}
        </div>
        <div class="text-[10px] font-mono text-center text-fog-veil">Выберите доступный день</div>
      `;
    }

    if (['slots', 'confirm', 'success'].includes(simState.step) && simState.selectedDate) {
      chatHtml += `
        <div class="sim-bubble-out">
          Дата: ${simState.selectedDate}
          <span class="float-right text-[9px] text-white/60 ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
        <div class="sim-bubble-in">
          ⏰ <strong>Свободные интервалы (${simState.selectedService.duration}):</strong>
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;
    }

    if (simState.step === 'slots') {
      const slots = ['10:00', '12:30', '15:00', '17:30'];
      keyboardHtml = `
        <div class="grid grid-cols-4 gap-1.5">
          ${slots.map(s => `
            <button class="sim-btn-action sim-select-slot font-mono font-bold py-2 text-white" data-slot="${s}">
              ${s}
            </button>
          `).join('')}
        </div>
        <div class="text-[10px] font-mono text-center text-fog-veil">Выберите желаемый слот</div>
      `;
    }

    if (['confirm', 'success'].includes(simState.step) && simState.selectedSlot) {
      chatHtml += `
        <div class="sim-bubble-out">
          Время: ${simState.selectedSlot}
          <span class="float-right text-[9px] text-white/60 ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
        <div class="sim-bubble-in">
          📝 <strong>Проверьте параметры записи:</strong><br />
          • Услуга: ${simState.selectedService.name}<br />
          • Дата и время: ${simState.selectedDate} в ${simState.selectedSlot}<br />
          • Стоимость: ${simState.selectedService.price}<br />
          • Клиент: ${simState.clientName} (${simState.clientPhone})
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;
    }

    if (simState.step === 'confirm') {
      keyboardHtml = `
        <button id="simBtnConfirmBooking" class="btn-keynote-primary w-full text-xs py-3 bg-emerald-600">
          <i data-lucide="check-circle" class="w-4 h-4"></i>
          <span>✅ Подтвердить запись</span>
        </button>
      `;
    }

    if (simState.step === 'success') {
      chatHtml += `
        <div class="sim-bubble-in border-emerald-500/30 bg-emerald-950/30">
          🎉 <strong>Вы успешно записаны!</strong><br /><br />
          📍 Адрес: ул. Ленина, д. 42<br />
          🔔 <i>Бот пришлёт автонапоминание за 24 ч и за 2 ч до начала.</i>
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;

      keyboardHtml = `
        <div class="p-3 rounded-xl bg-electric-blue/10 border border-electric-blue/30 text-center space-y-2">
          <div class="text-xs font-mono text-white flex items-center justify-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-glow animate-ping"></span>
            Запись передана мастеру!
          </div>
          <button id="simSwitchToMasterBtn" class="btn-keynote-primary w-full text-xs py-2">
            👉 Экран мастера (Cockpit)
          </button>
        </div>
      `;
    }

    phoneChatBody.innerHTML = chatHtml;
    phoneKeyboardArea.innerHTML = keyboardHtml;

    const btnStart = document.getElementById('simBtnStartBooking');
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        simState.step = 'catalog';
        renderSimulator();
      });
    }

    document.querySelectorAll('.sim-select-svc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        simState.selectedService = simState.currentServices[idx];
        simState.step = 'dates';
        renderSimulator();
      });
    });

    document.querySelectorAll('.sim-select-date').forEach(btn => {
      btn.addEventListener('click', (e) => {
        simState.selectedDate = e.currentTarget.getAttribute('data-label');
        simState.step = 'slots';
        renderSimulator();
      });
    });

    document.querySelectorAll('.sim-select-slot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        simState.selectedSlot = e.currentTarget.getAttribute('data-slot');
        simState.step = 'confirm';
        renderSimulator();
      });
    });

    const btnConfirm = document.getElementById('simBtnConfirmBooking');
    if (btnConfirm) {
      btnConfirm.addEventListener('click', () => {
        simState.step = 'success';
        simState.masterHasNewBooking = true;
        if (masterPushBadge) masterPushBadge.classList.remove('hidden');
        renderSimulator();
      });
    }

    const btnSwitchMaster = document.getElementById('simSwitchToMasterBtn');
    if (btnSwitchMaster) {
      btnSwitchMaster.addEventListener('click', () => {
        if (simModeMaster) simModeMaster.click();
      });
    }
  }

  function renderMasterView(timeStr) {
    let chatHtml = '';
    let keyboardHtml = '';

    chatHtml += `
      <div class="sim-bubble-in">
        👑 <strong>Cockpit мастера:</strong><br />
        Управление расписанием и моментальные уведомления о новых клиентах.
        <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
      </div>
    `;

    if (simState.masterHasNewBooking && simState.selectedService) {
      chatHtml += `
        <div class="p-3.5 rounded-2xl bg-gradient-to-b from-[#182335] to-[#0f1724] border border-electric-blue/40 space-y-2">
          <div class="flex items-center justify-between pb-1.5 border-b border-white/[0.08]">
            <span class="font-mono text-[10px] font-bold text-electric-blue flex items-center gap-1.5">
              <i data-lucide="bell-ring" class="w-3.5 h-3.5 text-emerald-glow"></i>
              НОВАЯ ЗАПИСЬ ОНЛАЙН!
            </span>
            <span class="font-mono text-[9px] text-fog-veil">только что</span>
          </div>
          <div class="text-xs text-frost-glow space-y-1">
            <div>👤 <strong>Клиент:</strong> ${simState.clientName} (${simState.clientPhone})</div>
            <div>💅 <strong>Услуга:</strong> ${simState.selectedService.name}</div>
            <div>📅 <strong>Время:</strong> ${simState.selectedDate} в ${simState.selectedSlot}</div>
            <div>💰 <strong>Сумма:</strong> ${simState.selectedService.price}</div>
          </div>
          <div class="pt-1 text-[10px] font-mono text-fog-veil">
            Статус: ${
              simState.masterDecision === 'approved' 
                ? '<span class="text-emerald-glow font-bold">ПОДТВЕРЖДЕНО ✅</span>' 
                : simState.masterDecision === 'rejected'
                ? '<span class="text-rose-400 font-bold">ОТКЛОНЕНО ❌</span>'
                : '<span class="text-amber-300 font-bold">ОЖИДАЕТ РЕШЕНИЯ ⏳</span>'
            }
          </div>
        </div>
      `;

      if (!simState.masterDecision) {
        keyboardHtml = `
          <div class="grid grid-cols-2 gap-2">
            <button id="masterApproveBtn" class="sim-btn-action bg-emerald-600/30 border-emerald-500/50 text-emerald-300 hover:bg-emerald-600 font-bold flex items-center justify-center gap-1.5">
              <i data-lucide="check" class="w-3.5 h-3.5"></i>
              <span>Подтвердить</span>
            </button>
            <button id="masterRejectBtn" class="sim-btn-action bg-rose-600/20 border-rose-500/40 text-rose-300 hover:bg-rose-600 font-bold flex items-center justify-center gap-1.5">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
              <span>Отклонить</span>
            </button>
          </div>
        `;
      } else {
        keyboardHtml = `
          <div class="p-2.5 rounded-xl bg-white/[0.03] text-center text-xs text-moon-mist space-y-2">
            <div>Клиент моментально получил пуш в Telegram!</div>
            <button id="masterBackToClient" class="btn-keynote-primary w-full text-xs py-2">
              ← Вернуться к экрану клиента
            </button>
          </div>
        `;
      }
    } else {
      chatHtml += `
        <div class="sim-bubble-in">
          📅 <strong>Расписание на сегодня:</strong><br />
          • 10:00 — Снятие и гель-лак (Мария)<br />
          • 12:30 — Архитектура бровей (Елена)<br />
          • 15:00 — [Свободный слот]<br />
          • 17:30 — Наращивание ресниц (Дарья)<br /><br />
          <i>💡 Сделайте бронь в режиме клиента, чтобы протестировать пуш!</i>
          <span class="float-right text-[9px] text-fog-veil ml-2 mt-1 font-mono">${timeStr}</span>
        </div>
      `;

      keyboardHtml = `
        <div class="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
          <button class="sim-btn-action py-2">📅 Расписание</button>
          <button class="sim-btn-action py-2">⏰ Мой график</button>
          <button class="sim-btn-action py-2">💅 Мои услуги</button>
          <button class="sim-btn-action py-2">🔥 Горящие окна</button>
        </div>
      `;
    }

    phoneChatBody.innerHTML = chatHtml;
    phoneKeyboardArea.innerHTML = keyboardHtml;

    const btnApprove = document.getElementById('masterApproveBtn');
    if (btnApprove) {
      btnApprove.addEventListener('click', () => {
        simState.masterDecision = 'approved';
        renderSimulator();
      });
    }

    const btnReject = document.getElementById('masterRejectBtn');
    if (btnReject) {
      btnReject.addEventListener('click', () => {
        simState.masterDecision = 'rejected';
        renderSimulator();
      });
    }

    const btnBackClient = document.getElementById('masterBackToClient');
    if (btnBackClient) {
      btnBackClient.addEventListener('click', () => {
        if (simModeClient) simModeClient.click();
      });
    }
  }

  // Initial Simulator render
  renderSimulator();

  /* ==========================================================================
     3. ROI CALCULATOR
     ========================================================================== */
  const calcPriceInput = document.getElementById('calcPriceInput');
  const calcClientsInput = document.getElementById('calcClientsInput');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcClientsDisplay = document.getElementById('calcClientsDisplay');
  const calcSavedMoney = document.getElementById('calcSavedMoney');
  const calcSavedHours = document.getElementById('calcSavedHours');

  function updateCalculator() {
    if (!calcPriceInput || !calcClientsInput) return;

    const price = parseInt(calcPriceInput.value, 10);
    const clientsPerWeek = parseInt(calcClientsInput.value, 10);

    calcPriceDisplay.textContent = `${price.toLocaleString('ru-RU')} ₽`;
    calcClientsDisplay.textContent = `${clientsPerWeek} чел.`;

    const monthlyClients = clientsPerWeek * 4;
    const savedNoShows = Math.max(2, Math.round(monthlyClients * 0.05));
    const savedRevenue = savedNoShows * price;
    const savedHoursValue = Math.round((monthlyClients * 22) / 60);

    calcSavedMoney.textContent = `+${savedRevenue.toLocaleString('ru-RU')} ₽`;
    calcSavedHours.textContent = `${savedHoursValue} часа`;
  }

  if (calcPriceInput && calcClientsInput) {
    calcPriceInput.addEventListener('input', updateCalculator);
    calcClientsInput.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  /* ==========================================================================
     4. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const toggleBtn = item.querySelector('.faq-toggle');
    const answer = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');

    if (toggleBtn && answer && chevron) {
      toggleBtn.addEventListener('click', () => {
        const isShown = answer.classList.contains('show');

        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherChevron = otherItem.querySelector('.faq-chevron');
          if (otherAnswer && otherChevron) {
            otherAnswer.classList.remove('show');
            otherChevron.classList.remove('rotate');
          }
        });

        if (!isShown) {
          answer.classList.add('show');
          chevron.classList.add('rotate');
        }
      });
    }
  });

  /* ==========================================================================
     5. STICKY NAVBAR
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-2xl', 'bg-canvas/95');
    } else {
      navbar.classList.remove('shadow-2xl', 'bg-canvas/95');
    }
  });

});
