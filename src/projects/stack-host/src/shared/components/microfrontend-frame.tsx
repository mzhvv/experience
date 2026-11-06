type MicrofrontendFrameProps = {
  src: string;
  title: string;
};

export function MicrofrontendFrame({ src, title }: MicrofrontendFrameProps) {
  return (
    <iframe
      className="min-h-[60vh] w-full flex-1 rounded-lg border border-border bg-card"
      src={src}
      title={title}
    />
  );
}
