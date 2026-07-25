// src/pages/not-found/index.tsx

import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <header>404</header>
      <main>
        <div>
          <Link to={'/'}>home-page</Link>
        </div>
      </main>
    </div>
  );
};
