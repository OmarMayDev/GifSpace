"use server";
import { PrismaClient } from "@prisma/client";

export async function DisplayAllUploaded() {
  const prisma = new PrismaClient();

  //find the uploaded gifs
  const uploaded = await prisma.gifs.findMany();
  return uploaded;
}
