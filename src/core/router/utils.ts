import { R } from '@core/utils/r';

export function getRoutePath(absolutePath?: string | string[], relativePath?: string | string[], parentPath?: string) {
  const absolutePaths = R.concat(absolutePath || []);
  const relativePaths = R.concat(relativePath || []);

  const paths = [...absolutePaths, ...relativePaths.map(path => toAbsolutePath(path, parentPath))];

  return paths.length > 1 ? paths : paths[0];
}

export function getRedirectPath(absolutePath?: string, relativePath?: string, parentPath?: string) {
  if (absolutePath) return absolutePath;
  if (relativePath) return toAbsolutePath(relativePath, parentPath);

  return '/';
}

export function getLinkPath(path: string, parentPath?: string) {
  if (path.startsWith('/')) return path;

  return toAbsolutePath(path, parentPath);
}

function toAbsolutePath(path: string, parentPath?: string) {
  if (path && !path.startsWith('/')) path = `/${path}`;

  if (!parentPath || parentPath === '/') return path || '/';

  return `${parentPath}${path}`;
}
