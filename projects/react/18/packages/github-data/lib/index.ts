// projects/react/18/packages/github-data/lib/index.ts

// #region example

const _GITHUB_REPO = 'https://github.com/mzhvv/experience/tree/master/projects/react/18';
type _CreateTreeChildrenKey<T extends `${string}`> = T;
type _TreeChildrenKey = _CreateTreeChildrenKey<'projects' | 'projectReact' | 'projectReact18'>;
const _data = getGithubData<_TreeChildrenKey>(_GITHUB_REPO);
const _examinationData = {
  owner: _data.owner,
  repo: _data.repo,
  tree: {
    projects: _data.tree.projects,
    projectsReact: _data.tree.projectReact,
    projectsReact18: _data.tree.projectReact18,
  },
};

void _examinationData;

// #endregion

type GithubUrl = `https://github.com/${string}`;

export function getGithubData<TreeChildrenKey extends string>(
  githubUrl: GithubUrl
  // GITHUB_API = 'https://api.github.com/repos'
) {
  const data = createData<TreeChildrenKey>(githubUrl);

  return data;
}

// #region createData

function createData<TreeChildrenKey extends string>(githubUrl: GithubUrl) {
  const path = githubUrl.replace('https://github.com/', '');

  // ['mzhvv', 'experience', 'tree', 'master', 'projects', 'react', '18']
  const parts = path.split('/');

  const data = {
    owner: parts[0], // 'mzhvv'
    repo: parts[1], // 'experience'
    // tree:  parts[2]
    // branch: parts[3], // 'master'
    tree: createTree<TreeChildrenKey>(parts),
  };

  return data;
}

function createTree<TreeChildrenKey extends string>(parts: string[]) {
  const treeParts = parts.slice(4); // ['projects', 'react', '18']
  const tree: Partial<Record<TreeChildrenKey, string>> = {};

  let currentPath = '';
  for (let i = 0; i < treeParts.length; i++) {
    currentPath = currentPath ? `${currentPath}/${treeParts[i]}` : treeParts[i];

    const key = treeParts
      .slice(0, i + 1)
      .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
      .join('');

    tree[key] = currentPath;
  }

  return tree;
}

// #endregion

// // #region test

// const _referenceData = {
//   owner: 'mzhvv',
//   repo: 'experience',
//   branch: 'master',
//   tree: {
//     projects: 'projects',
//     projectsReact: 'projects/react',
//     projectsReact18: 'projects/react/18',
//   },
// };

// // #endregion
