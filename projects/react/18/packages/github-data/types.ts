// projects/react/18/packages/github-data/types.ts

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  language: string | null;
  license: {
    key: string;
    name: string;
    url: string | null;
  } | null;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  topics: string[];
  visibility: 'public' | 'private';
};

export type GithubFile = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: 'file' | 'dir';
  _links: {
    self: string;
    git: string;
    html: string;
  };
};
