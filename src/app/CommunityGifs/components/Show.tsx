"use client";
import { FaRegSmileBeam } from "react-icons/fa";
import { useActionState, useEffect, useTransition } from "react";
import { DisplayAllUploaded } from "@/app/actions/DisplayAllUploaded";
import { likeGif } from "@/app/actions/LikeGif";
import { BiSolidLike } from "react-icons/bi";
import useFileStore from "@/app/store/FileState";
import Image from "next/image";
export default function Show() {
  const file = useFileStore((state) => state.files);
  const [isTPending, startTransition] = useTransition();

  const [state, action] = useActionState(DisplayAllUploaded, null);
  const [likeState, likeAction] = useActionState(likeGif, null);

  //useEffect to refeth uploaded and liked
  useEffect(() => {
    startTransition(() => {
      action();
    });
  }, [file, likeState]);
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[1200px] m-auto p-5 lg:p-0 ">
        <div className="flex items-center gap-2 border-b-3 pb-2 border-black">
          <div className="text-3xl  font-pop ">Community Gifs</div>
          <FaRegSmileBeam size={30} />
        </div>
        {isTPending ? (
          <div className="m-auto max-w-[400px] flex items-center justify-center">
            <Image
              src="/gifs/redSpinner.gif"
              width={200}
              height={200}
              alt="Spinner"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex gap-5  flex-wrap ">
            {state?.map((ele) => {
              return (
                <div
                  key={ele.id}
                  className="p-5 border-3 border-black w-[300px] h-[300px] rounded-2xl overflow-hidden "
                >
                  <div className="flex flex-col gap-2 h-full w-full">
                    <Image
                      src={`https://utgfkvkrlfvcbohdkfpp.supabase.co/storage/v1/object/public/${ele.gif}`}
                      width={400}
                      height={400}
                      alt="Uploaded Gif"
                      className="w-[254px] h-[206px] "
                      unoptimized
                      priority
                    />
                    <div className="border-b-2 border-black/50"></div>
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="text-pop">
                          Uploaded by: {ele.createdBy}
                        </div>

                        <div className="flex items-center gap-2">
                          {ele.whoLiked.includes(ele.createdBy) ? (
                            <BiSolidLike
                              className=" hover:cursor-pointer"
                              size={20}
                              color="red"
                              onClick={() => {
                                startTransition(() => {
                                  likeAction(ele.id);
                                });
                              }}
                            />
                          ) : (
                            <BiSolidLike
                              className=" hover:cursor-pointer"
                              size={20}
                              color="grey"
                              onClick={() => {
                                startTransition(() => {
                                  likeAction(ele.id);
                                });
                              }}
                            />
                          )}

                          <div className="font-pop text-2xl">{ele.likes}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="h-70"></div>
    </>
  );
}
