import Link from 'next/link';

export default function RootPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground">
          MZHVV / PROJECTS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Пространство проектов</h1>
        <p className="mt-3 text-muted-foreground">
          Переходите к приложениям и экспериментам в монорепозитории.
        </p>
        <Link
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-4 py-3 text-primary-foreground"
          href="/stack"
        >
          Открыть Stack <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
