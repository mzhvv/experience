export type NavPathname = { pathname: string };
export type NavMeta = { label: string; shortLabel: string };
export type NavEntry = NavPathname &
  NavMeta & {
    children?: readonly NavEntry[];
  };

export type ProjectNav = {
  // required
  header: NavEntry;
  segments: readonly NavEntry[];
} & {
  // extend! внутренние роуты! !TODO
  [key: string]: NavEntry | readonly NavEntry[] | undefined;
};
