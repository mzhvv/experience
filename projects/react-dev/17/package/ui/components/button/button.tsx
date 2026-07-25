// package/ui/components/button/button.tsx

import { forwardRef } from 'react';
import clsx from 'clsx';

import { Slot } from '@package/ui/libs/slot';

import type { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', size = 'md', className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={clsx(styles.button, styles[variant], styles[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize } from './types';
