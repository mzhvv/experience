import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';
import { IFRAME, IFRAME_PAGE } from '@/shared/constants/navigation';

export default function IframePage() {
  return <PageWithNav hdrObj={IFRAME} navArr={IFRAME_PAGE} />;
}
