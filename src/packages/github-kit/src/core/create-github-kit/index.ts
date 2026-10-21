// packages/github-kit/src/core/create-github-kit/index.ts

import type { GithubUrl, CreateTreeKey } from '../../types';
import { createData } from '../../lib/create-data';

export function createGithubKit<TreeChildrenKey extends string>(
  githubUrl: GithubUrl
  // GITHUB_API = 'https://api.github.com/repos'
) {
  const data = createData<TreeChildrenKey>(githubUrl);

  return data;
}

// #region

const _GITHUB_REPO: GithubUrl = 'https://github.com/mzhvv/experience/tree/master/projects/react/18';
type _TreeKey = CreateTreeKey<'projects' | 'projectReact' | 'projectReact18'>;

const _data = createGithubKit<_TreeKey>(_GITHUB_REPO);
void (
  /* _examinationData */ {
    owner: _data.owner,
    repo: _data.repo,
    tree: {
      projects: _data.tree.projects,
      projectsReact: _data.tree.projectReact,
      projectsReact18: _data.tree.projectReact18,
    },
  }
);

export const _referenceData = {
  owner: 'mzhvv',
  repo: 'experience',
  branch: 'master',
  tree: {
    projects: 'projects',
    projectsReact: 'projects/react',
    projectsReact18: 'projects/react/18',
  },
};

// #endregion
