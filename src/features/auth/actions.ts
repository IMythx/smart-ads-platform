"use server";

import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { generateId } from "@/lib/utils/id";

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  const passwordHash = await hash(password, 12);

  await db.insert(users).values({
    id: generateId(),
    email,
    name,
    passwordHash,
  });

  redirect("/auth/login");
}
