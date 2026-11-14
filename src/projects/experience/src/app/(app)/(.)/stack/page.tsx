import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';
import { experienceNav } from '@w/shared/constants/routes';

export default function IframePage() {
  return <PageWithNav header={experienceNav.stack} segments={experienceNav.stack.children} />;
}
