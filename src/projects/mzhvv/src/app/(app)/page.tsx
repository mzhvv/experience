import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';

export default function MzhvvPage() {
  return (
    <PageWithNav
      hdrObj={{
        href: '/',
        label: 'mzhvv',
        shortLabel: 'mazhvv',
      }}
      navArr={[
        {
          href: '/experience',
          label: 'experience',
          shortLabel: 'experience',
        },
      ]}
    />
  );
}
