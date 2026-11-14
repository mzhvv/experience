import { mzhvvNav } from '@w/shared/constants/routes';
import { LayoutWithNav } from '@w/ui-react/next/blocks/stub/layout-with-nav';

export default function MzhvvLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWithNav hdrObj={mzhvvNav.hdrObj} navArr={mzhvvNav.navArr}>
      {children}
    </LayoutWithNav>
  );
}
