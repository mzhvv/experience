import { DefaultLayout } from '@workspace/ui-react/blocks/default-layout';
import { IFRAME, IFRAME_PAGE } from '@/shared/constants/navigation';

export default function IframeLayout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout hObj={IFRAME} navAry={IFRAME_PAGE}>
      {children}
    </DefaultLayout>
  );
}
