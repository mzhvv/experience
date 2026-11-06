export const Button = ({ ch }: { ch?: string }) => {
  return <div className="rounded-2xl border p-2">{ch || 'ch'}</div>;
};
