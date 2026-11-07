export const EXPERIENCE_HOME_PATHNAME = '/';

export type ExperienceApp = {
  pathname: string;
  label: string;
  shortLabel: string;
};

/**
 * Единый список приложений experience. Используется навигацией (сайдбар,
 * ссылки) и синхронизацией маршрутов между host (mzhvv) и iframe.
 */
export const EXPERIENCE_APPS: readonly ExperienceApp[] = [
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
