import { DefaultLayout } from '@workspace/ui-react/blocks/default-layout';
import { EXPERIENCE, EXPERIENCE_PAGES } from '@/shared/constants/navigation';

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout hObj={EXPERIENCE} navAry={EXPERIENCE_PAGES}>
      {children}
    </DefaultLayout>
  );
}
