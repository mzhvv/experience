import { notFound } from 'next/navigation';
import { MicrofrontendFrame } from '@/app/components/microfrontend-frame';

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
    <div className="page-wrap microfrontend-page">
      <header className="page-header">
        <div>
          <div className="eyebrow">MICRO APPLICATION / REACT</div>
          <h1>{project.title}</h1>
          <p className="page-description">{project.description}</p>
        </div>
        <span className="tech-badge react-badge">● React 19</span>
      </header>
      <MicrofrontendFrame src={project.src} title={project.title} />
    </div>
  );
}
