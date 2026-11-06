import { ThemeProvider } from '@/features/theme-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider forcedTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
