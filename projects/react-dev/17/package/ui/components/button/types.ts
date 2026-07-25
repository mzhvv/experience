// package/ui/components/button/types.ts

import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  // className?: string;
}
