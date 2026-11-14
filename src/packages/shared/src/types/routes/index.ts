export type NavPathname = { pathname: string };
export type NavMeta = { label: string; shortLabel: string };
export type NavEntry = NavPathname & NavMeta;

export type ProjectNav = {
  hdrObj: NavEntry;
  navArr: readonly NavEntry[];
};
