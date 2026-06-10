// Must match `basePath` in next.config.mjs.
// Next.js only prefixes its own routes/bundles with basePath — manually
// written URLs to files in /public must be prefixed explicitly.
export const BASE_PATH = '/ck-creative-space';

/** Prefix a /public asset URL with the GitHub Pages base path. */
export const withBasePath = (path: string) =>
  `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
