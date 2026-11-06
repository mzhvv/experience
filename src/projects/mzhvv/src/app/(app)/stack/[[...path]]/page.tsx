import { StackHostFrame } from './stack-host-frame';

type StackPageProps = {
  params: Promise<{ path?: string[] }>;
};

export default async function StackPage({ params }: StackPageProps) {
  const { path = [] } = await params;
  const hostUrl = new URL(process.env.STACK_HOST_URL ?? 'http://localhost:3001');
  const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;

  return <StackHostFrame src={hostUrl.toString()} />;
}
