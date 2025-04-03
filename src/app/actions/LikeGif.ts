"use server";

import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
export async function likeGif(previousState: any, id: string) {
  const primsa = new PrismaClient();

  //find the current user cookie Id
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  //try
  const getUser = await primsa.formUser.findUnique({
    where: {
      id: userId,
    },
  });

  const user = getUser?.userName;
  if (!user) {
    return console.log("no user");
  }

  const check = await primsa.gifs.findFirst({
    where: {
      id: id,
    },
  });

  //check if liked array has user
  const checkLike = check?.whoLiked.includes(user);
  //check if like array is empty
  const checkIsEmpty = !check?.whoLiked;
  //handle conditions for updating liked
  if (checkLike) {
    const updatedArray = check?.whoLiked.filter(
      (ele) => ele !== (user as string)
    );
    const gif = await primsa.gifs.update({
      where: {
        id: id,
      },
      data: {
        likes: {
          decrement: 1,
        },
        whoLiked: {
          set: updatedArray,
        },
      },
    });
    return { message: "Gif has been unliked!" };
  } else if (!checkIsEmpty) {
    const gif = await primsa.gifs.update({
      where: {
        id: id,
      },
      data: {
        likes: {
          increment: 1,
        },
        whoLiked: {
          set: [user as string],
        },
      },
    });

    return { message: "Gif has been liked!" };
  } else {
    const gif = await primsa.gifs.update({
      where: {
        id: id,
      },
      data: {
        likes: {
          increment: 1,
        },
        whoLiked: {
          push: [user as string],
        },
      },
    });
    return { message: "Gif has been liked!" };
  }
}
