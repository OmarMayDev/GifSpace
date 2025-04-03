"use client";
import { AiOutlineFileGif } from "react-icons/ai";
import { useState, useActionState, useTransition } from "react";
import Image from "next/image";
import { uploadFile } from "@/app/actions/UploadFile";
import useFileStore from "@/app/store/FileState";
export default function UploadGif() {
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [file, setFile] = useState<File | null>(null);
  const [state, action, isPending] = useActionState(uploadFile, null);
  const updateFile = useFileStore((state) => state.updateFile);
  const files = useFileStore((state) => state.files);
  const [isTransitionPending, startTransition] = useTransition();

  //store uploaded file in temp state
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      updateFile(file);
      setIsUploaded(true);
    }
  };

  return (
    <>
      {isPending ? (
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
        <form className=" border-3 border-black p-5  rounded-2xl m-5 lg:max-w-[1200px]  lg:m-auto">
          {isUploaded ? (
            <div className="bg-[#558fed] p-10 border-3 border-black rounded-2xl flex items-center justify-center ">
              <div className="p-2  ">
                {imagePreview ? (
                  <div className="flex flex-col gap-3">
                    <Image
                      src={imagePreview}
                      width={500}
                      height={500}
                      alt="User uploaded gif"
                      unoptimized
                      className="w-auto h-auto"
                    />
                    <div
                      onClick={() => {
                        if (files) {
                          startTransition(() => {
                            action(files);
                            setIsUploaded(false);
                            setImagePreview(null);
                            updateFile(null);
                          });
                        }
                      }}
                      className="bg-white/30 m p-2 flex justify-center w-full text-white hover:cursor-pointer rounded-2xl hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      Upload File
                    </div>
                    <button
                      onClick={() => {
                        updateFile(null);
                        setIsUploaded(false);

                        setImagePreview(null);
                      }}
                      className="bg-red-600/30 m p-2 flex justify-center w-full text-white hover:cursor-pointer hover:bg-red-600 transition-colors duration-300 rounded-2xl "
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>Loading..</div>
                )}
              </div>
            </div>
          ) : (
            <label htmlFor="file">
              <div className="bg-[#558fed] p-10 border-3 border-black rounded-2xl ">
                <input
                  type="file"
                  required
                  className="hidden"
                  name="file"
                  id="file"
                  multiple={false}
                  accept="image/gif"
                  onChange={fileChangeHandler}
                />
                <div className="flex flex-col items-center text-center gap-5 pb-5">
                  <h1 className="font-pop text-2xl text-white font-bold">
                    GifSpace <span className="font-light">Upload</span>
                  </h1>
                  <p className="font-pop text-white ">
                    Upload your gif to share on GifSpace! Just choose your gif
                    file and hit upload!
                  </p>
                  <div
                    className={`bg-white/20 w-full ${
                      isUploaded ? "hover:none" : "hover:cursor-pointer"
                    } max-w-[500px] max-h-[500px] `}
                  >
                    <div className="flex flex-col gap-2 p-5 items-center justify-center">
                      <AiOutlineFileGif color="white" size={100} />
                      <div className="text-white font-bold font-pop">GIF</div>
                      <div className="text-white  font-pop">Upload a GIF</div>
                    </div>

                    <div className="bg-white/30 p-2 flex justify-center w-full text-white hover:cursor-pointer">
                      Choose File
                    </div>
                  </div>
                </div>
              </div>
            </label>
          )}
        </form>
      )}
      <div className="h-70"></div>
    </>
  );
}
