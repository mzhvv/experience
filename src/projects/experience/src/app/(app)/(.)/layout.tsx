import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';
import { EXPERIENCE, EXPERIENCE_PAGES } from '@/shared/constants/navigation';

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav hdrObj={EXPERIENCE} navArr={EXPERIENCE_PAGES}>
      {children}
    </LayoutWithNav>
  );
}
