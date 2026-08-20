// projects/react/18/src/pages/home/index.tsx

import { Link } from 'react-router';
import { FolderCode } from 'lucide-react';

import {
  getGithubData,
  // useGithubRepo
  useGithubContents,
  GithubMark,
} from '@packages/github-data';

import { Button } from '@packages/ui/components/ui/button';

export const HomePage = () => {
  return (
    <>
      <aside className="p-1">
        <div className="p-1">
          <GithubData />
        </div>
        <div className="p-1">
          <GithubData2 />
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
  console.log({
    owner: githubData.owner,
    repo: githubData.repo,
    tree: {
      projects: githubData.tree.projects,
      projectsReact: githubData.tree.projectReact,
      projectsReact18: githubData.tree.projectReact18,
    },
  });

  return (
    <div className="p-1 h-10 flex justify-between items-center bg-secondary text-secondary-foreground rounded-md">
      <div className=" flex items-center ms-2 text-sm gap-2">
        <GithubMark size={16} />
        <div>
          <div>projects: {githubData.tree.projects}</div>
          <div>projectsreact: {githubData.tree.projectsreact}</div>
          <div>projectsReact: {githubData.tree.projectsReact}</div>
        </div>
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

const GithubData2 = () => {
  const projects = 'projects/react/18';

  // const { data, loading, error } = useGithubRepo('mzhvv/experience');
  const { data, loading, error } = useGithubContents(projects);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  console.log(data);

  return (
    <div className="p-1 h-10 flex justify-between items-center bg-secondary text-secondary-foreground rounded-md">
      <div className=" flex items-center ms-2 text-sm gap-2">
        <GithubMark size={16} />
        {/* <span>github.com/mzhvv/experience/.../{data.name || projects}</span> */}
      </div>
      {/* <div className="flex items-center gap-2">
        <Button asChild size="icon-sm" variant="secondary">
          <Link to={data.html_url} target="_blank" rel="noopener noreferrer">
            <FolderCode />
          </Link>
        </Button>
      </div> */}
    </div>
  );
};
