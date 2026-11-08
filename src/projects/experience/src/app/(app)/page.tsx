import { PageWithNav } from '@w/ui-react/next/blocks/stub/page-with-navigation';
import { EXPERIENCE, EXPERIENCE_PAGES } from '@/shared/constants/navigation';

export default function ExperiencePage() {
  return <PageWithNav hdrObj={EXPERIENCE} navArr={EXPERIENCE_PAGES} />;
}
