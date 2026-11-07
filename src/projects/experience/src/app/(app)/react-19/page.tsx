import { WorkspacePage } from '@/shared/components/workspace-page';

export default function VuePage() {
  return (
    <WorkspacePage
      eyebrow="Micro application / Vue"
      title="Vue workspace"
      description="Самостоятельный Vue-проект с Vite dev-сервером и собственной сборкой."
      badge="RRRRR"
      src={process.env.NEXT_PUBLIC_REACT_APP_URL ?? 'http://localhost:5173'}
    />
  );
}
