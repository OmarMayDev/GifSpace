"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
export async function DisplayAllUploaded(prevState: unknown, data: unknown) {
  const prisma = new PrismaClient();
  //find the current user cookie Id
  const cookieStore = await cookies();
  const id = cookieStore.get("userId")?.value;

  //find the uploaded gifs
  const uploaded = await prisma.gifs.findMany();
  return uploaded;
}
