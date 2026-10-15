/* ==========================================================
   collegues.js — logique de collegues.html
   Lit window.COLLEAGUES (collegues-data.js) et construit
   l'interface. Aucune donnée personnelle n'est écrite ici.
   ========================================================== */
(function () {
  'use strict';

  var DATA = Array.isArray(window.COLLEAGUES) ? window.COLLEAGUES : [];
  var CONTACT_EMAIL = window.COLLEAGUES_CONTACT || '';

  /* ---------- Petits utilitaires ---------- */

  /** Crée un élément en toute sécurité (textContent, jamais innerHTML). */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function fullName(c) {
    return (c.firstName + ' ' + c.lastName).trim();
  }

  function initials(c) {
    var first = (c.firstName || '').trim().charAt(0);
    var last = (c.lastName || '').trim().charAt(0);
    return (first + last).toUpperCase() || '?';
  }

  /** N'accepte que des liens http(s) pour les champs externes. */
  function safeUrl(url) {
    return typeof url === 'string' && /^https?:\/\//i.test(url) ? url : null;
  }

  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /* ---------- Thème ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle-btn');

  try {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      root.setAttribute('data-theme', savedTheme);
    }
  } catch (e) { /* stockage indisponible */ }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById('mobile-nav-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------- Carte d'un collègue ---------- */
  function buildAvatar(c) {
    var wrap = el('div', 'colleague-avatar');
    wrap.setAttribute('aria-hidden', 'true');

    if (c.photo) {
      var img = document.createElement('img');
      img.src = c.photo;
      img.alt = '';
      img.loading = 'lazy';
      // Photo introuvable : retour aux initiales
      img.addEventListener('error', function () {
        wrap.textContent = initials(c);
      });
      wrap.appendChild(img);
    } else {
      wrap.textContent = initials(c);
    }
    return wrap;
  }

  function buildLinks(c) {
    var list = el('div', 'colleague-links');
    var count = 0;

    function add(label, href, external) {
      if (!href) return;
      var a = el('a', null, label);
      a.href = href;
      if (external) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      list.appendChild(a);
      count++;
    }

    if (c.email) add('Email', 'mailto:' + c.email, false);
    if (c.phone) add('Téléphone', 'tel:' + String(c.phone).replace(/\s+/g, ''), false);
    add('GitHub', safeUrl(c.github), true);
    add('LinkedIn', safeUrl(c.linkedin), true);

    return count ? list : null;
  }

  function buildActions(c) {
    var actions = el('div', 'colleague-actions');

    if (c.cv) {
      var view = el('button', 'btn btn-secondary btn-sm', 'Voir le CV');
      view.type = 'button';
      view.setAttribute('aria-label', 'Voir le CV de ' + fullName(c));
      view.addEventListener('click', function () { openCvModal(c); });

      var dl = el('a', 'btn btn-primary btn-sm', 'Télécharger');
      dl.href = c.cv;
      dl.setAttribute('download', 'CV_' + c.id + '.pdf');
      dl.setAttribute('aria-label', 'Télécharger le CV de ' + fullName(c));

      actions.appendChild(view);
      actions.appendChild(dl);
    } else {
      var pending = el('span', 'btn btn-secondary btn-sm is-disabled', 'CV bientôt disponible');
      pending.setAttribute('aria-disabled', 'true');
      actions.appendChild(pending);
    }
    return actions;
  }

  function buildCard(c) {
    var card = el('article', 'colleague-card');
    card.setAttribute('aria-label', fullName(c));

    var head = el('div', 'colleague-head');
    head.appendChild(buildAvatar(c));

    var titles = el('div');
    titles.appendChild(el('h2', 'colleague-name', c.firstName + ' ' + c.lastName));
    titles.appendChild(c.role
      ? el('p', 'colleague-role', c.role)
      : el('p', 'colleague-role is-empty', 'Profil en cours de rédaction'));
    head.appendChild(titles);
    card.appendChild(head);

    if (c.bio) card.appendChild(el('p', 'colleague-bio', c.bio));

    if (Array.isArray(c.skills) && c.skills.length) {
      var skills = el('ul', 'colleague-skills');
      c.skills.forEach(function (s) { skills.appendChild(el('li', null, s)); });
      card.appendChild(skills);
    }

    var links = buildLinks(c);
    if (links) card.appendChild(links);

    card.appendChild(buildActions(c));
    return card;
  }

  /* ---------- Rendu + recherche ---------- */
  var grid = document.getElementById('colleagues-grid');
  var emptyMsg = document.getElementById('colleagues-empty');
  var countEl = document.getElementById('colleagues-count');
  var search = document.getElementById('colleague-search');

  function searchableText(c) {
    return normalize([
      fullName(c), c.role, c.bio, (c.skills || []).join(' ')
    ].join(' '));
  }

  function render(query) {
    var q = normalize(query).trim();
    var list = DATA.filter(function (c) {
      return !q || searchableText(c).indexOf(q) !== -1;
    });

    grid.textContent = '';
    list.forEach(function (c) { grid.appendChild(buildCard(c)); });

    emptyMsg.hidden = list.length !== 0;
    countEl.textContent = list.length + ' collègue' + (list.length > 1 ? 's' : '') +
      (q ? ' trouvé' + (list.length > 1 ? 's' : '') : '');
  }

  if (search) {
    search.addEventListener('input', function () { render(search.value); });
  }
  render('');

  /* ---------- Modale d'aperçu du CV ---------- */
  var backdrop = document.getElementById('cv-modal-backdrop');
  var frame = document.getElementById('cv-modal-frame');
  var modalTitle = document.getElementById('cv-modal-title');
  var modalDownload = document.getElementById('cv-modal-download');
  var closeBtn = document.getElementById('close-cv-modal-btn');
  var lastTrigger = null;

  function openCvModal(c) {
    lastTrigger = document.activeElement;
    modalTitle.textContent = 'CV — ' + fullName(c);
    frame.src = c.cv;
    modalDownload.href = c.cv;
    modalDownload.setAttribute('download', 'CV_' + c.id + '.pdf');
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeCvModal() {
    backdrop.hidden = true;
    frame.src = 'about:blank';
    document.body.style.overflow = '';
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  closeBtn.addEventListener('click', closeCvModal);
  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) closeCvModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !backdrop.hidden) closeCvModal();
  });

  /* ---------- Lien « demander l'ajout de mon profil » ---------- */
  var joinLink = document.getElementById('join-mail-link');
  if (joinLink && CONTACT_EMAIL) {
    var subject = 'Ajout de mon profil sur la page Collègues';
    var body =
      'Bonjour Abdoul Karim,\n\n' +
      'Je souhaite être ajouté(e) à la page Collègues.\n\n' +
      'Prénom(s) :\nNom :\nRôle / formation :\nPrésentation (1 à 2 phrases) :\n' +
      'Compétences (séparées par des virgules) :\nEmail :\nGitHub / LinkedIn :\n\n' +
      'Je joins ma photo et mon CV en PDF.\n';
    joinLink.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
  }
})();
