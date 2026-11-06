import Link from 'next/link';
import { ArrowUpRight, Blocks, Layers3, Sparkles } from 'lucide-react';
import { ApplicationCard } from '@workspace/ui-react/components/application-card';
import { PageHeader } from '@workspace/ui-react/components/page-header';
import { StatusBadge } from '@workspace/ui-react/components/status-badge';

const technologies = [
  {
    name: 'React',
    detail: 'UI library',
    icon: Blocks,
    className: 'bg-sky-400/[0.07] text-sky-300',
  },
  {
    name: 'Vue',
    detail: 'Framework',
    icon: Layers3,
    className: 'bg-emerald-400/[0.07] text-emerald-300',
  },
  {
    name: 'Angular',
    detail: 'Platform',
    icon: Layers3,
    className: 'bg-rose-400/[0.07] text-rose-300',
  },
];

const cardClassName =
  'border-white/[0.08] bg-white/[0.035] text-neutral-100 shadow-none backdrop-blur-none hover:bg-white/[0.055] hover:shadow-none';

export default function RootPage() {
  return (
    <main className="relative isolate mx-auto flex min-h-svh w-full max-w-[1440px] flex-col gap-10 px-6 py-20 sm:px-8 md:py-10 lg:px-10 lg:py-12">
      <div className="workspace-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]" />

      <PageHeader
        eyebrow="Personal workspace"
        title={
          <>
            Привет, я mzhvv.
            <span className="block text-neutral-500">Создаю и исследую.</span>
          </>
        }
        description="Собираю проекты, изучаю технологии и превращаю идеи в работающие интерфейсы. Здесь — мои инструменты, прототипы и самостоятельные приложения."
        action={
          <StatusBadge className="border-indigo-400/15 bg-indigo-400/[0.045] text-indigo-300/80">
            Site online
          </StatusBadge>
        }
      />

      <section className="grid gap-4 lg:grid-cols-2" aria-label="Основные разделы">
        <Link
          href="/stack"
          className="group block rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#090b10]"
        >
          <ApplicationCard
            icon={<Layers3 className="size-5" />}
            eyebrow="Featured collection"
            title="Stack"
            description="Интерактивная коллекция самостоятельных приложений на React, Vue и Angular в единой Next.js-оболочке."
            iconClassName="border-indigo-400/15 bg-indigo-400/[0.08] text-indigo-300"
            className={`${cardClassName} hover:border-indigo-400/25`}
            action={<span className="font-mono text-xs text-neutral-600">01</span>}
            footer={
              <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="font-mono text-[0.625rem] tracking-[0.1em] text-neutral-500 uppercase">
                  4 приложения
                </span>
                <span className="grid size-8 place-items-center rounded-full border border-white/[0.08] text-neutral-500 transition duration-300 group-hover:border-white/20 group-hover:bg-white group-hover:text-neutral-950">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            }
          />
        </Link>

        <ApplicationCard
          icon={<Sparkles className="size-5" />}
          eyebrow="Мой подход"
          title="От идеи к прототипу"
          description="Изучаю разные инструменты, проверяю архитектурные решения и собираю результаты в небольшие законченные проекты."
          iconClassName="border-violet-400/15 bg-violet-400/[0.08] text-violet-300"
          className={`${cardClassName} hover:border-violet-400/25`}
          action={
            <a
              href="https://github.com/mzhvv"
              target="_blank"
              rel="noreferrer"
              aria-label="Открыть GitHub mzhvv"
              className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-neutral-500 transition hover:border-white/20 hover:bg-white hover:text-neutral-950"
            >
              <ArrowUpRight className="size-4" />
            </a>
          }
          footer={
            <div className="border-t border-white/[0.07] pt-4 font-mono text-[0.625rem] tracking-[0.1em] text-neutral-500 uppercase">
              Projects · Code · Experiments
            </div>
          }
        />
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-[0.625rem] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
              Что внутри Stack
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-neutral-100 sm:text-2xl">
              Разные технологии. Одна коллекция.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
              Каждый проект остаётся независимым, но открывается в общем интерфейсе — удобно
              сравнивать подходы и пробовать новое.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0d1017] p-3.5"
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl ${technology.className}`}
                >
                  <technology.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-neutral-200">
                    {technology.name}
                  </span>
                  <span className="mt-0.5 block truncate font-mono text-[0.625rem] text-neutral-600">
                    {technology.detail}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
