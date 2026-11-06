import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Layers3 } from 'lucide-react';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import { Button } from '@workspace/ui-react/components/button';

export default function RootPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-5xl flex-col justify-center gap-12 px-6 py-12 sm:px-10 lg:px-16">
      <section className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          ЛИЧНЫЙ САЙТ
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Привет, я <span className="text-muted-foreground">mzhvv</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Здесь я собираю проекты, изучаю технологии и делюсь тем, что создаю. Stack — моя
          интерактивная коллекция инструментов и самостоятельных приложений.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link className={buttonVariants()} href="/stack">
            Открыть Stack
            <ArrowRight data-icon="inline-end" />
          </Link>
          <a
            className={buttonVariants({ variant: 'outline' })}
            href="https://github.com/mzhvv"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight data-icon="inline-end" />
          </a>
          <Button />
        </div>
      </section>

      <Link
        className="group flex max-w-3xl items-center gap-4 rounded-xl border bg-card p-5 transition-colors hover:bg-accent/50 sm:p-6"
        href="/stack"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted text-foreground">
          <Layers3 className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-medium text-muted-foreground">КОЛЛЕКЦИЯ</span>
          <span className="mt-1 block font-medium">Stack</span>
          <span className="mt-1 block text-sm text-muted-foreground">
            React, Vue, Angular и другие технологии в отдельных приложениях.
          </span>
        </span>
        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </Link>
    </main>
  );
}
