import { experienceNav } from '@w/shared/constants/routes';
import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';

export default function ExperiencePage() {
  return <PageWithNav hdrObj={experienceNav} navArr={experienceNav.children} />;
}
