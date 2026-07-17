export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight text-center">
          Smart Ads Platform
        </h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 text-center max-w-xl">
          AI-powered social shopping ads engine — promote products, target audiences,
          and measure performance.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="/app"
            className="rounded-full bg-foreground text-background px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Dashboard
          </a>
          <a
            href="/api/health"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            API Status
          </a>
        </div>
      </main>
    </div>
  );
}
