export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-6">
        <h1>src/projects/mzhvv</h1>
      </div>
      {children}
    </div>
  );
}
