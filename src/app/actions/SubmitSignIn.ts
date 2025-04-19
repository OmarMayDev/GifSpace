"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function SubmitSignIn(previousState: unknown, formData: FormData) {
  const userName = formData.get("userName") as string;
  const password = formData.get("password") as string;
  const regex = /^[A-Za-z][A-Za-z0-9]+$/;
  const prisma = new PrismaClient();

  //check database for the user
  const findUser = await prisma.formUser.findUnique({
    where: {
      userName: userName,
    },
  });
  const hash = findUser?.password as string;
  //compare hash
  bcrypt.compare(password, hash);

  if (!findUser) {
    return { error: "No user with that username" };
  }

  if (userName === userName.replace(regex, "")) {
    return { error: "Usernames only have letters only" };
  }

  if (!hash) {
    return { error: "Password is wrong" };
  }

  //send cookies use the ID
  const cookieId = findUser.id as string;
  const cookieStore = await cookies();
  cookieStore.set("userId", cookieId);

  return {
    success: true,
  };
}
