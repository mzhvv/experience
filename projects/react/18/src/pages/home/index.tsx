// projects/react/18/src/pages/home/index.tsx

import { GithubWidget } from './github';

export const HomePage = () => {
  return (
    <>
      <aside className="p-1">
        <div className="p-1">
          <GithubWidget />
        </div>
      </aside>
      <header className="p-1">
        <div className="p-1">
          <h1>R18</h1>
        </div>
      </header>
      <main className=" p-1">
        <div className="p-1">
          <div>content</div>
        </div>
      </main>
    </>
  );
};
