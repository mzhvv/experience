type MicrofrontendFrameProps = {
  src: string;
  title: string;
};

export function MicrofrontendFrame({ src, title }: MicrofrontendFrameProps) {
  return <iframe className="microfrontend-frame" src={src} title={title} />;
}
