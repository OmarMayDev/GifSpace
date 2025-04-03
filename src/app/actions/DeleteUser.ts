"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
export async function DeleteUser(prevState: unknown, data: unknown) {
  const prisma = new PrismaClient();

  //grab cookies to identify user
  const cookieStore = await cookies();
  const user = cookieStore.get("userId")?.value;
  //clear cookies

  cookieStore.delete("userId");

  //handle delete
  await prisma.formUser.delete({
    where: {
      id: user,
    },
  });
}
