"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
export async function DisplayUploaded(prevState: unknown, data: unknown) {
  const prisma = new PrismaClient();
  //find the current user cookie Id
  const cookieStore = await cookies();
  const id = cookieStore.get("userId")?.value;

  //get username
  const getUserName = await prisma.formUser.findUnique({
    where: {
      id: id,
    },
  });

  const name = getUserName?.userName;
  //find the uploaded gifs
  const uploaded = await prisma.gifs.findMany({
    where: {
      createdBy: name as string,
    },
  });
  return uploaded;
}
