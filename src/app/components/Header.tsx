"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import useLoggedStore from "../store/LogState";
export default function Header() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  //handle the local condition for sighedin?
  const updateloggedIn = useLoggedStore((state) => state.updateloggedIn);
  const loggedIn = useLoggedStore((state) => state.loggedIn);
  useEffect(() => {
    const checkUser = localStorage.getItem("isUserLoggedIn");

    if (checkUser) {
      updateloggedIn(true);
    }
  }, []);
  return (
    <div className="sticky top-5 mb-20 max-w-[1200px] m-auto z-100">
      <div className="border-2 bg-white  rounded-2xl  h-[100px] ml-5 mr-5 lg:flex lg:items-center lg:justify-between lg:p-5   relative ">
        <Link
          href="/"
          className="font-pop font-extrabold text-3xl hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out hidden lg:block "
        >
          GifSpace
        </Link>
        <div className=" gap-5 hidden lg:flex">
          <Link
            href="/"
            className="hover:text-[#95b8f1] transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          {loggedIn ? (
            <Link
              href="/CommunityGifs"
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              Community Gifs
            </Link>
          ) : (
            <Link
              href="/SignUp"
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              Community Gifs
            </Link>
          )}
          {loggedIn ? (
            <Link
              href="/MyGifs"
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              My Gifs
            </Link>
          ) : (
            <Link
              href="/SignUp"
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              My Gifs
            </Link>
          )}
          {loggedIn ? (
            <Link
              href="/Account"
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              Account
            </Link>
          ) : null}
        </div>

        <div className="flex justify-between p-5 items-center  lg:hidden">
          <Link href="/" className="font-pop font-extrabold text-3xl">
            GifSpace
          </Link>
          <div className="p-2   ">
            <div
              className={`relative flex flex-col justify-center items-center w-10 h-10 ${
                isOpen ? "space-y-0" : "space-y-1" // Apply space-y-1 when open, no space when closed
              } cursor-pointer`}
              onClick={toggleMenu}
            >
              {/* Top Bar */}
              <div
                className={`w-6 h-1 bg-black rounded-full transition-transform duration-300 ${
                  isOpen ? "rotate-45 absolute" : ""
                }`}
              ></div>
              {/* Middle Bar */}
              <div
                className={`w-6 h-1 bg-black rounded-full transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              {/* Bottom Bar */}
              <div
                className={`w-6 h-1 bg-black rounded-full transition-transform duration-300 ${
                  isOpen ? "-rotate-45 absolute" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        {/* dropdown */}
        <div
          className={`bg-white rounded-2xl border-2 border-black absolute transition-all ease-in-out duration-500 -z-10 w-full lg:hidden ${
            isOpen ? "h-[440px]  top-30" : "h-[0px] border-0 top-5 "
          }`}
        >
          <nav
            className={`flex flex-col items-center justify-center gap-20 h-full text-4xl  font-pop font-bold transition-opacity duration-200 p-5 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/"
              onClick={() => {
                setIsOpen(false);
              }}
              className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            {loggedIn ? (
              <Link
                href="/CommunityGifs"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
              >
                Community Gifs
              </Link>
            ) : (
              <Link
                href="/SignUp"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
              >
                Community Gifs
              </Link>
            )}
            {loggedIn ? (
              <Link
                href="/MyGifs"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
              >
                My Gifs
              </Link>
            ) : (
              <Link
                href="/SignUp"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
              >
                My Gifs
              </Link>
            )}
            {loggedIn ? (
              <Link
                href="/Account"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-[#95b8f1]  transition-colors duration-300 ease-in-out"
              >
                Account
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
}
