import { MicrofrontendFrame, resolveMicrofrontendUrl } from '@/app/components/microfrontend-frame';

export default function AngularPage() {
  return (
    <div className="page-wrap microfrontend-page">
      <header className="page-header">
        <div>
          <div className="eyebrow">MICRO APPLICATION / ANGULAR</div>
          <h1>Angular workspace</h1>
          <p className="page-description">Самостоятельный Angular-проект, встроенный в host.</p>
        </div>
        <span className="tech-badge angular-badge">● Angular</span>
      </header>

      <MicrofrontendFrame
        src={resolveMicrofrontendUrl(
          process.env.NEXT_PUBLIC_ANGULAR_APP_URL,
          'NEXT_PUBLIC_ANGULAR_APP_URL',
          'http://localhost:5175'
        )}
        title="Самостоятельное Angular-приложение"
      />
    </div>
  );
}
