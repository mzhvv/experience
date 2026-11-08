import { LayoutWithNav } from '@workspace/ui-react/next/blocks/stub/layout-with-nav';
import { IFRAME, IFRAME_PAGE } from '@/shared/constants/navigation';

export default function IframeLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav hdrObj={IFRAME} navArr={IFRAME_PAGE}>
      {children}
    </LayoutWithNav>
  );
}
