"use server";
import { cookies } from "next/headers";
export async function SignOutUser() {
  //clear cookie
  (await cookies()).delete("userId");
}
