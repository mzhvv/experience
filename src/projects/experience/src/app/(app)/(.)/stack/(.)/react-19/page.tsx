import { WorkspacePage } from '@/shared/components/workspace-page';

export default function VuePage() {
  return (
    <WorkspacePage
      eyebrow="Micro application / React"
      title="React workspace"
      description="Самостоятельный React-проект с Vite dev-сервером и собственной сборкой."
      badge="React 19"
      src={process.env.NEXT_PUBLIC_REACT_APP_URL ?? 'http://localhost:5173'}
    />
  );
}
