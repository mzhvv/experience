import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';
import { experienceNav } from '@w/shared/constants/routes';

export default function IframeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav hdrObj={experienceNav.children[0]} navArr={experienceNav.children[0].children}>
      {children}
    </LayoutWithNav>
  );
}
