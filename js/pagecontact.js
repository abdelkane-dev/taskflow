/* ==========================================================
   contact.js — comportement de pagecontact.html
   ========================================================== */
(function () {
  'use strict';

  var EMAIL = 'abdoulkarimt334@gmail.com';
  var WHATSAPP = '22393789916';

  /* ---------- Thème (clair / sombre) ---------- */
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle-btn');

  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) { /* stockage indisponible : on garde le thème par défaut */ }

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

  /* ---------- Formulaire ---------- */
  var form = document.getElementById('contact-form');
  if (!form) return;

  var fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };
  var reason = document.getElementById('reason');
  var status = document.getElementById('form-status');
  var counter = document.getElementById('char-count');

  fields.message.addEventListener('input', function () {
    counter.textContent = fields.message.value.length;
  });

  function setError(key, text) {
    var err = document.getElementById(key + '-error');
    if (err) err.textContent = text;
    fields[key].classList.toggle('is-invalid', Boolean(text));
  }

  function validate() {
    var ok = true;
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (fields.name.value.trim().length < 2) {
      setError('name', 'Indiquez votre nom et prénom.'); ok = false;
    } else setError('name', '');

    if (!emailRe.test(fields.email.value.trim())) {
      setError('email', 'Saisissez une adresse email valide.'); ok = false;
    } else setError('email', '');

    if (fields.subject.value.trim().length < 3) {
      setError('subject', 'Indiquez le sujet de votre message.'); ok = false;
    } else setError('subject', '');

    if (fields.message.value.trim().length < 10) {
      setError('message', 'Votre message doit contenir au moins 10 caractères.'); ok = false;
    } else setError('message', '');

    return ok;
  }

  function buildText() {
    return (
      'Bonjour Abdoul Karim,\n\n' +
      fields.message.value.trim() +
      '\n\n—\n' +
      fields.name.value.trim() + '\n' +
      fields.email.value.trim()
    );
  }

  function buildSubject() {
    return '[' + reason.value + '] ' + fields.subject.value.trim();
  }

  function setStatus(text, type) {
    status.textContent = text;
    status.className = 'form-note' + (type ? ' is-' + type : '');
  }

  /* Envoi par email : ouvre l'application de messagerie */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      setStatus('Corrigez les champs signalés avant d\'envoyer.', 'error');
      return;
    }
    var url = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(buildSubject()) +
      '&body=' + encodeURIComponent(buildText());
    window.location.href = url;
    setStatus('Votre messagerie s\'ouvre. Il ne reste qu\'à cliquer sur Envoyer.', 'success');
  });

  /* Envoi par WhatsApp */
  var waBtn = document.getElementById('send-whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', function () {
      if (!validate()) {
        setStatus('Corrigez les champs signalés avant d\'envoyer.', 'error');
        return;
      }
      var text = buildSubject() + '\n\n' + buildText();
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
      setStatus('WhatsApp s\'ouvre avec votre message.', 'success');
    });
  }
})();
