import { MicrofrontendFrame } from '@/shared/components/microfrontend-frame';

export default function VuePage() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col gap-6 p-6 sm:p-8 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-2 text-sm font-medium text-muted-foreground">
            MICRO APPLICATION / VUE
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Vue workspace
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Самостоятельный Vue-проект, встроенный в host.
          </p>
        </div>
        <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          Vue 3
        </span>
      </header>

      <MicrofrontendFrame
        src={process.env.NEXT_PUBLIC_VUE_APP_URL ?? 'http://localhost:5174'}
        title="Самостоятельное Vue-приложение"
      />
    </div>
  );
}
