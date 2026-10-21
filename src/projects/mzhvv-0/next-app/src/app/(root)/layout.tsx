export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-6">
        <h1>projects/mzhvv/next-app</h1>
      </div>
      {children}
    </div>
  );
}
