import { WorkspacePage } from '@/shared/components/workspace-page';

export default function AngularPage() {
  return (
    <WorkspacePage
      eyebrow="Micro application / Angular"
      title="Angular workspace"
      description="Самостоятельный Angular-проект с собственными зависимостями и сборкой."
      badge="Angular"
      src={process.env.NEXT_PUBLIC_ANGULAR_APP_URL ?? 'http://localhost:5175'}
    />
  );
}
