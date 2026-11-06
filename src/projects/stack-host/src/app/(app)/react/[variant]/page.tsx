import { notFound } from 'next/navigation';
import { MicrofrontendFrame } from '@/shared/components/microfrontend-frame';

const reactProjects = {
  stub: {
    title: 'React stub',
    description: 'Самостоятельный React-проект, встроенный в host.',
    src: process.env.NEXT_PUBLIC_REACT_APP_URL ?? 'http://localhost:5173',
  },
  stub2: {
    title: 'React stub2',
    description: 'Второй самостоятельный React-проект, встроенный в host.',
    src: process.env.NEXT_PUBLIC_REACT_STUB2_APP_URL ?? 'http://localhost:5176',
  },
};

type ReactPageProps = {
  params: Promise<{ variant: string }>;
};

export function generateStaticParams() {
  return Object.keys(reactProjects).map((variant) => ({ variant }));
}

export default async function ReactProjectPage({ params }: ReactPageProps) {
  const { variant } = await params;
  const project = reactProjects[variant as keyof typeof reactProjects];

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[1440px] flex-col gap-6 p-6 sm:p-8 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-2 text-sm font-medium text-muted-foreground">
            MICRO APPLICATION / REACT
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
        </div>
        <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          React 19
        </span>
      </header>
      <MicrofrontendFrame src={project.src} title={project.title} />
    </div>
  );
}
