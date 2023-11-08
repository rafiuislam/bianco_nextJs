"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { login, getUserByEmail, createUser } from "../../services/auth";
import { toast } from "react-toastify";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const prompt = router?.query?.prompt || ""; // Get the prompt from the query or an empty string
  // console.log(prompt, error);

  const session = useSession({
    required: true,
    onUnauthenticated() {},
  });

  useEffect(() => {
    setEmail(session?.data?.user?.email);
    setUsername(session?.data?.user?.email.split("@")[0]);
  }, [session?.data]);

  const loginWithGoogle = async () => {
    try {
      await signIn("google", {
        redirect: true,
        callbackUrl: "/profile",
      });
    } catch (error) {
      // Handle other errors, e.g., network errors
      console.error("Google login error:", error);
      // toast.error("Network error, Please try again", {
      //   position: "top-center",
      // });
    }
  };

  const signin = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log({ result });
      if (result.error === "CredentialsSignin") {
        // Handle sign-in error here

        toast.error(`Wrong Credentials, Please try again. 😢`, {
          position: "bottom-center",
        });
      } else {
        // Sign-in was successful, proceed with your logic
        const currentUser = await getUserByEmail(email);
        // Extract the part of the email before "@" symbol
        // const emailParts = email.split("@");
        // const username = emailParts ? emailParts[0] : "";
        if (currentUser !== "nouser") {
          toast(
            `Successfully Logged in as ${currentUser.attributes.username}`,
            {
              icon: "👏",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
              position: "top-center",
            }
          );
          console.log("Current User: ", currentUser);
          router.push({
            pathname: "/profile",
            // query: { user: JSON.stringify(currentUser) },
          });
        }
      }
    } catch (error) {
      // Handle other errors, e.g., network errors
      console.error("Signin error:", error);
      toast.error(`Network error, Please try again`, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SectionTitle title="Sign in" />
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Password
                </label>
                <div className="text-sm">
                  <div
                    onClick={() => router.push("/forgotpassword")}
                    className="cursor-pointer font-semibold text-black hover:text-primary"
                  >
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-3 bg-gray-100 border rounded"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* {prompt && (
              <div className="mt-10 text-center font-semibold text-md text-black">
                {prompt}{" "}
              </div>
            )} */}

            <div className="flex justify-center items-center">
              <button
                onClick={() => {
                  signin();
                }}
                disabled={!email || !password}
                className={`font-semibold text-base font-raleway relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10 ${
                  prompt ? "" : " mt-5"
                }`}
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="mt-5 text-center text-sm text-black">
            Not a member?{" "}
            <button
              onClick={() => router.push("signup")}
              className="font-semibold leading-6 text-black hover:text-primary"
            >
              Sign Up
            </button>
            <br /> <div className="font-bold leading-6 text-black">Or,</div>
            <div className="flex justify-center items-center">
              <button
                onClick={loginWithGoogle}
                className="font-semibold text-base font-raleway mt-3 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
              >
                Login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
