type NavigationItem = {
  href: string;
  label: string;
  shortLabel: string;
};

//

export const EXPERIENCE: NavigationItem = {
  href: '/',
  label: 'experience',
  shortLabel: 'e',
};

export const IFRAME: NavigationItem = {
  href: '/iframe',
  label: 'iframe',
  shortLabel: 'iframe',
};

export const EXPERIENCE_PAGES: NavigationItem[] = [IFRAME];
export const IFRAME_PAGE: NavigationItem[] = [
  { href: '/iframe/react-19', label: 'react-19', shortLabel: 'R19' },
  { href: '/iframe/vue-3', label: 'vue-3', shortLabel: 'V3' },
  { href: '/iframe/angular-22', label: 'angular-22', shortLabel: 'A22' },
];
