function SkeletonBlock({
  className,
}: {
  className: string;
}) {
  return <div className={`skeleton rounded-3xl ${className}`} />;
}

export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-8 sm:px-10 lg:px-12">
        <div className="grid min-h-[80vh] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SkeletonBlock className="h-10 w-56 rounded-full" />
            <SkeletonBlock className="h-16 w-full max-w-3xl" />
            <SkeletonBlock className="h-16 w-11/12 max-w-2xl" />
            <div className="space-y-3">
              <SkeletonBlock className="h-4 w-full max-w-2xl" />
              <SkeletonBlock className="h-4 w-10/12 max-w-xl" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <SkeletonBlock className="h-28 w-full" />
              <SkeletonBlock className="h-28 w-full" />
              <SkeletonBlock className="h-28 w-full" />
            </div>
          </div>
          <div className="grid gap-5">
            <SkeletonBlock className="h-96 w-full" />
            <div className="grid gap-5 sm:grid-cols-2">
              <SkeletonBlock className="h-36 w-full" />
              <SkeletonBlock className="h-36 w-full" />
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <SkeletonBlock className="h-72 w-full" />
          <SkeletonBlock className="h-72 w-full" />
          <SkeletonBlock className="h-72 w-full" />
        </div>

        <div className="grid gap-6">
          <SkeletonBlock className="h-72 w-full" />
          <SkeletonBlock className="h-72 w-full" />
        </div>

        <div className="grid gap-8">
          <SkeletonBlock className="h-[32rem] w-full" />
          <SkeletonBlock className="h-[32rem] w-full" />
        </div>
      </div>
    </main>
  );
}
