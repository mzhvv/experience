import { mzhvvNav } from '@w/shared/constants/routes';
import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';

export default function MzhvvPage() {
  return <PageWithNav header={mzhvvNav.header} segments={mzhvvNav.segments} />;
}
