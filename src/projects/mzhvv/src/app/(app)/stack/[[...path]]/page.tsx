import { StackHostFrame } from '@/shared/libs/host/stack-host-frame';

type StackPageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function StackPage({ params }: StackPageProps) {
  const { path = [] } = await params;
  const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  const hostUrl = process.env.VERCEL
    ? `/stack-host${hostPath ? `/${hostPath}` : ''}`
    : new URL(process.env.STACK_HOST_URL ?? 'http://localhost:3001');

  if (hostUrl instanceof URL) {
    hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;
  }

  return <StackHostFrame src={hostUrl.toString()} />;
}
