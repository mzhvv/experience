// import { EnvTermint } from './env';
// import { AppsTerminl } from './apps';
import { AppsTerminl2 } from './apps-2';

export const Terminal = async () => {
  return (
    <section className="ms-2.5 p-2 text-xs">
      <div className="font-mono">
        {/* <EnvTermint /> */}
        {/* <AppsTerminl /> */}
        <AppsTerminl2 />
      </div>
    </section>
  );
};
