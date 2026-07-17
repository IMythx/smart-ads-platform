import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { registerUser } from "@/features/auth/actions";

export default async function RegisterPage() {
  const session = await auth();
  if (session) redirect("/app");

  return (
    <form action={registerUser} className="space-y-4">
      <h1 className="text-2xl font-bold text-center">Create Account</h1>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm bg-transparent"
        />
      </div>

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
        Register
      </button>

      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <a
          href="/auth/login"
          className="text-foreground underline underline-offset-2"
        >
          Sign in
        </a>
      </p>
    </form>
  );
}
