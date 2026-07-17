import { auth, signOut } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-4 flex flex-col">
        <div className="mb-6 px-3">
          <p className="text-sm font-medium truncate">{session?.user?.email}</p>
          <p className="text-xs text-zinc-500">Advertiser</p>
        </div>

        <nav className="space-y-1 flex-1">
          <a
            href="/app"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Overview
          </a>
          <a
            href="/app/campaigns"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Campaigns
          </a>
          <a
            href="/app/analytics"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Analytics
          </a>
          <a
            href="/app/settings"
            className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Settings
          </a>
        </nav>

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-md text-sm font-medium text-left text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Sign Out
          </button>
        </form>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
