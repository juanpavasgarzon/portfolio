---
name: add-content
description: Add a new entry to the portfolio (project, experience, skill, or blog article). Reminds Claude of the exact data schemas and i18n requirements.
---

All content lives in arrays in script.js. Only modify script.js — render functions pick up changes automatically, no HTML edits needed.

## Array schemas

**PROJECTS**
```js
{ title: "string", tag: "string", desc: "i18n.key", link: "url", github: "url" }
```

**EXPERIENCE**
```js
{ role: "i18n.key", company: "string", period: "string", desc: "i18n.key", stack: ["string"] }
```

**SKILLS**
```js
{ icon: "emoji", label: "i18n.key" }
```

**ARTICLES**
```js
{ title: "i18n.key", date: "YYYY-MM-DD", tag: "string", link: "url" }
```

## i18n rule

Fields marked `i18n.key` must have matching entries in **both** `translations.es` and `translations.en` (lines 4–227 of script.js). Use dot notation: `projects.myproject.desc`.

## Steps

1. Add the entry to the correct array in script.js
2. Add both ES and EN translations for every i18n key used
3. Verify no translation key is missing (grep for the key in both language objects)
