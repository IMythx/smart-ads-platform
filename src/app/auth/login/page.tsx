import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/app");

  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          redirectTo: "/app",
        });
      }}
      className="space-y-4"
    >
      <h1 className="text-2xl font-bold text-center">Sign In</h1>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm bg-transparent"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm bg-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-zinc-500">
        No account?{" "}
        <a
          href="/auth/register"
          className="text-foreground underline underline-offset-2"
        >
          Register
        </a>
      </p>
    </form>
  );
}
