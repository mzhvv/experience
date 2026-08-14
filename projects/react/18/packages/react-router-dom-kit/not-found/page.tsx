// projects/react/18/packages/react-router-dom-kit/not-found/page.tsx

import { Link } from 'react-router';

export const NotFoundPage: React.FunctionComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <header>
        <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      </header>
      <main>
        <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Page not found</p>
        <div>
          <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go home
          </Link>
        </div>
      </main>
    </div>
  );
};
