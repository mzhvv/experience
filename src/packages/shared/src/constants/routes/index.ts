import { NavMeta, ProjectNav } from '@w/shared/types/routes';

// #region experience

// EXPERIENCE_PROJECT_PORT = '3001';
const EXPERIENCE_PROJECT_PATHNAME = '/';
const EXPERIENCE_HOST_PATHNAME = EXPERIENCE_PROJECT_PATHNAME;
const EXPERIENCE_PROXY_PATHNAME = '/experience'; // :3000/experience
const EXPERIENCE_META = {
  label: 'experience',
  shortLabel: 'experience',
} satisfies NavMeta;

export const experienceNav = {
  hdrObj: {
    pathname: EXPERIENCE_PROJECT_PATHNAME,
    ...EXPERIENCE_META,
  },
  navArr: [],
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
  hdrObj: {
    pathname: MZHVV_HOST_PATHNAME,
    ...MZHVV_META,
  },
  navArr: [
    {
      ...EXPERIENCE_META,
      pathname: EXPERIENCE_PROXY_PATHNAME, // :3000/experience проксирует :3001
    },
  ],
} as const satisfies ProjectNav;

// #endregion
