import { StackHostFrame } from '@/shared/libs/host/stack-host-frame';

type StackPageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function StackPage({ params }: StackPageProps) {
  const { path = [] } = await params;
  const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  const hostOrigin =
    process.env.STACK_HOST_URL ?? (process.env.VERCEL ? undefined : 'http://localhost:3001');

  if (!hostOrigin) {
    throw new Error('STACK_HOST_URL must be set to the deployed Stack host URL on Vercel.');
  }

  const hostUrl = new URL(hostOrigin);
  hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;

  return <StackHostFrame src={hostUrl.toString()} />;
}
