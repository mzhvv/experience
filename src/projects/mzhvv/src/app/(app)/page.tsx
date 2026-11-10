import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';

export default function MzhvvPage() {
  return (
    <PageWithNav
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
    />
  );
}
