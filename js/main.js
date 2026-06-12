/* Warm Ink & Macaron — Theme JS (i18n + interactions) */

(function () {
  'use strict';

  // ═══════════════════════════════════════════
  //  I18N — Translation tables
  // ═══════════════════════════════════════════
  var I18N = {
    zh: {
      'nav.traces':               '痕迹',
      'nav.notes':                '笔记',
      'nav.projects':             '项目',
      'nav.about':                '关于我',
      'lang.toggle':              'EN',

      'home.greeting':             '你好！',
      'home.titlePrefix':          '你好，我是 ',
      'home.titleSuffix':          '。欢迎来到我的小世界～',
      'home.desc':                 '在这里你会看到：我的书影音游戏随想、教程、项目、白日梦……希望你看得开心！',
      'home.scroll':              '探索我的世界',
      'home.latest':              '最新文章',
      'home.continue':            '继续阅读',
      'home.essential':           '「必读推荐」',
      'home.entry':               '第 ',

      'cards.traces':             '书、电影、音乐和游戏的精选记录。',
      'cards.tracesLink':         '查看记录',
      'cards.notes':              '有关突然的灵感、思考与分享的随笔。',
      'cards.notesLink':          '阅读随笔',
      'cards.projects':           '一些尝试与创新项目，不定期更新。',
      'cards.projectsLink':       '浏览项目',
      'cards.about':              '外星驻地球特派员。',
      'cards.aboutLink':          '我的故事',

      'traces.desc':              '一些作品在心中留下的痕迹。书、电影、音乐、游戏，都有。不是碰过的都会写，也不是写了就是最好的。只是恰好有话想说。就这样。',
      'traces.filter.books':      '书',
      'traces.filter.films':      '电影',
      'traces.filter.games':      '游戏',
      'traces.filter.music':      '音乐',
      'traces.pinned':            '精选推荐',
      'traces.recent':            '最近记录',
      'traces.search':            '搜索书、电影、音乐、游戏...',
      'traces.empty':             '暂无记录。新建一篇分类为 <code>books</code>、<code>movies</code>、<code>games</code> 或 <code>music</code> 的文章开始吧。',
      'traces.emptyNote':         '一个正在慢慢填满书、电影、音乐、游戏痕迹的空间。敬请期待。',

      'common.coffee':             '如果你有收获，可以<a href="/about" style="color:var(--macaron-orange);font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px;">请我喝杯咖啡</a> :)',

      'notes.title':              '文字与随想',
      'notes.desc':               '一个关于设计哲学、思考与生活观察的灵感花园。',
      'notes.filter.all':         '全部',
      'notes.filter.sparks':      '火花',
      'notes.filter.reflections': '反思',
      'notes.filter.skills':      '技能',
      'notes.search':             '搜索文章...',

      'pagination.prev':          '← 上一篇',
      'pagination.next':          '下一篇 →',

      'about.coffeeTitle':        '请我喝咖啡',
      'about.coffeeDesc':         '如果你觉得这些内容对你有帮助，可以请我喝杯咖啡——赞助者可以在备注中留下邮箱和愿望，我会根据内容随机发送电子资源或亲自回复。感谢你的支持！',
      'about.connect':            '联系我',
      'about.digitalCraft':       '数字工艺',
      'about.digitalCraftDesc':   '我把代码当作手工装订——每一行都是有意识的缝线。我打造极简、快速、有灵魂的数字体验。',
      'about.humanCentric':       '以人为本',
      'about.humanCentricDesc':   '科技应服务于人的生活节奏，而非反过来。我的作品注重平静与清晰。',
      'about.quote':              '"我相信缓慢生长之物的美。在即时推送的世界里，我选择墨迹在纸上刻意的划痕。"',
    },
    en: {
      'nav.traces':               'Traces',
      'nav.notes':                'Notes',
      'nav.projects':             'Projects',
      'nav.about':                'About Me',
      'lang.toggle':              '中文',

      'home.greeting':             'Hello!',
      'home.titlePrefix':          'Hello, I\'m ',
      'home.titleSuffix':          '. Welcome to my little world ~',
      'home.desc':                 'Here you\'ll find: my random thoughts, my daydreams, my tutorials, my creations, my book/movie/music/game diaries... Hope you feel at home here!',
      'home.scroll':              'Scroll to explore my world',
      'home.latest':              'Latest Scribble',
      'home.continue':            'Continue reading',
      'home.essential':           '"Essential reading"',
      'home.entry':               'Entry #',

      'cards.traces':             'A curated log of books, films, music, and games that spark joy.',
      'cards.tracesLink':         'See Log',
      'cards.notes':              'Long-form essays on design philosophy, intentionality, and the slow web.',
      'cards.notesLink':          'Read Essays',
      'cards.projects':           'Open-source experiments and personal tools crafted with a charcoal soul.',
      'cards.projectsLink':       'View Projects',
      'cards.about':              'My journey from ink to bits, and why I still prefer a fountain pen.',
      'cards.aboutLink':          'My Story',

      'traces.desc':              'Marks left in the heart by certain works. Books, films, music, games — all are here. Not everything touched gets written down, and what is written isn\'t always the best. Just moments I happened to have something to say. That\'s all.',
      'traces.filter.books':      'Books',
      'traces.filter.films':      'Films',
      'traces.filter.games':      'Games',
      'traces.filter.music':      'Music',
      'traces.pinned':            'Pinned Recommendations',
      'traces.recent':            'Recent Entries',
      'traces.search':            'Search books, films, music, games...',
      'traces.empty':             'No traces yet. Create a post with category <code>books</code>, <code>movies</code>, <code>games</code>, or <code>music</code> to get started.',
      'traces.emptyNote':         'A space slowly filling with books, films, music, and games. Check back soon.',

      'common.coffee':             'If anything here resonates, <a href="/about" style="color:var(--macaron-orange);font-weight:700;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:4px;">buy me a coffee</a> :)',

      'notes.title':              'Writings &amp; Musings',
      'notes.desc':               'A digital garden of half-baked thoughts, detailed tutorials, and gentle observations on life.',
      'notes.filter.all':         'All Entries',
      'notes.filter.sparks':      'Sparks',
      'notes.filter.reflections': 'Reflections',
      'notes.filter.skills':      'Skills',
      'notes.search':             'Search articles...',

      'pagination.prev':          '← Prev',
      'pagination.next':          'Next →',

      'about.coffeeTitle':        'Buy Me a Coffee',
      'about.coffeeDesc':         'If you find this helpful, consider buying me a coffee — all sponsors can leave an email and a wish in the note, and I\'ll send a random digital resource or a personal reply based on it. Thanks for your support!',
      'about.connect':            'Let\'s Connect',
      'about.digitalCraft':       'Digital Craft',
      'about.digitalCraftDesc':   'I treat code like bookbinding — every line is an intentional stitch. I build minimal, fast, and soulful digital experiences.',
      'about.humanCentric':       'Human Centric',
      'about.humanCentricDesc':   'Technology should serve the human pace of life, not the other way around. My work prioritizes calm and clarity.',
      'about.quote':              '"I believe in the beauty of things that take time to grow. In a world of instant feeds, I choose the deliberate scratch of ink on paper."',
    }
  };

  var LANG_KEY = 'warm-ink-lang';

  function getLang() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
    return (navigator.language || '').startsWith('zh') ? 'zh' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) el.innerHTML = t[key];
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    // Update toggle button class (zh → thumb left, en → thumb right)
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.classList.remove('zh', 'en');
      btn.classList.add(lang);
    });

    // Pagination prev/next links
    var prev = document.querySelector('.pagination .extend.prev');
    var next = document.querySelector('.pagination .extend.next');
    if (prev) prev.textContent = t['pagination.prev'];
    if (next) next.textContent = t['pagination.next'];
  }

  // ═══════════════════════════════════════════
  //  Init
  // ═══════════════════════════════════════════
  var currentLang = getLang();
  applyLang(currentLang);

  // Language toggle button (click anywhere inside .lang-toggle)
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.lang-toggle');
    if (toggle) {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      setLang(currentLang);
    }
  });

  // ═══════════════════════════════════════════
  //  Mobile nav toggle
  // ═══════════════════════════════════════════
  var menuBtn = document.querySelector('.nav-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = mobileNav.classList.contains('open') ? 'close' : 'menu';
    });
  }

  // ── Hero parallax (index page only) ───────────────────────────
  var heroImg = document.querySelector('.hero-image-frame img');
  if (heroImg) {
    document.addEventListener('mousemove', function (e) {
      var moveX = (e.clientX - window.innerWidth  / 2) / 60;
      var moveY = (e.clientY - window.innerHeight / 2) / 60;
      heroImg.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
  }

  // ── 分类筛选（Notes 页面）—— 优先委托页面内联脚本 ─────────────
  var filterBtns = document.querySelectorAll('.filter-btn');
  var postItems  = document.querySelectorAll('.post-item');
  if (filterBtns.length && postItems.length && typeof window.applyNotesFilters !== 'function') {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.dataset.category || 'all';
        postItems.forEach(function (item) {
          var itemCat = item.dataset.category || 'all';
          item.style.display = (category === 'all' || itemCat === category) ? '' : 'none';
        });
      });
    });
  }

  // ── Same-page anchor smooth scroll ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.querySelector(a.getAttribute('href'));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Highlight current nav link + macaron accent color ──────────
  var currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    var accent = link.getAttribute('data-accent') || '';
    if (href && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
      if (accent) link.style.borderBottomColor = accent;
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

  // ── Pagination: 4-color cycle + smaller ────────────────────────
  var macarons = ['var(--macaron-orange)', 'var(--macaron-pink)', 'var(--macaron-green)', 'var(--macaron-blue)'];
  document.querySelectorAll('.pagination .page-number').forEach(function (el, i) {
    var c = macarons[i % 4];
    if (el.classList.contains('current')) {
      el.style.background = c;
      el.style.borderColor = c;
    } else {
      el.addEventListener('mouseenter', function () { el.style.background = c; el.style.borderColor = c; el.style.color = '#fff'; });
      el.addEventListener('mouseleave', function () { el.style.background = ''; el.style.borderColor = ''; el.style.color = ''; });
    }
  });

})();
