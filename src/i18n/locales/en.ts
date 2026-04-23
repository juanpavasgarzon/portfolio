import type { Locale } from './es';

export const en = {
  'nav.title':      'Portfolio',
  'nav.skills':     'Skills',
  'nav.experience': 'Experience',
  'nav.work':       'Projects',
  'nav.blog':       'Blog',
  'nav.contact':    'Contact',

  'hero.available':    'Available for new projects',
  'hero.bio':          'Full-Stack Developer focused on shipping high-quality, scalable and maintainable software. I build end-to-end web and mobile solutions with clean code and solid architecture.',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv':       'Download CV',
  'hero.loc':          'MEDELLÍN · RIONEGRO, CO',

  'skills.label': '01 — Tech stack',
  'skills.title': 'The tools I build with.',

  'exp.label': '02 — Career',
  'exp.title': 'Professional experience.',

  'work.label': '03 — Selected work',
  'work.title': 'Projects I have built.',

  'blog.label':         '04 — Writing',
  'blog.title':         'Notes on code & product.',
  'blog.cta.text':      'I publish technical articles on my newsletter — architecture, best practices and real production learnings.',
  'blog.cta.link':      'Read all articles →',
  'blog.cta.link.href': 'https://newsletter.pavas.io/en/articles',
  'blog.soon':          'Coming soon',
  'blog.soon.desc':     'New article in the works. Subscribe to the newsletter to stay in the loop.',
  'blog.read':          'Read article →',

  'contact.label':         '05 — Contact',
  'contact.title':         'Got a project in mind? <em>Let’s talk.</em>',
  'contact.lead':          'I reply to every message within 24 hours. Open to full-time, contract and freelance work.',
  'contact.form.name':     'Name',
  'contact.form.name.ph':  'Your name',
  'contact.form.email':    'Email',
  'contact.form.email.ph': 'you@email.com',
  'contact.form.msg':      'Message',
  'contact.form.msg.ph':   'Tell me about the project, timelines, etc.',
  'contact.form.send':     'Send message',
  'contact.err.empty':     '✗ Please fill in all fields.',
  'contact.err.email':     '✗ Invalid email.',
  'contact.ok':            '✓ Opening your email client...',
  'contact.subject':       'Contact from portfolio.pavas.io · {name}',

  'footer.tag': 'Hand-designed & hand-coded · Medellín / Rionegro 🇨🇴',
} as const satisfies Locale;
