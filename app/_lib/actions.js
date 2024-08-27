"use server";

import { auth, signIn, signOut } from "@/app/_lib/auth";
import { revalidatePath } from "next/cache";

import { updateGuest } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const pattern = /^[a-zA-Z0-9]{6,20}$/;
  if (!pattern.test(nationalID)) throw new Error("Invalid national ID");

  const updateData = { nationality, countryFlag, nationalID };
  await updateGuest(session.user.guestId, updateData);

  revalidatePath("/account");
}
