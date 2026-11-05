type MicrofrontendFrameProps = {
  src: string;
  title: string;
};

export function resolveMicrofrontendUrl(
  configuredUrl: string | undefined,
  environmentVariable: string,
  localUrl: string
) {
  if (configuredUrl) {
    return configuredUrl;
  }

  if (process.env.VERCEL) {
    throw new Error(`${environmentVariable} must be set to the deployed app URL on Vercel.`);
  }

  return localUrl;
}

export function MicrofrontendFrame({ src, title }: MicrofrontendFrameProps) {
  return <iframe className="microfrontend-frame" src={src} title={title} />;
}
