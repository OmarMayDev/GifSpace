"use client";
import { FaRocket } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useLoggedStore from "@/app/store/LogState";
export default function Create() {
  const router = useRouter();

  const loggedIn = useLoggedStore((state) => state.loggedIn);

  return (
    <article>
      <div className="max-w-[1200px] flex flex-col items-center justify-center gap-5 p-20  m-5 xl:m-auto border-2 rounded-2xl bg-[#f6c0b0]  lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:text-center lg:flex lg:items-center lg:justify-center bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzVrN3ByNmVpczg3NnZuYmxxNWV3anQ2NXhxdGo2N3FpdjlqYmo2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zOvBKUUEERdNm/giphy.gif')]  bg-cover bg-center  relative ">
        <div className="bg-black/50 absolute w-full h-full top-0 left-0 rounded-2xl "></div>
        <div className="font-pop font-extrabold text-3xl text-center  sm:text-4xl md:text-5xl relative z-10 text-white">
          Want to upload your gif?
        </div>
        <div>
          <button
            onClick={() => {
              if (loggedIn) {
                router.push("/MyGifs");
              } else {
                router.push("/SignUp");
              }
            }}
            className="flex bg-white relative z-10 items-center border-2 border-black rounded-2xl gap-2 p-3 hover:cursor-pointer "
          >
            <FaRocket />
            <div className="font-pops">Click me!</div>
          </button>
        </div>
      </div>
      <div className="h-70"></div>
    </article>
  );
}
