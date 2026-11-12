//

import { NavigationItem } from '@w/shared/types/routes';

export const EXPERIENCE: NavigationItem = {
  pathname: '/',
  label: 'experience',
  shortLabel: 'e',
};

export const IFRAME: NavigationItem = {
  pathname: '/stack',
  label: 'stack',
  shortLabel: 'stack',
};

export const EXPERIENCE_PAGES: NavigationItem[] = [IFRAME];
export const IFRAME_PAGE: NavigationItem[] = [
  { pathname: '/stack/react-19', label: 'react-19', shortLabel: 'R19' },
  { pathname: '/stack/vue-3', label: 'vue-3', shortLabel: 'V3' },
  { pathname: '/stack/angular-22', label: 'angular-22', shortLabel: 'A22' },
];
