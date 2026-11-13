import { NavigationItem } from '@w/shared/types/routes';

export const EXPERIENCE_HOME_PATHNAME = '/';

/**
 * Единый список приложений experience. Используется навигацией (сайдбар,
 * ссылки) и синхронизацией маршрутов между host (mzhvv) и iframe.
 */
export const EXPERIENCE_APPS: readonly NavigationItem[] = [
  { pathname: '/react-19', label: 'React', shortLabel: 'r19' },
  { pathname: '/vue-3', label: 'Vue', shortLabel: 'v3' },
  { pathname: '/angular-22', label: 'Angular', shortLabel: 'a22' },
];

export function isExperiencePathname(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    (value === EXPERIENCE_HOME_PATHNAME || EXPERIENCE_APPS.some((app) => app.pathname === value))
  );
}

/** Базовый путь, по которому host (mzhvv) монтирует experience во фрейме. */
export const EXPERIENCE_HOST_BASE_PATH = '/experience';

export function toHostPathname(pathname: string) {
  return pathname === EXPERIENCE_HOME_PATHNAME
    ? EXPERIENCE_HOST_BASE_PATH
    : `${EXPERIENCE_HOST_BASE_PATH}${pathname}`;
}

export function fromHostPathname(hostPathname: string) {
  if (hostPathname === EXPERIENCE_HOST_BASE_PATH) {
    return EXPERIENCE_HOME_PATHNAME;
  }
  if (hostPathname.startsWith(`${EXPERIENCE_HOST_BASE_PATH}/`)) {
    return hostPathname.slice(EXPERIENCE_HOST_BASE_PATH.length);
  }
  return EXPERIENCE_HOME_PATHNAME;
}

/** iframe -> host: маршрут внутри experience изменился. */
export type ExperienceNavigateMessage = {
  type: 'experience:navigate';
  pathname: string;
};

/** host -> iframe: родитель запрашивает переход на маршрут experience. */
export type HostNavigateMessage = {
  type: 'mzhvv:navigate';
  pathname: string;
};
