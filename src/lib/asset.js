const _base = import.meta.env.BASE_URL || '/';
const b = _base.endsWith('/') ? _base : _base + '/';

// Resolve an image path for the current base URL.
// Absolute URLs (CDN, data:) pass through untouched — prefixing them with the
// base produced paths like /guillermolaporta/https://cdn.../photo.jpg.
export function asset(src) {
  if (!src) return '';
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(src)) return src;
  return `${b}${src.replace(/^\//, '')}`;
}
