"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
export async function GetCurrentUser() {
  const prisma = new PrismaClient();

  //find the current user cookie Id
  const cookieStore = await cookies();
  const id = cookieStore.get("userId")?.value;

  //get current user info
  const findUser = prisma.formUser.findUnique({
    where: {
      id: id,
    },
  });

  return findUser;
}
