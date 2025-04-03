import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <div className="m-5 max-w-[1200px] xl:m-auto flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-5 lg:grid-rows-4 lg:max-h-[1000px]">
        {/* box1 */}
        <div className="border-2 rounded-2xl  bg-[#f3e67e] md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <div className="flex flex-col gap-[10px] p-5 items-center justify-center h-full">
            <div className="font-pop font-[800] text-2xl hover:text-white hover:cursor-pointer md:text-4xl  transition-colors duration-300 ease-in-out ">
              GifSpace
            </div>
            <div className="flex items-center justify-center max-w-[200px]">
              <Image
                src="/gifs/gif9.gif"
                alt=" Gif"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full w-[50px] h-[50px] border-3 border-black relative z-10 md:w-[80px] md:h-[80px]"
              />
              <Image
                src="/gifs/gif9.gif"
                alt=" Gif"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full w-[50px] h-[50px] border-3 border-black relative -ml-4 z-20 md:w-[80px] md:h-[80px]"
              />
              <Image
                src="/gifs/gif9.gif"
                alt=" Gif"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full w-[50px] h-[50px] border-3 border-black relative -ml-4 z-30 md:w-[80px] md:h-[80px]"
              />
              <Image
                src="/gifs/gif9.gif"
                alt=" Gif"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full w-[50px] h-[50px] border-3 border-black relative -ml-4 z-40 md:w-[80px] md:h-[80px]"
              />
              <Image
                src="/gifs/gif9.gif"
                alt=" Gif"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-full w-[50px] h-[50px] border-3 border-black relative -ml-4 z-50 md:w-[80px] md:h-[80px]"
              />
            </div>
          </div>
        </div>
        {/* box2 */}
        <div className="border-2 rounded-2xl  bg-[#bfbfe8] md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 ">
          <div className="flex gap-10 h-full  p-5 items-center justify-center">
            <div className="flex flex-col ">
              <div className="font-pop font-[800] text-2xl hover:text-white hover:cursor-pointer md:text-4xl     transition-colors duration-300 ease-in-out ">
                100+
              </div>
              <div className="font-pop font-[800]  hover:text-white hover:cursor-pointer md:text-2xl    transition-colors duration-300 ease-in-out ">
                Users
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-pop font-[800] text-2xl hover:text-white hover:cursor-pointer md:text-4xl   transition-colors duration-300 ease-in-out ">
                300+
              </div>
              <div className="font-pop font-[800]  hover:text-white hover:cursor-pointer md:text-2xl   transition-colors duration-300 ease-in-out ">
                downloads
              </div>
            </div>
          </div>
        </div>
        {/* box3 */}
        <div className="flex flex-col gap-5 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3  ">
          <div className="border-2 rounded-2xl bg-[#95b8f1]  ">
            <Image
              src="/gifs/gif11.gif"
              alt="Programming Gif"
              width={800}
              height={800}
              loading="lazy"
              className="rounded-2xl md:h-[800px] lg:h-[486px]"
            />
          </div>
        </div>
        {/* four */}
        <div className="border-2 rounded-2xl bg-white lg:flex lg:items-center p-5 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3 ">
          <div className="flex flex-col gap-5   ">
            <div className="font-pop font-extrabold text-3xl ">About us</div>

            <p className="font-pop">
              We have been passionate about GIFs for years and are excited to
              bring you a platform where creativity and expression come to life.
              Our goal is to make finding, sharing, and uploading GIFs easier
              than ever. Whether you&apos;re looking for the latest trending
              animations or want to showcase your own creations, we&apos;ve got
              you covered.
            </p>
          </div>
        </div>
        {/* five */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] lg:flex lg:items-center p-5 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5 ">
          <div className="flex flex-col gap-5">
            <div className="font-pop font-extrabold">
              Posting Gifs is what we do best
            </div>

            <p className="font-pop">
              We couldn&apos;t be happier to showcase a GIF collection made by
              and for fellow users. From humor to relatable moments, our
              platform is the perfect place to find and share the best GIFs.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div>
                  <FaRegCheckCircle size={30} />
                </div>
                <div className="font-pop">All the gifs you will need</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <FaRegCheckCircle size={30} />
                </div>
                <div className="font-pop">Easy uploads and downloads</div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <FaRegCheckCircle size={30} />
                </div>
                <div className="font-pop">Manage gifs like never before</div>
              </div>
            </div>
          </div>
        </div>
        {/* box6 */}
        <div className="flex flex-col gap-5 md:col-start-1 md:col-end-2 md:row-start-5 md:row-end-6 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-5">
          <div className="border-2 rounded-2xl bg-[#95b8f1] ">
            <Image
              src="/gifs/gif12.gif"
              alt=" Gif"
              width={800}
              height={500}
              loading="lazy"
              className="rounded-2xl md:h-[300px] lg:h-[486px]"
            />
          </div>
        </div>
        {/* box7 */}
        <div className="flex flex-col gap-5 md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6 lg:col-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-5 ">
          <div className="border-2 rounded-2xl bg-[#95b8f1]">
            <Image
              src="/gifs/gif13.gif"
              alt=" Gif"
              width={800}
              height={500}
              loading="lazy"
              className="rounded-2xl md:h-[300px] lg:h-[486px]"
            />
          </div>
        </div>
      </div>
      <div className="h-70"></div>
    </section>
  );
}
