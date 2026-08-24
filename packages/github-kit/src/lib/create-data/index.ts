// packages/github-kit/src/lib/create-data/index.ts

import type { GithubUrl } from '../../types';

export function createData<TreeChildrenKey extends string>(githubUrl: GithubUrl) {
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
      .join('') as TreeChildrenKey; // as для build

    tree[key] = currentPath;
  }

  return tree;
}
