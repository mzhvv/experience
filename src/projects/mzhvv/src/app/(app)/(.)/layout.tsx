import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';

export default function MzhvvLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav
      hdrObj={{
        pathname: '/',
        label: 'mzhvv',
        shortLabel: 'mazhvv',
      }}
      navArr={[
        {
          pathname: '/experience',
          label: 'experience',
          shortLabel: 'experience',
        },
      ]}
    >
      {children}
    </LayoutWithNav>
  );
}
