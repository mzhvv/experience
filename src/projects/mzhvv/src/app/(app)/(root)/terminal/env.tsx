export const EnvTermint = () => {
  return (
    <div>
      <div>
        LOCALHOST: <div className="inline-block size-2 animate-pulse rounded-full bg-green-700" />
      </div>
      <div className="text-secondary line-through">
        DOCKER: <div className="inline-block size-2 rounded-full bg-red-950" />
      </div>
      <div className="text-secondary line-through">
        VERCEL: <div className="inline-block size-2 rounded-full bg-red-950" />
      </div>
      <div className="text-secondary line-through">
        DEPLOY: <div className="inline-block size-2 rounded-full bg-red-950" />
      </div>
    </div>
  );
};
