// projects/react/18/packages/github-data/hooks/index.ts

import { useState, useEffect } from 'react';
import type { GithubRepo, GithubFile } from '../types';

export const useGithubRepo = (repo: string) => {
  const [data, setData] = useState<GithubRepo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [repo]);

  return { data, loading, error };
};

export const useGithubContents = (path: string) => {
  const [data, setData] = useState<GithubFile[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/mzhvv/experience/contents/${path}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [path]);

  return { data, loading, error };
};
