import { experienceNav } from '@w/shared/constants/routes';
import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav hdrObj={experienceNav} navArr={experienceNav.children}>
      {children}
    </LayoutWithNav>
  );
}
