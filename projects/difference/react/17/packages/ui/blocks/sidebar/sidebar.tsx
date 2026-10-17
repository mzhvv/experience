// projects/react/17/packages/ui/blocks/sidebar/sidebar.tsx

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Viewport: React.FC<{ className?: string; dataId?: string }> = ({
  children,
  dataId,
  className,
}) => {
  return (
    <div data-id={dataId} className={clsx(styles.viewport, className)}>
      {children}
    </div>
  );
};

// sidebar

export const Sidebar: React.FC<{ className?: string; dataId?: string }> = ({
  children,
  dataId,
  className,
}) => {
  return (
    <div data-id={dataId} className={clsx(styles.sidebar, className)}>
      {children}
    </div>
  );
};

export const SidebarColumn: React.FC<{ className?: string; dataId?: string }> = ({
  children,
  dataId,
  className,
}) => {
  return (
    <div data-id={dataId} className={clsx(styles.sidebarColumn, className)}>
      {children}
    </div>
  );
};

//

export const Inset: React.FC<{ className?: string; dataId?: string }> = ({
  children,
  dataId,
  className,
}) => {
  return (
    <div data-id={dataId} className={clsx(styles.inset, className)}>
      {children}
    </div>
  );
};
