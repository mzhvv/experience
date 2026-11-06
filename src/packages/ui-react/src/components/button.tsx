export const Button = ({ ch }: { ch?: string }) => {
  return <div className="p-4">{ch || 'ch'}</div>;
};
