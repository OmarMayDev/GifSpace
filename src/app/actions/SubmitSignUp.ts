"use server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
export async function SubmitSignUp(previousState: unknown, formData: FormData) {
  const userName = formData.get("userName") as string;
  let password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const regex = /^[A-Za-z][A-Za-z0-9]+$/;
  const prisma = new PrismaClient();

  if (password != confirmPassword) {
    return { error: "Passwords must match" };
  }

  //hash and salt password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  password = hash as string;

  //check database for the user
  const checkUser = await prisma.formUser.findUnique({
    where: {
      userName: userName,
    },
  });

  if (checkUser) {
    return { error: "Username already taken" };
  }

  //error handle
  //pass check

  if (userName === userName.replace(regex, "")) {
    return { error: "Username must be letters only" };
  }

  //create user
  const createUser = await prisma.formUser.create({
    data: {
      userName: userName,
      password: password,
    },
  });

  if (!createUser) {
    return { error: "Could not make account" };
  }

  //send cookies use the ID
  const cookieId = createUser.id as string;
  const cookieStore = await cookies();
  cookieStore.set("userId", cookieId);

  //revaiidate
  revalidatePath("/MyGifs");

  return {
    success: true,
  };
}
