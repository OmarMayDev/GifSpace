"use client";
//sign up
import Link from "next/link";
import { SubmitSignUp } from "@/app/actions/SubmitSignUp";
import useLoggedStore from "@/app/store/LogState";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function FormBox() {
  //handle password check and formData send to formActions.ts
  const updateloggedIn = useLoggedStore((state) => state.updateloggedIn);
  const [state, action, isLoading] = useActionState(SubmitSignUp, undefined);
  const router = useRouter();
  //handle form success
  useEffect(() => {
    if (state?.success) {
      localStorage.setItem("isUserLoggedIn", "true");
      updateloggedIn(true);
      router.push("/");
    }
  }, [state]);
  return (
    <article>
      <div className="h-40"></div>
      <div className="m-5 xl:m-auto max-w-[1200px]">
        {/* box1 */}
        <div className="border-2 rounded-2xl bg-[#f2e67e] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 ">
          <div className="flex flex-col gap-5 p-5 ">
            <div className="font-pop font-[800] text-2xl   transition-colors duration-300 ease-in-out ">
              Want to upload Gifs?
            </div>
            <p className="font-pop">
              Join our community and bring your creativity to life! Creating an
              account gives you access to exclusive features like uploading and
              sharing your own GIFs, saving your favorites, and interacting with
              a world of fun and trending content.
            </p>
            <form
              action={action}
              className="flex flex-col gap-4 md:gap-5 font-pop "
            >
              <div className="contents ">
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  required
                  minLength={5}
                  maxLength={12}
                  className="bg-white p-5 rounded-2xl border-3 border-black placeholder:text-black placeholder:font-bold font-bold   focus:border-[#f6c0b0] outline-[#f6c0b0] "
                />
                <div className="contents lg:grid lg:grid-cols-2 lg:gap-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength={8}
                    maxLength={50}
                    required
                    className="bg-white p-5 rounded-2xl border-3 border-black placeholder:text-black placeholder:font-bold font-bold focus:border-[#f6c0b0] outline-[#f6c0b0]"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    minLength={8}
                    maxLength={50}
                    className="bg-white p-5 rounded-2xl border-3 border-black placeholder:text-black placeholder:font-bold font-bold focus:border-[#f6c0b0] outline-[#f6c0b0]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`p-5 border-3 border-black rounded-2xl w-50 font-bold focus:border-[#f6c0b0] hover:cursor-pointer hover:bg-[#f3e67e] transition-colors duration-300 ${
                  isLoading
                    ? "bg-[#f6c0b0]/50 text-black/50"
                    : "bg-[#f6c0b0] text-black"
                }`}
              >
                Create Account
              </button>
              {state?.error && <p className="text-red-600">{state.error}</p>}
              <div className="flex gap-1 flex-col md:flex-row">
                <div>Already have an account?</div>
                <Link
                  href="/SignIn"
                  className="text-[#95b8f1] font-bold hover:cursor-pointer "
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="h-70"></div>
    </article>
  );
}
