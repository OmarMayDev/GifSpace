"use server";
import { cookies } from "next/headers";
export async function SignOutUser(prevState: unknown, data: unknown) {
  //clear cookie
  (await cookies()).delete("userId");
}
