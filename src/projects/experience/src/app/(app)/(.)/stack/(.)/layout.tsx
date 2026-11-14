import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';
import { experienceNav } from '@w/shared/constants/routes';

export default function IframeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav header={experienceNav.stack} segments={experienceNav.stack.children}>
      {children}
    </LayoutWithNav>
  );
}
