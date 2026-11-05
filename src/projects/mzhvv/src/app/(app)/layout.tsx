import { Sidebar } from '@stack-host/app/components/sidebar';
import '../../../../stack/host/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
}
