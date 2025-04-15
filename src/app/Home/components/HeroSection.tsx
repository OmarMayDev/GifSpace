"use client";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaRocket,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="flex flex-col p-5 gap-7 max-w-[1200px] m-auto lg:grid lg:grid-cols-4 grid-rows-4 lg:max-h-[1000px] mb-[250px]">
      {/* one */}
      <div className="border-2 rounded-2xl bg-white lg:flex lg:items-center p-5 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <div className="flex flex-col lg:flex-row  lg:items-center  gap-2 lg:gap-5 lg:p-5">
          <div className="contents lg:flex lg:flex-col ">
            <Image
              src="/gifs/gif3.gif"
              alt="Programming Gif"
              width={100}
              height={100}
              className="rounded-full lg:w-[600px] border-3 border-black"
            />
            <div className="font-pop font-extrabold text-3xl lg:hidden">
              We love Gifs
            </div>
          </div>
          <p className="font-pop">
            We are an ever-growing GIF website. Our platform is designed to
            bring users the funniest, most trending, and high-quality GIFs in
            one place. Whether you&apos;re looking for reaction GIFs, memes, or
            animated art, we&apos;ve got you covered.
          </p>
        </div>
      </div>
      <div className="contents md:grid md:grid-cols-2  gap-5 lg:contents">
        {/* two */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] p-5  lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:text-center lg:flex lg:items-center lg:justify-center bg-[url('https://images.photowall.com/products/71305/planet-earth-at-night.jpg?h=699&q=85')]  bg-cover bg-center relative ">
          <div className="bg-black/50 absolute w-full h-full top-0 left-0 rounded-2xl "></div>
          <div className="font-pop font-extrabold text-2xl w-[100px]  text-white relative z-10 ">
            Gifs from all around the world
          </div>
        </div>
        {/* three */}
        <div className="border-2 rounded-2xl bg-[#a3a3dc] p-5 flex flex-col gap-5 items-center justify-center  lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:text-center">
          <CiTrophy size={80} />
          <div className="font-pop font-extrabold text-2xl ">
            Best gifs in the bizz
          </div>
        </div>
      </div>
      <div className="contents md:grid md:grid-cols-6 gap-5 lg:contents">
        {/* four */}
        <div className="border-2 rounded-2xl bg-[#f3e67e] p-5 flex   gap-5 items-center justify-center md:col-start-1 md:col-end-3  lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4">
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaXTwitter color="white" />
            </div>
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaInstagram color="white" />
            </div>
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaFacebook color="white" />
            </div>
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaTiktok color="white" />
            </div>
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaYoutube color="white" />
            </div>
            <div className="bg-black rounded-2xl flex items-center justify-center w-[48px] h-[48px] hover:cursor-pointer">
              <FaDiscord color="white" />
            </div>
          </div>
        </div>
        {/* five */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] md:col-start-3 md:col-end-7  lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-4">
          <Image
            src="/gifs/gif4.gif"
            alt=" Gif"
            width={800}
            height={800}
            className="rounded-2xl h-full"
          />
        </div>
      </div>
      <div className="contents md:grid md:grid-cols-6 gap-5 lg:contents">
        {/* six */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0]  md:col-start-1 md:col-end-4  lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4">
          <Image
            src="/gifs/gif5.gif"
            alt=" Gif"
            width={800}
            height={800}
            className="rounded-2xl h-full"
          />
        </div>
        {/* seven */}
        <div className=" md:col-start-4 md:col-end-7  lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5 flex flex-col gap-5 border-2 rounded-2xl bg-[#f6c0b0] p-5 bg-[url('https://cdn.mos.cms.futurecdn.net/x8oyLJtDJBPmL59WUoa36C.jpg')]  bg-cover bg-center relative">
          <div className="bg-black/50 absolute w-full h-full top-0 left-0 rounded-2xl "></div>
          <div className="font-pop font-extrabold text-3xl  relative z-10 text-white">
            Want to upload your gif?
          </div>
          <div>
            <button
              onClick={() => {
                router.push("/MyGifs");
              }}
              className="flex bg-white relative z-10 items-center border-2 border-black rounded-2xl gap-2 p-3 hover:cursor-pointer "
            >
              <FaRocket />
              <div className="font-pops">Click me!</div>
            </button>
          </div>
        </div>
      </div>
      <div className="contents md:grid md:grid-cols-4 gap-5 lg:contents">
        {/* eight */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] md:col-start-1 md:col-end-2  lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5 ">
          <Image
            src="/gifs/gif6.gif"
            alt=" Gif"
            width={800}
            height={800}
            className="rounded-2xl h-full"
          />
        </div>
        {/* nine */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] md:col-start-2 md:col-end-3  lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-5">
          <Image
            src="/gifs/gif7.gif"
            alt=" Gif"
            width={800}
            height={800}
            className="rounded-2xl h-full"
          />
        </div>
        {/* ten */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] md:col-start-3 md:col-end-5  lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5 ">
          <Image
            src="/gifs/gif8.gif"
            alt=" Gif"
            width={800}
            height={800}
            className="rounded-2xl h-full"
          />
        </div>
      </div>
    </section>
  );
}
