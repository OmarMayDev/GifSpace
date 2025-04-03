"use client";
import Link from "next/link";
import Image from "next/image";
import useLoggedStore from "../store/LogState";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

export default function Footer() {
  const loggedIn = useLoggedStore((state) => state.loggedIn);

  return (
    <>
      <div className="border-3 border-black p-5 lg:p-0 rounded-2xl m-5 lg:max-w-[1200px] lg:max-h-[708px] lg:m-auto   ">
        <div className="flex flex-col lg:max-w-[1200px] lg:max-h-[708px]  lg:grid    lg:grid-cols-4 lg:grid-rows-2 gap-6 lg:p-5   ">
          {/* box1 */}
          <div className="border-2 rounded-2xl bg-[#bfbfe8] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 ">
            <div className="flex flex-col gap-[10px] p-5 ">
              <div className="font-pop font-[800] text-2xl hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out ">
                GifSpace
              </div>
              <p className="font-pop">
                GifSpace is the go-to platform for developers to upload, share,
                and discover programming-related GIFs. Whether you&apos;re
                looking for funny coding memes, educational animations, or
                creative programming visuals.
              </p>
            </div>
          </div>
          {/* box2 */}
          <div className="border-2 rounded-2xl bg-[#95b8f1] lg:flex lg:items-center lg:justify-center lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2">
            <div className=" gap-[10px] p-5 ">
              <nav className="flex flex-col gap-6 font-pop font-bold text-[20px] lg:flex-row  ">
                <Link
                  href="/"
                  className="hover:text-white  transition-colors duration-300 ease-in-out"
                >
                  Home
                </Link>
                {loggedIn ? (
                  <Link
                    href="/CommunityGifs"
                    className="hover:text-white  transition-colors duration-300 ease-in-out"
                  >
                    Community Gifs
                  </Link>
                ) : (
                  <Link
                    href="/SignUp"
                    className="hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    Community Gifs
                  </Link>
                )}
                {loggedIn ? (
                  <Link
                    href="/MyGifs"
                    className="hover:text-white  transition-colors duration-300 ease-in-out"
                  >
                    My Gifs
                  </Link>
                ) : (
                  <Link
                    href="/SignUp"
                    className="hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    My Gifs
                  </Link>
                )}
                {loggedIn ? (
                  <Link
                    href="/Account"
                    className="hover:text-white  transition-colors duration-300 ease-in-out"
                  >
                    Account
                  </Link>
                ) : null}
              </nav>
            </div>
          </div>
          {/* box3 */}
          <div className="flex flex-col gap-5 md:flex-row lg:contents ">
            <div className="border-2 rounded-2xl bg-[#95b8f1] lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
              <Image
                src="/gifs/gif1.gif"
                alt="Programming Gif"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
            {/* box4 */}
            <div className="border-2 rounded-2xl bg-[#95b8f1] lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3">
              <Image
                src="/gifs/gif2.gif"
                alt="Programming Gif"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
          {/* box5 */}
          <div className="border-2 rounded-2xl bg-[#f3e67e] lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3">
            <div className="flex flex-col gap-[10px] p-5 ">
              <nav className="flex flex-col gap-6 font-pop font-bold text-[20px] sm:text-2xl">
                {/* Twitter */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaXTwitter color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out">
                    X
                  </div>
                </div>
                {/* Instagram */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaInstagram color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out">
                    Instagram
                  </div>
                </div>
                {/* Facebook */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaFacebook color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out">
                    Facebook
                  </div>
                </div>
                {/* TikTok */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaTiktok color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out">
                    TikTok
                  </div>
                </div>
                {/* YouTube */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaYoutube color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer  transition-colors duration-300 ease-in-out">
                    YouTube
                  </div>
                </div>
                {/* Discord */}
                <div className="flex gap-5 items-center">
                  <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px]">
                    <FaDiscord color="white" />
                  </div>
                  <div className="font-pop hover:text-white hover:cursor-pointer  transition-colors duration-300 ease-in-out">
                    Discord
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}
