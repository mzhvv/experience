'use server';

import { ExperienceHostFrame } from './experience-host-frame';

type ExperiencePageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { path = [] } = await params;
  const hostUrl = new URL(process.env.EXPERIENCE_HOST_URL ?? 'http://localhost:3001');
  const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;

  return <ExperienceHostFrame src={hostUrl.toString()} />;
}
