import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Blocks, Layers3 } from 'lucide-react';
import { ApplicationCard } from '@workspace/ui-react/components/application-card';
import { PageHeader } from '@workspace/ui-react/components/page-header';
import { StatusBadge } from '@workspace/ui-react/components/status-badge';

const applications = [
  {
    href: '/react/stub',
    name: 'React 01',
    eyebrow: 'React · Stub',
    version: 'React 19',
    mark: Blocks,
    description: 'Независимый React-проект со своим dev-сервером, сборкой и зависимостями.',
    iconClassName: 'border-sky-400/15 bg-sky-400/[0.08] text-sky-300',
    hoverClassName: 'hover:border-sky-400/25',
  },
  {
    href: '/react/stub2',
    name: 'React 02',
    eyebrow: 'React · Stub 2',
    version: 'React 19',
    mark: Blocks,
    description: 'Второй самостоятельный React-проект в той же изолированной архитектуре.',
    iconClassName: 'border-violet-400/15 bg-violet-400/[0.08] text-violet-300',
    hoverClassName: 'hover:border-violet-400/25',
  },
  {
    href: '/vue',
    name: 'Vue',
    eyebrow: 'Vue · Workspace',
    version: 'Vue 3',
    mark: Layers3,
    description: 'Самостоятельное Vue-приложение с Vite dev-сервером и собственной сборкой.',
    iconClassName: 'border-emerald-400/15 bg-emerald-400/[0.08] text-emerald-300',
    hoverClassName: 'hover:border-emerald-400/25',
  },
  {
    href: '/angular',
    name: 'Angular',
    eyebrow: 'Angular · Workspace',
    version: 'Angular',
    mark: Layers3,
    description: 'Angular-проект с независимым dev-сервером, зависимостями и выпуском.',
    iconClassName: 'border-rose-400/15 bg-rose-400/[0.08] text-rose-300',
    hoverClassName: 'hover:border-rose-400/25',
  },
];

const architecture = [
  { name: 'Next.js', detail: 'Host', icon: Layers3 },
  { name: 'iframe', detail: 'Isolation', icon: Blocks },
  { name: 'Any stack', detail: 'Application', icon: Blocks },
];

export default function HomePage() {
  return (
    <div className="relative isolate mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1440px] flex-col gap-10 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="workspace-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]" />

      <PageHeader
        eyebrow="Polyglot workspace"
        title={
          <>
            Одна оболочка.
            <span className="block text-neutral-500">Любой стек.</span>
          </>
        }
        description="Next.js отвечает за навигацию и композицию. React, Vue и Angular живут как независимые приложения внутри единого пространства."
        action={
          <StatusBadge className="border-emerald-400/15 bg-emerald-400/[0.045] text-emerald-300/80">
            Host online
          </StatusBadge>
        }
      />

      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        aria-label="Доступные приложения"
      >
        {applications.map((application, index) => (
          <Link
            className="group block h-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090b10]"
            href={application.href}
            key={application.name}
          >
            <ApplicationCard
              icon={<application.mark className="size-5" />}
              eyebrow={application.eyebrow}
              title={application.name}
              description={application.description}
              iconClassName={application.iconClassName}
              className={`border-white/[0.08] bg-white/[0.035] text-neutral-100 shadow-none backdrop-blur-none hover:bg-white/[0.055] hover:shadow-none ${application.hoverClassName}`}
              action={
                <span className="font-mono text-xs text-neutral-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              }
              footer={
                <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <span className="font-mono text-[0.625rem] tracking-[0.1em] text-neutral-500 uppercase">
                    {application.version}
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border border-white/[0.08] text-neutral-500 transition duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-neutral-950">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              }
            />
          </Link>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-[0.625rem] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Архитектура
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-neutral-100 sm:text-2xl">
              Независимые внутри. Единые снаружи.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
              Каждое приложение развивается и собирается отдельно, а host соединяет их через
              изолированные iframe.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {architecture.map((item, index) => (
              <div key={`${item.name}-${item.detail}`} className="contents">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0d1017] p-3.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-indigo-300">
                    <item.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-medium text-neutral-200">
                      {item.name}
                    </span>
                    <span className="mt-0.5 block truncate font-mono text-[0.625rem] text-neutral-600">
                      {item.detail}
                    </span>
                  </span>
                </div>
                {index < architecture.length - 1 ? (
                  <ArrowRight className="mx-auto size-4 shrink-0 rotate-90 text-neutral-700 sm:rotate-0" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
