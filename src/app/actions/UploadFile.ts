"use server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function uploadFile(previousState: any, file: File) {
  const prisma = new PrismaClient();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
  const fileName = `file_${Date.now()}`;

  const { data, error } = await supabase.storage
    .from("gifs")
    .upload(`${fileName}`, file);

  if (error) {
    console.log(error);
  }

  console.log(data);

  //declare fullPath from supbase
  const url = data?.fullPath;

  //hanlde file conversion

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

  //send file over to db
  const sentFile = await prisma.gifs.create({
    data: {
      id: data?.id,
      gif: url as string,
      createdBy: name as string,
    },
  });
  console.log(sentFile);
  return sentFile;
}
