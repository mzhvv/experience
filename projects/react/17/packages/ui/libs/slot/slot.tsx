// projects/react/17/packages/ui/libs/slot/slot.tsx

import { forwardRef, isValidElement, cloneElement, type ReactNode } from 'react';

export const Slot = forwardRef<HTMLElement, { children: ReactNode }>(
  ({ children, ...props }, ref) => {
    if (isValidElement(children)) {
      return cloneElement(children, {
        ...props,
        ref,
        ...children.props,
      });
    }
    return null;
  }
);

Slot.displayName = 'Slot';
