import { notFound } from 'next/navigation';
import { WorkspacePage } from '@/shared/components/workspace-page';

const reactProjects = {
  stub: {
    title: 'React 01',
    description:
      'Самостоятельный React-проект, встроенный в общий host через изолированный iframe.',
    src: process.env.NEXT_PUBLIC_REACT_APP_URL ?? 'http://localhost:5173',
  },
  stub2: {
    title: 'React 02',
    description: 'Второй независимый React-проект с собственными зависимостями и сборкой.',
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
    <WorkspacePage
      eyebrow="Micro application / React"
      title={project.title}
      description={project.description}
      badge="React 19"
      src={project.src}
    />
  );
}
