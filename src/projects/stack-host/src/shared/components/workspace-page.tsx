import { MicrofrontendFrame } from '@/shared/components/microfrontend-frame';
import { PageHeader } from '@workspace/ui-react/components/page-header';

type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  src: string;
};

export function WorkspacePage({ eyebrow, title, description, badge, src }: WorkspacePageProps) {
  return (
    <div className="relative isolate mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="workspace-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-80" />
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={
          <span className="inline-flex rounded-full border border-white/[0.09] bg-white/[0.04] px-3.5 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-neutral-400 uppercase">
            {badge}
          </span>
        }
      />
      <MicrofrontendFrame src={src} title={title} />
    </div>
  );
}
