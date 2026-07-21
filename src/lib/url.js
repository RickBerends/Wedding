// URL helpers that respect the configured `base` (e.g. '/Wedding') so links work
// both locally and on GitHub Pages project hosting.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Path to a localized page. `slug` '' → the locale home. */
export function path(lang, slug = '') {
  return slug ? `${base}/${lang}/${slug}` : `${base}/${lang}/`;
}

/** Path to a file in /public. */
export function asset(p) {
  return `${base}/${p.replace(/^\/+/, '')}`;
}
