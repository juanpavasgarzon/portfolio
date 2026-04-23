export const es = {
  'nav.title':      'Portafolio',
  'nav.skills':     'Skills',
  'nav.experience': 'Experiencia',
  'nav.work':       'Proyectos',
  'nav.blog':       'Blog',
  'nav.contact':    'Contacto',

  'hero.available':    'Disponible para nuevos proyectos',
  'hero.bio':          'Full-Stack Developer enfocado en entregar software de alta calidad, escalable y mantenible. Construyo soluciones web y móviles end-to-end, con código limpio y arquitectura sólida.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.cv':       'Descargar CV',
  'hero.loc':          'MEDELLÍN · RIONEGRO, CO',

  'skills.label': '01 — Stack técnico',
  'skills.title': 'Herramientas con las que construyo.',

  'exp.label': '02 — Trayectoria',
  'exp.title': 'Experiencia profesional.',

  'work.label': '03 — Selected work',
  'work.title': 'Proyectos que he construido.',

  'blog.label':         '04 — Escribiendo',
  'blog.title':         'Notas sobre código y producto.',
  'blog.cta.text':      'Publico artículos técnicos en mi newsletter — arquitectura, buenas prácticas y aprendizajes reales de producción.',
  'blog.cta.link':      'Ver todos los artículos →',
  'blog.cta.link.href': 'https://newsletter.pavas.io/es/articles',
  'blog.soon':          'Próximamente',
  'blog.soon.desc':     'Nuevo artículo en preparación. Suscríbete al newsletter para enterarte.',
  'blog.read':          'Leer artículo →',

  'contact.label':         '05 — Contacto',
  'contact.title':         '¿Tienes un proyecto en mente? <em>Hablemos.</em>',
  'contact.lead':          'Respondo a todos los mensajes en menos de 24 horas. Abierto a roles full-time, contratos y colaboraciones freelance.',
  'contact.form.name':     'Nombre',
  'contact.form.name.ph':  'Tu nombre',
  'contact.form.email':    'Email',
  'contact.form.email.ph': 'tu@email.com',
  'contact.form.msg':      'Mensaje',
  'contact.form.msg.ph':   'Cuéntame sobre el proyecto, timelines, etc.',
  'contact.form.send':     'Enviar mensaje',
  'contact.err.empty':     '✗ Completa todos los campos.',
  'contact.err.email':     '✗ Email no válido.',
  'contact.ok':            '✓ Abriendo tu cliente de email...',
  'contact.subject':       'Contacto desde portfolio.pavas.io · {name}',

  'footer.tag': 'Diseñado & codeado a mano · Medellín / Rionegro 🇨🇴',
} as const;

export type Locale = Record<keyof typeof es, string>;
