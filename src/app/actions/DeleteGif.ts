"use server";
import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";

interface SentData {
  filePathing: string;
  fileId: string;
}
export async function deleteGif(previousState: unknown, sentData: SentData) {
  const primsa = new PrismaClient();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

  const filePath = sentData.filePathing.split("gifs/")[1];

  await supabase.storage.from("gifs").remove([filePath]);

  await primsa.gifs.delete({
    where: {
      id: sentData?.fileId,
    },
  });

  return { message: "Gif has been deleted!" };
}
