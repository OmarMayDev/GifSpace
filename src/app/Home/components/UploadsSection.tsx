export default function UploadsSection() {
  return (
    <section className=" max-w-[1200px] m-5 xl:m-auto">
      <div className="flex items-center justify-center p-5">
        <div className="font-pop font-extrabold text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl  ">
          We make uploading gifs easy
        </div>
      </div>
      <div className="flex flex-col gap-7 p- sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:p-5 xl:flex xl:flex-row">
        {/* box1 */}
        <div className="border-2 rounded-2xl bg-[#f3e67e] sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3  ">
          <div className="flex flex-col gap-[10px] p-10 sm:items-center sm:justify-center ">
            <div className="font-pop font-[800] hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out ">
              Uplaod
            </div>
            <p className="font-pop">
              Uploading a GIF has never been easier! With just a few clicks, you
              can drag, drop, and upload your favorite GIFs instantly. Our
              user-friendly interface ensures a seamless experience, so you can
              share your creativity without any hassle. No complicated
              steps—just pure simplicity.
            </p>
          </div>
        </div>
        {/* box2 */}
        <div className="border-2 rounded-2xl bg-[#bfbfe8] sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3  ">
          <div className="flex flex-col gap-[10px] p-10 sm:items-center sm:justify-center ">
            <div className="font-pop font-[800] hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out ">
              Check
            </div>
            <p className="font-pop">
              Once uploaded, our top-of-the-line system processes the content
              efficiently, ensuring seamless performance and high-quality
              display. This guarantees an enjoyable browsing experience for
              everyone, allowing users to interact with the platform without
              delays or interruptions. Our robust infrastructure ensures
              reliability, security, and a smooth user experience, making every
              interaction effortless and enjoyable.
            </p>
          </div>
        </div>
        {/* box3 */}
        <div className="border-2 rounded-2xl bg-[#f6c0b0] sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4 ">
          <div className="flex flex-col gap-[10px] p-10 sm:items-center sm:justify-center  ">
            <div className="font-pop font-[800] hover:text-white hover:cursor-pointer   transition-colors duration-300 ease-in-out ">
              View
            </div>
            <p className="font-pop">
              After approval, your GIF becomes part of our ever-growing
              collection, where you can view and interact with other GIFs from
              the community. Whether you want to revisit your uploads or explore
              newly uploaded GIFs, our platform makes it easy to find and engage
              with the best content.
            </p>
          </div>
        </div>
      </div>
      <div className="h-70"></div>
    </section>
  );
}
