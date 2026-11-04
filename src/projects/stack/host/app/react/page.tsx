import { MicrofrontendFrame } from "@/app/components/microfrontend-frame";

export default function ReactPage() {
  return (
    <div className="page-wrap microfrontend-page">
      <header className="page-header">
        <div>
          <div className="eyebrow">MICRO APPLICATION / REACT</div>
          <h1>React workspace</h1>
          <p className="page-description">
            Самостоятельный React-проект, встроенный в host.
          </p>
        </div>
        <span className="tech-badge react-badge">● React 19</span>
      </header>
      <MicrofrontendFrame
        src={
          process.env.NEXT_PUBLIC_REACT_APP_URL ?? "http://localhost:5173"
        }
        title="Самостоятельное React-приложение"
      />
    </div>
  );
}
