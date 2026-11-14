import { NavEntry, NavMeta } from '@w/shared/types/routes';

// #region react-19
// #endregion

// #region angular-22
// #endregion

// #region vue-3
// #endregion

// #region experience

// .env - EXPERIENCE_PROJECT_PORT = "3001";
const EXPERIENCE_PROJECT_PATHNAME = '/';
const EXPERIENCE_HOST_PATHNAME = EXPERIENCE_PROJECT_PATHNAME;
const EXPERIENCE_PROXY_PATHNAME = '/experience'; // :3000/experience

export const experienceNav = {
  pathname: EXPERIENCE_PROJECT_PATHNAME,
  label: 'experience',
  shortLabel: 'experience',
  children: [
    {
      pathname: '/stack',
      label: 'stack',
      shortLabel: 'stack',
      children: [
        { pathname: '/stack/react-19', label: 'react-19', shortLabel: 'R19' },
        { pathname: '/stack/vue-3', label: 'vue-3', shortLabel: 'V3' },
        { pathname: '/stack/angular-22', label: 'angular-22', shortLabel: 'A22' },
      ],
    },
  ],
} as const satisfies NavEntry;

// #endregion
// #region mzhvv

// .env - MZHVV_PROJECT_PORT = "3000";
const MZHVV_PROJECT_PATHNAME = '/';
const MZHVV_HOST_PATHNAME = MZHVV_PROJECT_PATHNAME;
// EXPERIENCE_PROXY_PATHNAME - отсутствует
const MZHVV_META = {
  label: 'mzhvv',
  shortLabel: 'mazhvv',
} satisfies NavMeta;

export const mzhvvNav = {
  pathname: MZHVV_HOST_PATHNAME,
  ...MZHVV_META,
  children: [
    {
      ...experienceNav, // ⚠️ rest первый - pathname перезаписывается!
      pathname: EXPERIENCE_PROXY_PATHNAME, // :3000/experience проксирует :3001
    },
  ],
} as const satisfies NavEntry;

// #endregion
