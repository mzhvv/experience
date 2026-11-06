import Link from 'next/link';
import { ArrowUpRight, Blocks, Layers3 } from 'lucide-react';

const applications = [
  {
    href: '/react/stub',
    name: 'React / stub',
    mark: Blocks,
    description: 'Первый самостоятельный React-проект со своим dev-сервером и зависимостями.',
  },
  {
    href: '/react/stub2',
    name: 'React / stub2',
    mark: Blocks,
    description: 'Второй независимый React-проект со своим dev-сервером, сборкой и зависимостями.',
  },
  {
    href: '/vue',
    name: 'Vue',
    mark: Layers3,
    description: 'Самостоятельный Vue-проект со своим Vite dev-сервером, сборкой и зависимостями.',
  },
  {
    href: '/angular',
    name: 'Angular',
    mark: Layers3,
    description: 'Самостоятельный Angular-проект со своим dev-сервером, сборкой и зависимостями.',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col gap-8 p-6 sm:p-8 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-2 text-sm font-medium text-muted-foreground">STACK / ОБЗОР</div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ваши приложения
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Next.js отвечает за оболочку и навигацию. React, Vue и Angular — отдельные приложения в
            этом monorepo.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          HOST ONLINE
        </span>
      </header>

      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Доступные приложения"
      >
        {applications.map((application) => (
          <Link
            className="group relative flex min-h-52 flex-col rounded-xl border border-border bg-card p-5 text-card-foreground transition-colors hover:bg-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href={application.href}
            key={application.name}
          >
            <div className="flex items-start justify-between">
              <div className="grid size-10 place-items-center rounded-lg bg-muted text-base font-medium text-foreground">
                <application.mark className="size-5" />
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
            <div className="mt-auto pt-8">
              <span className="text-xs font-medium text-muted-foreground">MICRO APPLICATION</span>
              <h2 className="mt-2 text-base font-semibold">{application.name}</h2>
              <p className="mt-2 text-sm leading-5 text-muted-foreground">
                {application.description}
              </p>
            </div>
          </Link>
        ))}
      </section>

      <section className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted text-lg text-muted-foreground">
          <Layers3 className="size-5" />
        </div>
        <div>
          <h2 className="font-semibold text-card-foreground">Одна оболочка — разные технологии</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Host встраивает самостоятельные приложения в изолированные iframe. У каждого свой сервер
            разработки, зависимости, сборка и выпуск.
          </p>
        </div>
      </section>
    </div>
  );
}
