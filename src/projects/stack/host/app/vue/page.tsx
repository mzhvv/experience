import { MicrofrontendFrame } from '@/app/components/microfrontend-frame';

export default function VuePage() {
  return (
    <div className="page-wrap microfrontend-page">
      <header className="page-header">
        <div>
          <div className="eyebrow">MICRO APPLICATION / VUE</div>
          <h1>Vue workspace</h1>
          <p className="page-description">Самостоятельный Vue-проект, встроенный в host.</p>
        </div>
        <span className="tech-badge vue-badge">● Vue 3</span>
      </header>

      <MicrofrontendFrame
        src={process.env.NEXT_PUBLIC_VUE_APP_URL ?? 'http://localhost:5174'}
        title="Самостоятельное Vue-приложение"
      />
    </div>
  );
}
