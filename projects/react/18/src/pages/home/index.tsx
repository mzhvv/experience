// projects/react/18/src/pages/home/index.tsx

import { getGithubData, GithubMark } from '@packages/github-data';

export const HomePage = () => {
  return (
    <>
      <aside className="p-1">
        <div className="p-1">
          <GithubData />
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

const GithubData = () => {
  const GITHUB_URL = 'https://github.com/mzhvv/experience/tree/master/projects/react/18';
  const githubData = getGithubData(GITHUB_URL);
  console.log(githubData);

  return (
    <div className="p-1 h-10 flex justify-between items-center bg-secondary text-secondary-foreground rounded-md">
      <div className=" flex items-center ms-2 text-sm gap-2">
        <GithubMark size={16} />
        <div>...</div>
      </div>
    </div>
  );
};

// const githubApiLinks = {
//   owner: `${GITHUB_API_LINK}/${data.owner}`,
//   repo: `${GITHUB_API_LINK}/${data.owner}/${data.repo}`,

//   tree: {
//     projects: `${GITHUB_API_LINK}/${data.owner}/${data.repo}/contents/${data.tree.projects}`,
//   },

//   a: 'https://api.github.com/repos/mzhvv/experience/contents/projects',
//   b: 'https://api.github.com/repos/mzhvv/experience/contents/projects/react',
//   c: 'https://api.github.com/repos/mzhvv/experience/contents/projects/react/18',
// };
