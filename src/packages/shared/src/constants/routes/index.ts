import { NavEntry, NavMeta } from '@w/shared/types/routes';

// #region libs

type PrefixedChildren<P extends string, T extends readonly NavEntry[]> = {
  -readonly [K in keyof T]: T[K] extends NavEntry ? PrefixedNav<P, T[K], false> : never;
};

type PrefixedNav<P extends string, T extends NavEntry, IsRoot extends boolean = false> = Omit<
  T,
  'pathname' | 'children'
> & {
  readonly pathname: IsRoot extends true ? P : `${P}${T['pathname']}`;
  children: T extends { readonly children: infer Children extends readonly NavEntry[] }
    ? PrefixedChildren<P, Children>
    : [];
};

function createPrefixedNav<
  const P extends string,
  const T extends NavEntry,
  const IsRoot extends boolean = true,
>(navEntry: T, proxyPathname: P, isRoot: IsRoot = true as IsRoot): PrefixedNav<P, T, IsRoot> {
  const prefixedNav: NavEntry = {
    ...navEntry,
    pathname: isRoot ? proxyPathname : `${proxyPathname}${navEntry.pathname}`,
    children:
      navEntry.children?.map((child) => createPrefixedNav(child, proxyPathname, false as const)) ??
      [],
  };

  return prefixedNav as PrefixedNav<P, T, IsRoot>;
}

// #endregion

// #region react-19

const REACT19_ROOT_PATHNAME = '/';
const REACT19_PROXY_PATHNAME = '/react-19';

const react19NavMeta = {
  '/': {
    label: 'react-19',
    shortLabel: 'react-19',
  },
} as const satisfies Record<typeof REACT19_ROOT_PATHNAME, NavMeta>;

const react19Nav = {
  pathname: REACT19_ROOT_PATHNAME,
  ...react19NavMeta['/'],
} as const satisfies NavEntry;

// #endregion

// #region vue-3

const VUE3_ROOT_PATHNAME = '/';
const VUE3_PROXY_PATHNAME = '/vue-3';

const vue3NavMeta = {
  '/': {
    label: 'vue-3',
    shortLabel: 'vue-3',
  },
} as const satisfies Record<typeof VUE3_ROOT_PATHNAME, NavMeta>;

const vue3Nav = {
  pathname: VUE3_ROOT_PATHNAME,
  ...vue3NavMeta['/'],
} as const satisfies NavEntry;

// #endregion

// #region angular-22

const ANGULAR22_ROOT_PATHNAME = '/';
const ANGULAR22_PROXY_PATHNAME = '/angular-22';

const angular22NavMeta = {
  '/': {
    label: 'angular-22',
    shortLabel: 'angular-22',
  },
} as const satisfies Record<typeof ANGULAR22_ROOT_PATHNAME, NavMeta>;

const angular22Nav = {
  pathname: ANGULAR22_ROOT_PATHNAME,
  ...angular22NavMeta['/'],
} as const satisfies NavEntry;

// #endregion

// #region experience

const EXPERIENCE_ROOT_PATHNAME = '/';
const EXPERIENCE_PROXY_PATHNAME = '/experience';
const EXPERIENCE_STACK_PATHNAME = '/stack';

const experienceNavMeta = {
  '/': {
    label: 'experience',
    shortLabel: 'experience',
  },

  '/stack': {
    label: 'stack',
    shortLabel: 'stack',
  },
} as const satisfies Record<
  typeof EXPERIENCE_ROOT_PATHNAME | typeof EXPERIENCE_STACK_PATHNAME,
  NavMeta
>;

const experienceProxyNav = [
  // :3001/stack/react-19/*/**
  createPrefixedNav(react19Nav, `${EXPERIENCE_STACK_PATHNAME}${REACT19_PROXY_PATHNAME}`),
  // :3001/stack/vue-3/*/**
  createPrefixedNav(vue3Nav, `${EXPERIENCE_STACK_PATHNAME}${VUE3_PROXY_PATHNAME}`),
  // :3001/stack/angular-22/*/**
  createPrefixedNav(angular22Nav, `${EXPERIENCE_STACK_PATHNAME}${ANGULAR22_PROXY_PATHNAME}`),

  // { ...react19Nav, pathname: `/stack${REACT19_PROXY_PATHNAME}` }, // :3001/stack/vue-3
  // { ...vue3Nav, pathname: `/stack${VUE3_PROXY_PATHNAME}` }, // :3001/stack/vue-3
  // { ...angular22Nav, pathname: `/stack${ANGULAR22_PROXY_PATHNAME}` }, // :3001/stack/angular-22
] as const satisfies NavEntry[];

export const experienceNav = {
  pathname: EXPERIENCE_ROOT_PATHNAME, // :3001/
  ...experienceNavMeta['/'],
  children: [
    {
      pathname: EXPERIENCE_STACK_PATHNAME, // :3001/stack
      ...experienceNavMeta['/stack'],
      children: [...experienceProxyNav], // :3001/stack/*/**
    },
  ],
} as const satisfies NavEntry;
export const experienceNamedNav = {
  '/': experienceNav,
  '/stack': experienceNav.children[0],
  '/react-19': experienceNav.children[0].children[0],
  '/vue-3': experienceNav.children[0].children[1],
  '/angular-22': experienceNav.children[0].children[2],
} as const satisfies Record<
  | typeof EXPERIENCE_ROOT_PATHNAME
  | typeof EXPERIENCE_STACK_PATHNAME
  | typeof REACT19_PROXY_PATHNAME
  | typeof VUE3_PROXY_PATHNAME
  | typeof ANGULAR22_PROXY_PATHNAME,
  NavEntry
>;

// #endregion

// #region mzhvv

const mzhvvProxyNav = [
  createPrefixedNav(experienceNav, EXPERIENCE_PROXY_PATHNAME), // :3000/.../experience/*/**

  // {
  //   ...experienceNav,
  //   // :3000/experience
  //   pathname: EXPERIENCE_PROXY_PATHNAME,
  //   children: [
  //     {
  //       ...experienceNamedNav.stack,
  //       pathname: `${EXPERIENCE_STACK_PATHNAME}${experienceNamedNav.stack.pathname}`,
  //       children: [
  //         {
  //           ...experienceNamedNav.react19,
  //           // 3000/experience/stack/react-19
  //           pathname: `${EXPERIENCE_PROXY_PATHNAME}${experienceNamedNav.react19.pathname}`,
  //         },
  //         {
  //           ...experienceNamedNav.vue3,
  //           // 3000/experience/stack/vue-3
  //           pathname: `${EXPERIENCE_PROXY_PATHNAME}${experienceNamedNav.vue3.pathname}`,
  //         },
  //         {
  //           ...experienceNamedNav.angular22,
  //           // 3000/experience/stack/angular-22
  //           pathname: `${EXPERIENCE_PROXY_PATHNAME}${experienceNamedNav.angular22.pathname}`,
  //         },
  //       ],
  //     },
  //   ],
  // },
] as const satisfies NavEntry[];

const MZHVV_ROOT_PATHNAME = '/';

const mzhvvNavMeta = {
  '/': {
    label: 'mzhvv',
    shortLabel: 'mazhvv',
  },
} as const satisfies Record<typeof MZHVV_ROOT_PATHNAME, NavMeta>;

export const mzhvvNav = {
  pathname: MZHVV_ROOT_PATHNAME, // :3000/
  ...mzhvvNavMeta['/'],
  children: [...mzhvvProxyNav], // :3000/*/**
} as const satisfies NavEntry;

export const mzhvvNamedNav = {
  '/': mzhvvNav,
  '/experience': mzhvvNav.children[0],
  '/stack': mzhvvNav.children[0].children[0],
  '/react-19': mzhvvNav.children[0].children[0].children[0],
  '/vue-3': mzhvvNav.children[0].children[0].children[1],
  '/angular-22': mzhvvNav.children[0].children[0].children[2],
} as const satisfies Record<
  | typeof MZHVV_ROOT_PATHNAME
  | typeof EXPERIENCE_PROXY_PATHNAME
  | typeof EXPERIENCE_STACK_PATHNAME
  | typeof REACT19_PROXY_PATHNAME
  | typeof VUE3_PROXY_PATHNAME
  | typeof ANGULAR22_PROXY_PATHNAME,
  NavEntry
>;

// #endregion
