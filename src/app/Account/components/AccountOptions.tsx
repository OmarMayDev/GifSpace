"use client";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useTransition } from "react";
import { DeleteUser } from "@/app/actions/DeleteUser";
import { SignOutUser } from "@/app/actions/SignOutUser";
import { GetCurrentUser } from "@/app/actions/GetCurrentUser";
import useLoggedStore from "@/app/store/LogState";
import Image from "next/image";
export default function AccountOptions() {
  const router = useRouter();
  const updateloggedIn = useLoggedStore((state) => state.updateloggedIn);
  const [isPending, startTransition] = useTransition();
  const [showState, showUserAction] = useActionState(GetCurrentUser, null);
  const [, deleteAction, isDelPending] = useActionState(DeleteUser, null);
  const [, SignOutAction, isSignPending] = useActionState(SignOutUser, null);

  useEffect(() => {
    const user = localStorage.getItem("isUserLoggedIn");

    if (user) {
      startTransition(() => {
        showUserAction();
      });
    } else {
      startTransition(() => {
        router.push("/");
      });
    }
  }, []);

  //handle data fetch to display

  return (
    <div>
      {isPending || isDelPending || isSignPending ? (
        <div className="m-auto max-w-[400px] flex items-center justify-center">
          <Image
            src="/gifs/redSpinner.gif"
            width={200}
            height={200}
            alt="Spinner"
            unoptimized
            priority
          />
        </div>
      ) : (
        <>
          <div className="bg-[#95b8f1] border-3 border-black p-5 rounded-2xl max-w-[1200px] m-5 lg:m-auto">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="font-pop text-3xl">{showState?.userName}</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-500/50">
                <button
                  className="font-pop hover:text-red-600 hover:cursor-pointer transition-colors duration-300 ease-in-out  "
                  onClick={() => {
                    startTransition(() => {
                      localStorage.clear();
                      deleteAction();
                      updateloggedIn(false);
                      router.push("/");
                    });
                  }}
                >
                  Delete Account
                </button>
                <button
                  className=" text-black hover:cursor-pointer p-3 rounded-lg hover:text-red-600 transition-colors duration-300 disabled:opacity-50"
                  onClick={() => {
                    startTransition(() => {
                      SignOutAction();
                      localStorage.clear();
                      window.location.reload();
                    });
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="h-70"></div>
    </div>
  );
}
