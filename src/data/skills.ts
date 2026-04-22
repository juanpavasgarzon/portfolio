import type { Lang } from '@/i18n';

export interface Skill {
  name:    string;
  slug:    string;
  level:   'senior' | 'mid';
  docsUrl: string;
}

export interface SkillGroup {
  num:   string;
  label: Record<Lang, string>;
  items: Skill[];
}

export const SKILLS: SkillGroup[] = [
  {
    num:   '01',
    label: { es: 'Frontend', en: 'Frontend' },
    items: [
      { name: 'React',        slug: 'react',      level: 'senior', docsUrl: 'https://react.dev/' },
      { name: 'React Native', slug: 'react',      level: 'senior', docsUrl: 'https://reactnative.dev/' },
      { name: 'TypeScript',   slug: 'typescript', level: 'senior', docsUrl: 'https://www.typescriptlang.org/docs/' },
      { name: 'JavaScript',   slug: 'javascript', level: 'senior', docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Expo',         slug: 'expo',       level: 'mid',    docsUrl: 'https://docs.expo.dev/' },
    ],
  },
  {
    num:   '02',
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'Node.js',   slug: 'nodedotjs', level: 'senior', docsUrl: 'https://nodejs.org/docs/latest/api/' },
      { name: 'Express',   slug: 'express',   level: 'senior', docsUrl: 'https://expressjs.com/' },
      { name: 'NestJS',    slug: 'nestjs',    level: 'senior', docsUrl: 'https://docs.nestjs.com/' },
      { name: 'Laravel',   slug: 'laravel',   level: 'senior', docsUrl: 'https://laravel.com/docs' },
      { name: 'PHP',       slug: 'php',       level: 'senior', docsUrl: 'https://www.php.net/docs.php' },
      { name: '.NET / C#', slug: 'dotnet',    level: 'mid',    docsUrl: 'https://learn.microsoft.com/en-us/dotnet/' },
    ],
  },
  {
    num:   '03',
    label: { es: 'Data & DB', en: 'Data & DB' },
    items: [
      { name: 'MySQL',      slug: 'mysql',      level: 'senior', docsUrl: 'https://dev.mysql.com/doc/' },
      { name: 'MongoDB',    slug: 'mongodb',    level: 'mid',    docsUrl: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', slug: 'postgresql', level: 'mid',    docsUrl: 'https://www.postgresql.org/docs/' },
      { name: 'Python',     slug: 'python',     level: 'mid',    docsUrl: 'https://docs.python.org/3/' },
    ],
  },
  {
    num:   '04',
    label: { es: 'Tools & DevOps', en: 'Tools & DevOps' },
    items: [
      { name: 'Docker',  slug: 'docker',  level: 'senior', docsUrl: 'https://docs.docker.com/' },
      { name: 'Git',     slug: 'git',     level: 'senior', docsUrl: 'https://git-scm.com/doc' },
      { name: 'GitHub',  slug: 'github',  level: 'senior', docsUrl: 'https://docs.github.com/' },
      { name: 'Linux',   slug: 'linux',   level: 'mid',    docsUrl: 'https://www.kernel.org/doc/html/latest/' },
      { name: 'Postman', slug: 'postman', level: 'senior', docsUrl: 'https://learning.postman.com/docs/introduction/overview/' },
    ],
  },
];
