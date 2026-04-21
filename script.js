/* ================= CONFIG ================= */
const EMAIL_TO = 'garzonp2001@gmail.com';

/* ================= I18N ================= */
const I18N = {
  es: {
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.work': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    'hero.available': 'Disponible para nuevos proyectos',
    'hero.bio': 'Full-Stack Developer enfocado en entregar software de alta calidad, escalable y mantenible. Construyo soluciones web y móviles end-to-end, con código limpio y arquitectura sólida.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',
    'hero.loc': 'MEDELLÍN · RIONEGRO, CO',
    'hero.roles': ['Full-Stack Developer','Clean Code Advocate','Problem Solver','Web & Mobile'],

    'skills.label': '01 — Stack técnico',
    'skills.title': 'Herramientas con las que construyo.',
    'skills.groups.frontend': 'Frontend',
    'skills.groups.backend':  'Backend',
    'skills.groups.data':     'Data & DB',
    'skills.groups.tools':    'Tools & DevOps',

    'exp.label': '02 — Trayectoria',
    'exp.title': 'Experiencia profesional.',

    'work.label': '03 — Selected work',
    'work.title': 'Proyectos que he construido.',

    'blog.label': '04 — Escribiendo',
    'blog.title': 'Notas sobre código y producto.',
    'blog.cta.text': 'Publico artículos técnicos en mi newsletter — arquitectura, buenas prácticas y aprendizajes reales de producción.',
    'blog.cta.link': 'Ver todos los artículos →',
    'blog.cta.link.href': 'https://newsletter.pavas.io/es/articles',
    'blog.soon': 'Próximamente',
    'blog.soon.desc': 'Nuevo artículo en preparación. Suscríbete al newsletter para enterarte.',
    'blog.read': 'Leer artículo →',

    'contact.label': '05 — Contacto',
    'contact.title': '¿Tienes un proyecto en mente? <em>Hablemos.</em>',
    'contact.lead': 'Respondo a todos los mensajes en menos de 24 horas. Abierto a roles full-time, contratos y colaboraciones freelance.',
    'contact.form.name': 'Nombre',
    'contact.form.name.ph': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.ph': 'tu@email.com',
    'contact.form.msg': 'Mensaje',
    'contact.form.msg.ph': 'Cuéntame sobre el proyecto, timelines, etc.',
    'contact.form.hint': 'Al enviar, abriré tu cliente de email con el mensaje pre-escrito hacia ' + EMAIL_TO + '.',
    'contact.form.send': 'Enviar mensaje',
    'contact.err.empty': '✗ Completa todos los campos.',
    'contact.err.email': '✗ Email no válido.',
    'contact.ok': '✓ Abriendo tu cliente de email...',
    'contact.subject': 'Contacto desde pavas.dev · {name}',

    'footer.tag': 'Diseñado & codeado a mano · Medellín / Rionegro 🇨🇴',

    // Experiencia
    'exp.1.role':    'Senior FullStack Developer',
    'exp.1.company': 'Team 360 Staffing',
    'exp.1.body':    'Desarrollo end-to-end de soluciones empresariales. Liderazgo técnico en features críticas, arquitectura y DX del equipo.',
    'exp.1.b1':      'Diseño e implementación de arquitecturas escalables en producción.',
    'exp.1.b2':      'Mentoría a developers junior y definición de estándares de código y revisión.',
    'exp.1.b3':      'Integración de stacks modernos de frontend y backend en proyectos cliente.',

    'exp.2.role':    'Líder Técnico',
    'exp.2.company': 'Extiblu',
    'exp.2.body':    'Lideré el desarrollo técnico de productos y servicios, coordinando equipo, arquitectura y delivery.',
    'exp.2.b1':      'Dirección técnica de equipo en features clave y entregas multi-proyecto.',
    'exp.2.b2':      'Definición de arquitectura, patrones y estándares de calidad del código.',
    'exp.2.b3':      'Puente entre negocio y desarrollo: traducir requerimientos a soluciones viables.',

    'exp.3.role':    'FullStack Developer · Junior → Middle → Senior',
    'exp.3.company': 'Extiblu',
    'exp.3.body':    'Crecimiento desde rol junior hasta senior dentro del equipo. Construí features end-to-end y ganaba alcance conforme crecía la responsabilidad técnica.',
    'exp.3.b1':      'Desarrollo de interfaces y APIs para proyectos cliente, pixel-perfect y con foco en rendimiento.',
    'exp.3.b2':      'Aplicación progresiva de principios SOLID, patrones de diseño y clean architecture.',
    'exp.3.b3':      'Contribución a la librería interna de componentes y estándares del equipo.',

    // Proyectos
    'p.marketplace.kind': 'Live · Full-Stack',
    'p.marketplace.name': 'Pavas Marketplace',
    'p.marketplace.desc': 'Plataforma de compra y venta segura. Catálogo multi-categoría, panel de usuario, favoritos, búsqueda y autenticación. Multi-idioma ES/EN.',

    'p.finance.kind': 'Live · Full-Stack',
    'p.finance.name': 'Pavas Finance',
    'p.finance.desc': 'Aplicación web de finanzas personales con autenticación, multi-idioma y dashboard. Control de ingresos, gastos y seguimiento financiero.',

    'p.newsletter.kind': 'Live · Editorial',
    'p.newsletter.name': 'Pavas Newsletter',
    'p.newsletter.desc': 'Blog y newsletter de artículos sobre desarrollo de software. Contenido editorial con suscripción por email y soporte bilingüe ES/EN.',

    'p.saas.kind': 'GitHub · Backend',
    'p.saas.name': 'SaaS API',
    'p.saas.desc': 'API base para productos SaaS multi-tenant. Autenticación, gestión de usuarios y arquitectura escalable lista para producción.',

    'p.opps.kind': 'GitHub · Full-Stack',
    'p.opps.name': 'Opportunities',
    'p.opps.desc': 'Plataforma para descubrir y gestionar oportunidades laborales o de negocio. Separada en repos de frontend y backend.',

    'p.todo.kind': 'GitHub · CLI',
    'p.todo.name': 'ToDo Console',
    'p.todo.desc': 'Aplicación de consola para gestión de tareas. Ejercicio de arquitectura limpia y principios SOLID aplicados a una CLI.',

    'p.link.live':    'Live',
    'p.link.github':  'GitHub',
    'p.link.front':   'Frontend',
    'p.link.back':    'Backend',

    // Blog
    'a.1.title': 'Fundamentos para un código limpio, flexible y escalable',
    'a.1.tag':   'Arquitectura',
    'a.1.date':  '15 Ene 2025',
    'a.1.read':  '10 min',
  },
  en: {
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.work': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    'hero.available': 'Available for new projects',
    'hero.bio': 'Full-Stack Developer focused on shipping high-quality, scalable and maintainable software. I build end-to-end web and mobile solutions with clean code and solid architecture.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download CV',
    'hero.loc': 'MEDELLÍN · RIONEGRO, CO',
    'hero.roles': ['Full-Stack Developer','Clean Code Advocate','Problem Solver','Web & Mobile'],

    'skills.label': '01 — Tech stack',
    'skills.title': 'The tools I build with.',
    'skills.groups.frontend': 'Frontend',
    'skills.groups.backend':  'Backend',
    'skills.groups.data':     'Data & DB',
    'skills.groups.tools':    'Tools & DevOps',

    'exp.label': '02 — Career',
    'exp.title': 'Professional experience.',

    'work.label': '03 — Selected work',
    'work.title': 'Projects I have built.',

    'blog.label': '04 — Writing',
    'blog.title': 'Notes on code & product.',
    'blog.cta.text': 'I publish technical articles on my newsletter — architecture, best practices and real production learnings.',
    'blog.cta.link': 'Read all articles →',
    'blog.cta.link.href': 'https://newsletter.pavas.io/en/articles',
    'blog.soon': 'Coming soon',
    'blog.soon.desc': 'New article in the works. Subscribe to the newsletter to stay in the loop.',
    'blog.read': 'Read article →',

    'contact.label': '05 — Contact',
    'contact.title': 'Got a project in mind? <em>Let’s talk.</em>',
    'contact.lead': 'I reply to every message within 24 hours. Open to full-time, contract and freelance work.',
    'contact.form.name': 'Name',
    'contact.form.name.ph': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.ph': 'you@email.com',
    'contact.form.msg': 'Message',
    'contact.form.msg.ph': 'Tell me about the project, timelines, etc.',
    'contact.form.hint': 'On submit, your email client will open with a pre-written message to ' + EMAIL_TO + '.',
    'contact.form.send': 'Send message',
    'contact.err.empty': '✗ Please fill in all fields.',
    'contact.err.email': '✗ Invalid email.',
    'contact.ok': '✓ Opening your email client...',
    'contact.subject': 'Contact from pavas.dev · {name}',

    'footer.tag': 'Hand-designed & hand-coded · Medellín / Rionegro 🇨🇴',

    'exp.1.role':    'Senior FullStack Developer',
    'exp.1.company': 'Team 360 Staffing',
    'exp.1.body':    'End-to-end development of enterprise solutions. Technical leadership on critical features, architecture and team DX.',
    'exp.1.b1':      'Designed and shipped scalable production architectures.',
    'exp.1.b2':      'Mentored junior developers and set code/review standards.',
    'exp.1.b3':      'Integrated modern frontend and backend stacks on client projects.',

    'exp.2.role':    'Tech Lead',
    'exp.2.company': 'Extiblu',
    'exp.2.body':    'Led the technical development of products and services — team, architecture and delivery.',
    'exp.2.b1':      'Technical direction for multi-project deliveries.',
    'exp.2.b2':      'Defined architecture, patterns and code-quality standards.',
    'exp.2.b3':      'Bridge between business and engineering: turning requirements into viable solutions.',

    'exp.3.role':    'FullStack Developer · Junior → Mid → Senior',
    'exp.3.company': 'Extiblu',
    'exp.3.body':    'Grew from junior to senior within the team. Built end-to-end features and took on more scope as technical responsibility grew.',
    'exp.3.b1':      'Built UIs and APIs for client projects — pixel-perfect and performance-focused.',
    'exp.3.b2':      'Progressive adoption of SOLID, design patterns and clean architecture.',
    'exp.3.b3':      'Contributed to the internal component library and team standards.',

    'p.marketplace.kind': 'Live · Full-Stack',
    'p.marketplace.name': 'Pavas Marketplace',
    'p.marketplace.desc': 'Secure buy & sell platform. Multi-category catalog, user panel, favorites, search and auth. Multi-language ES/EN.',

    'p.finance.kind': 'Live · Full-Stack',
    'p.finance.name': 'Pavas Finance',
    'p.finance.desc': 'Personal finance web app with auth, multi-language and dashboard. Track income, expenses and financial goals.',

    'p.newsletter.kind': 'Live · Editorial',
    'p.newsletter.name': 'Pavas Newsletter',
    'p.newsletter.desc': 'Blog & newsletter on software development. Editorial content with email subscription and bilingual ES/EN support.',

    'p.saas.kind': 'GitHub · Backend',
    'p.saas.name': 'SaaS API',
    'p.saas.desc': 'Base API for multi-tenant SaaS products. Auth, user management and a scalable architecture ready for production.',

    'p.opps.kind': 'GitHub · Full-Stack',
    'p.opps.name': 'Opportunities',
    'p.opps.desc': 'Platform to discover and manage job & business opportunities. Split across frontend and backend repos.',

    'p.todo.kind': 'GitHub · CLI',
    'p.todo.name': 'ToDo Console',
    'p.todo.desc': 'Console app for task management. A clean-architecture + SOLID exercise applied to a CLI.',

    'p.link.live':    'Live',
    'p.link.github':  'GitHub',
    'p.link.front':   'Frontend',
    'p.link.back':    'Backend',

    'a.1.title': 'Fundamentals for clean, flexible, scalable code',
    'a.1.tag':   'Architecture',
    'a.1.date':  'Jan 15, 2025',
    'a.1.read':  '10 min',
  }
};

let LANG = localStorage.getItem('lang') || 'es';
if (LANG !== 'es' && LANG !== 'en') LANG = 'es';

function t(key) {
  const dict = I18N[LANG] || I18N.es;
  if (key in dict) return dict[key];
  return I18N.es[key] || key;
}

/* ================= DATA ================= */
// Skills con documentación oficial
const SKILLS = [
  { groupKey: 'skills.groups.frontend', num: '01', items: [
    { name: 'React',        slug: 'react',        level: 'senior', href: 'https://react.dev/' },
    { name: 'React Native', slug: 'react',        level: 'senior', href: 'https://reactnative.dev/' },
    { name: 'TypeScript',   slug: 'typescript',   level: 'senior', href: 'https://www.typescriptlang.org/docs/' },
    { name: 'JavaScript',   slug: 'javascript',   level: 'senior', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Expo',         slug: 'expo',         level: 'mid',    href: 'https://docs.expo.dev/' },
  ]},
  { groupKey: 'skills.groups.backend', num: '02', items: [
    { name: 'Node.js',      slug: 'nodedotjs',    level: 'senior', href: 'https://nodejs.org/docs/latest/api/' },
    { name: 'Express',      slug: 'express',      level: 'senior', href: 'https://expressjs.com/' },
    { name: 'NestJS',       slug: 'nestjs',       level: 'senior', href: 'https://docs.nestjs.com/' },
    { name: 'Laravel',      slug: 'laravel',      level: 'senior', href: 'https://laravel.com/docs' },
    { name: 'PHP',          slug: 'php',          level: 'senior', href: 'https://www.php.net/docs.php' },
    { name: '.NET / C#',    slug: 'dotnet',       level: 'mid',    href: 'https://learn.microsoft.com/en-us/dotnet/' },
  ]},
  { groupKey: 'skills.groups.data', num: '03', items: [
    { name: 'MySQL',        slug: 'mysql',        level: 'senior', href: 'https://dev.mysql.com/doc/' },
    { name: 'MongoDB',      slug: 'mongodb',      level: 'mid',    href: 'https://www.mongodb.com/docs/' },
    { name: 'PostgreSQL',   slug: 'postgresql',   level: 'mid',    href: 'https://www.postgresql.org/docs/' },
    { name: 'Python',       slug: 'python',       level: 'mid',    href: 'https://docs.python.org/3/' },
  ]},
  { groupKey: 'skills.groups.tools', num: '04', items: [
    { name: 'Docker',       slug: 'docker',       level: 'senior', href: 'https://docs.docker.com/' },
    { name: 'Git',          slug: 'git',          level: 'senior', href: 'https://git-scm.com/doc' },
    { name: 'GitHub',       slug: 'github',       level: 'senior', href: 'https://docs.github.com/' },
    { name: 'Linux',        slug: 'linux',        level: 'mid',    href: 'https://www.kernel.org/doc/html/latest/' },
    { name: 'Postman',      slug: 'postman',      level: 'senior', href: 'https://learning.postman.com/docs/introduction/overview/' },
  ]},
];

const EXPERIENCE = [
  { key: 'exp.1', chips: ['TypeScript','Node.js','React','.NET'] },
  { key: 'exp.2', chips: ['Laravel','PHP','React','MySQL','Docker'] },
  { key: 'exp.3', chips: ['JavaScript','TypeScript','React','Node.js','PHP'] },
];

const PROJECTS = [
  { key: 'p.marketplace', chips: ['Full-Stack','MinIO','i18n'],
    links: [{ labelKey: 'p.link.live',   href: 'https://marketplace.pavas.io/' }] },
  { key: 'p.finance',     chips: ['Full-Stack','Auth','i18n'],
    links: [{ labelKey: 'p.link.live',   href: 'https://finance.pavas.io/es/login' }] },
  { key: 'p.newsletter',  chips: ['Full-Stack','CMS','Email'],
    links: [{ labelKey: 'p.link.live',   href: 'https://newsletter.pavas.io/es/articles' }] },
  { key: 'p.saas',        chips: ['Backend','REST','Multi-tenant'],
    links: [{ labelKey: 'p.link.github', href: 'https://github.com/juanpavasgarzon/saas-api' }] },
  { key: 'p.opps',        chips: ['Full-Stack','Domain-Driven'],
    links: [
      { labelKey: 'p.link.front', href: 'https://github.com/juanpavasgarzon/opportunities-front' },
      { labelKey: 'p.link.back',  href: 'https://github.com/juanpavasgarzon/opportunities-back'  },
    ] },
  { key: 'p.todo',        chips: ['CLI','Clean Arch'],
    links: [{ labelKey: 'p.link.github', href: 'https://github.com/juanpavasgarzon/todo-console' }] },
];

const ARTICLES = [
  { key: 'a.1', href: 'https://newsletter.pavas.io/es/articles/676be9ca-316d-49c4-8255-b91e4d832c0d',
    enHref: 'https://newsletter.pavas.io/en/articles/676be9ca-316d-49c4-8255-b91e4d832c0d' },
];

/* ================= RENDER ================= */
function renderSkills() {
  const host = document.getElementById('skillsGrid');
  host.innerHTML = SKILLS.map(g => `
    <div class="skill-group">
      <h3><span class="num">${g.num}</span> ${t(g.groupKey)}</h3>
      <div class="skill-items">
        ${g.items.map(s => `
          <a class="skill" href="${s.href}" target="_blank" rel="noopener" title="Documentación oficial · ${s.name}">
            <img src="https://cdn.simpleicons.org/${s.slug}" alt="${s.name}" onerror="this.style.display='none'"/>
            <span class="skill-name">${s.name}</span>
            <span class="ext">↗</span>
            <span class="skill-level">${s.level}</span>
          </a>`).join('')}
      </div>
    </div>`).join('');
}

function renderTimeline() {
  const host = document.getElementById('timeline');
  host.innerHTML = EXPERIENCE.map(e => `
    <article class="tl-item reveal">
      <div class="tl-head">
        <span class="tl-role">${t(e.key + '.role')}</span>
        <span class="tl-company">${t(e.key + '.company')}</span>
      </div>
      <p class="tl-body">${t(e.key + '.body')}</p>
      <ul class="tl-bullets">
        <li>${t(e.key + '.b1')}</li>
        <li>${t(e.key + '.b2')}</li>
        <li>${t(e.key + '.b3')}</li>
      </ul>
      <div class="tl-stack">${e.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </article>`).join('');
}

function renderProjects() {
  const host = document.getElementById('projectsGrid');
  host.innerHTML = PROJECTS.map(p => {
    const primary = p.links[0].href;
    return `
    <a class="project reveal" href="${primary}" target="_blank" rel="noopener">
      <div class="project-head">
        <span class="project-kind">${t(p.key + '.kind')}</span>
        <span class="project-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </span>
      </div>
      <h3>${t(p.key + '.name')}</h3>
      <p class="project-desc">${t(p.key + '.desc')}</p>
      <div class="project-stack">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
      <div class="project-links">
        ${p.links.map(l => `
          <span class="project-link" onclick="event.stopPropagation(); event.preventDefault(); window.open('${l.href}','_blank','noopener')">
            ${t(l.labelKey)} <span>↗</span>
          </span>`).join('')}
      </div>
    </a>`;
  }).join('');
}

function renderBlog() {
  const host = document.getElementById('blogGrid');
  const cards = ARTICLES.map(a => {
    const href = LANG === 'en' ? (a.enHref || a.href) : a.href;
    return `
    <a class="article reveal" href="${href}" target="_blank" rel="noopener">
      <div class="article-meta">
        <span class="article-tag">${t(a.key + '.tag')}</span>
        <span>${t(a.key + '.date')}</span>
        <span>·</span>
        <span>${t(a.key + '.read')}</span>
      </div>
      <h3>${t(a.key + '.title')}</h3>
      <span class="article-read">${t('blog.read')}</span>
    </a>`;
  }).join('');
  // Fill to 3 cards with placeholders — diseño editorial no se rompe
  const placeholders = Math.max(0, 3 - ARTICLES.length);
  const phCards = Array.from({length: placeholders}, () => `
    <div class="article placeholder reveal">
      <div class="article-meta"><span class="article-tag">${t('blog.soon')}</span></div>
      <h3>${t('blog.soon')}</h3>
      <p style="color:var(--text-faint); font-size:.9rem;">${t('blog.soon.desc')}</p>
    </div>`).join('');
  host.innerHTML = cards + phCards;
}

/* ================= APPLY I18N ================= */
function applyI18N() {
  document.documentElement.lang = LANG;
  document.documentElement.dataset.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    el.setAttribute('href', t(el.getAttribute('data-i18n-href')));
  });
  // Lang select label
  refreshLangUI();
  // Re-render dynamic sections
  renderSkills(); renderTimeline(); renderProjects(); renderBlog();
  // Re-attach cursor + reveal to newly-rendered nodes
  attachCursorHovers(); observeReveals();
  // Reset typing effect
  restartTyping();
}

/* ================= THEME ================= */
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
});

/* ================= LANG SELECT ================= */
const LANG_META = {
  es: { flag: '🇨🇴', label: 'Español' },
  en: { flag: '🇺🇸', label: 'English' },
};
const langSelect = document.getElementById('langSelect');
langSelect.value = LANG;
langSelect.addEventListener('change', () => {
  LANG = langSelect.value === 'en' ? 'en' : 'es';
  localStorage.setItem('lang', LANG);
  applyI18N();
});
function refreshLangUI() {
  document.getElementById('langFlag').textContent  = LANG_META[LANG].flag;
  document.getElementById('langLabel').textContent = LANG_META[LANG].label;
  langSelect.value = LANG;
}

/* ================= TYPING ================= */
let typingTimer = null;
function restartTyping() {
  const typedEl = document.getElementById('typed');
  if (!typedEl) return;
  clearTimeout(typingTimer);
  typedEl.textContent = '';
  const roles = t('hero.roles');
  let tIdx = 0, cIdx = 0, deleting = false;
  (function tick() {
    const full = roles[tIdx];
    typedEl.textContent = full.slice(0, cIdx);
    let delay = deleting ? 40 : 70;
    if (!deleting && cIdx === full.length) { delay = 1400; deleting = true; }
    else if (deleting && cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % roles.length; delay = 300; }
    else { cIdx += deleting ? -1 : 1; }
    typingTimer = setTimeout(tick, delay);
  })();
}

/* ================= NAV ================= */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ================= REVEAL ================= */
let io = null;
function observeReveals() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

/* ================= CURSOR ================= */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
});
(function tickCursor() {
  rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
  ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
  requestAnimationFrame(tickCursor);
})();
function attachCursorHovers() {
  document.querySelectorAll('a, button, input, textarea').forEach(el => {
    if (el.dataset.cursorBound) return;
    el.dataset.cursorBound = '1';
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}

/* ================= CV FALLBACK ================= */
document.getElementById('cvBtn').addEventListener('click', async (e) => {
  try {
    const head = await fetch('CV-Juan-Pavas.pdf', { method: 'HEAD' });
    if (head.ok) return;
  } catch (_) {}
  e.preventDefault();
  const lines = [
    'Juan Fernando Pavas Garzon',
    'Full-Stack Developer',
    'Medellin / Rionegro, Colombia',
    '', 'Email   : ' + EMAIL_TO,
    'GitHub  : github.com/juanpavasgarzon',
    'LinkedIn: linkedin.com/in/juanpavasgarzon',
    '',
    'Experiencia:',
    '- Senior FullStack Developer, Team 360 Staffing',
    '- Lider Tecnico, Extiblu',
    '- FullStack Developer Junior > Middle > Senior, Extiblu',
    '',
    'Stack: React, React Native, TypeScript, Node.js, NestJS,',
    'Express, Laravel, PHP, .NET/C#, MySQL, MongoDB, Docker.',
    '',
    'Generado desde pavas.dev - reemplaza este fichero por tu CV real.'
  ];
  const esc = s => String(s).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
  let txt = 'BT /F1 12 Tf 14 TL 60 780 Td ';
  lines.forEach((ln,i) => { txt += (i===0?'':'T* ') + `(${esc(ln)}) Tj `; });
  txt += 'ET';
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    `<< /Length ${txt.length} >>\nstream\n${txt}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o,i) => { offsets.push(pdf.length); pdf += `${i+1} 0 obj\n${o}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length+1}\n0000000000 65535 f \n`;
  offsets.forEach(o => pdf += String(o).padStart(10,'0') + ' 00000 n \n');
  pdf += `trailer\n<< /Size ${objs.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'CV-Juan-Pavas.pdf';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
});

/* ================= FORM (mailto) ================= */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name  = form.name.value.trim();
  const email = form.email.value.trim();
  const msg   = form.msg.value.trim();
  if (!name || !email || !msg) { status.textContent = t('contact.err.empty'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { status.textContent = t('contact.err.email'); return; }
  const subject = t('contact.subject').replace('{name}', name);
  const body = `${msg}\n\n—\n${name}\n${email}`;
  const href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = t('contact.ok');
  window.location.href = href;
});

/* ================= INIT ================= */
applyI18N();
attachCursorHovers();
observeReveals();
