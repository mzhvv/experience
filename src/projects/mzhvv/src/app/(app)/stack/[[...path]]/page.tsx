import { StackHostFrame } from './stack-host-frame';

type StackPageProps = {
  params: Promise<{ path?: string[] }>;
};

function resolveStackHostUrl(): string {
  // override
  if (process.env.STACK_HOST_URL) {
    return process.env.STACK_HOST_URL;
  }

  if (process.env.VERCEL === '1') {
    // если у тебя отдельный Vercel-проект для стека
    return process.env.STACK_VERCEL_URL
      ? `https://${process.env.STACK_VERCEL_URL}`
      : 'https://mzhvv-stack.vercel.app';
  }

  if (process.env.DOCKER === '1') {
    return 'http://stack:3001';
  }

  return 'http://localhost:3001';
}

export default async function StackPage({ params }: StackPageProps) {
  if (process.env.VERCEL_ENV === '1') {
    return <div>даного функционала пока нет</div>;
  }

  const { path = [] } = await params;

  const hostUrl = new URL(resolveStackHostUrl());
  const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
  hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;

  return <StackHostFrame src={hostUrl.toString()} />;
}

// import { StackHostFrame } from '@/shared/libs/host/stack-host-frame';

// type StackPageProps = {
//   params: Promise<{ path?: string[] }>;
// };

// export default async function StackPage({ params }: StackPageProps) {
//   const { path = [] } = await params;
//   const hostUrl = new URL(process.env.STACK_HOST_URL ?? 'http://localhost:3001');
//   const hostPath = path.map((segment) => encodeURIComponent(segment)).join('/');
//   hostUrl.pathname = `${hostUrl.pathname.replace(/\/+$/, '')}/${hostPath}`;

//   return <StackHostFrame src={hostUrl.toString()} />;
// }
