import Link from 'next/link';

const applications = [
  {
    href: '/stack/react',
    name: 'React',
    mark: 'R',
    description:
      'Самостоятельный React-проект со своим Vite dev-сервером, сборкой и зависимостями.',
    className: 'react',
  },
  {
    href: '/stack/vue',
    name: 'Vue',
    mark: 'V',
    description: 'Самостоятельный Vue-проект со своим Vite dev-сервером, сборкой и зависимостями.',
    className: 'vue',
  },
  {
    href: '/stack/angular',
    name: 'Angular',
    mark: 'A',
    description: 'Самостоятельный Angular-проект со своим dev-сервером, сборкой и зависимостями.',
    className: 'angular',
  },
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <header className="page-header">
        <div>
          <div className="eyebrow">HOST / DASHBOARD</div>
          <h1>Ваши приложения</h1>
          <p className="page-description">
            Next.js отвечает за оболочку и навигацию. React, Vue и Angular — отдельные приложения в
            этом monorepo.
          </p>
        </div>
        <span className="host-badge">
          <span className="status-dot" />
          HOST ONLINE
        </span>
      </header>

      <section className="app-grid" aria-label="Доступные приложения">
        {applications.map((application) => (
          <Link
            className={`app-card ${application.className}`}
            href={application.href}
            key={application.name}
          >
            <div className={`app-mark ${application.className}`}>{application.mark}</div>
            <div className="app-card-copy">
              <span className="app-type">MICRO APPLICATION</span>
              <h2>{application.name}</h2>
              <p>{application.description}</p>
            </div>
            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </section>

      <section className="architecture-panel">
        <div className="architecture-icon">⌘</div>
        <div>
          <h2>Одна оболочка — разные технологии</h2>
          <p>
            Host встраивает самостоятельные приложения в изолированные iframe. У каждого свой сервер
            разработки, зависимости, сборка и выпуск.
          </p>
        </div>
      </section>
    </div>
  );
}
