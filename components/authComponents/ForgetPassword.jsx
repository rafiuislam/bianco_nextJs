"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../pages/api/firebase";
import SectionTitle from "../SectionTitle";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
    router.push("signin");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SectionTitle title="Forget Password" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-3 bg-gray-100 border rounded"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => resetEmail()}
                disabled={!email}
                className="font-semibold text-base font-raleway mt-9 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-black">
            Not a member?{" "}
            <button
              onClick={() => router.push("signup")}
              className="font-semibold leading-6 text-black hover:text-primary"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
