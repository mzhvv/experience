import { NavMeta, ProjectNav } from '@w/shared/types/routes';

// #region react-19
// #endregion

// #region angular-22
// #endregion

// #region vue-3
// #endregion

// #region experience

// EXPERIENCE_PROJECT_PORT = '3001';
const EXPERIENCE_PROJECT_PATHNAME = '/';
const EXPERIENCE_HOST_PATHNAME = EXPERIENCE_PROJECT_PATHNAME;
const EXPERIENCE_PROXY_PATHNAME = '/experience'; // :3000/experience
const EXPERIENCE_META = {
  label: 'experience',
  shortLabel: 'experience',
} satisfies NavMeta;

const EXPERIENCE_SEGMENT_STACK_NAV = {
  pathname: '/stack',
  label: 'stack',
  shortLabel: 'stack',
  children: [
    { pathname: '/stack/react-19', label: 'react-19', shortLabel: 'R19' },
    { pathname: '/stack/vue-3', label: 'vue-3', shortLabel: 'V3' },
    { pathname: '/stack/angular-22', label: 'angular-22', shortLabel: 'A22' },
  ],
} as const;

export const experienceNav = {
  header: {
    pathname: EXPERIENCE_PROJECT_PATHNAME,
    ...EXPERIENCE_META,
  },
  stack: EXPERIENCE_SEGMENT_STACK_NAV,
  segments: [EXPERIENCE_SEGMENT_STACK_NAV], // используеться в sidebar
} as const satisfies ProjectNav;

// #endregion
// #region mzhvv

// MZHVV_PROJECT_PORT = '3000';
const MZHVV_PROJECT_PATHNAME = '/';
const MZHVV_HOST_PATHNAME = MZHVV_PROJECT_PATHNAME; // :3000 является HOST для :3001
// EXPERIENCE_PROXY_PATHNAME - отсутствует
const MZHVV_META = {
  label: 'mzhvv',
  shortLabel: 'mazhvv',
} satisfies NavMeta;

export const mzhvvNav = {
  header: {
    pathname: MZHVV_HOST_PATHNAME,
    ...MZHVV_META,
  },
  segments: [
    {
      ...EXPERIENCE_META,
      pathname: EXPERIENCE_PROXY_PATHNAME, // :3000/experience проксирует :3001
    },
  ],
} as const satisfies ProjectNav;

// #endregion
