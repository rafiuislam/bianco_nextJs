"use client";
import { signIn } from "next-auth/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../pages/api/firebase";
import SectionTitle from "../SectionTitle";
import { createUser } from "../../services/auth";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [address, setAddress] = useState(""); // New Address state

  const router = useRouter();

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

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Call the createUser function
        try {
          // Extract the part of the email before "@" symbol
          const emailParts = email.split("@");
          const username = emailParts ? emailParts[0] : "";

          const result = await createUser(username, email, address);
          console.log(result.error);

          toast(`Signup successful! You can now sign in now`, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            position: "top-center",
          });

          // Redirect the user to the signin page with a prompt
          router.push({
            pathname: "signin",
            query: { prompt: "Signup successful. You can now sign in!" },
          });

          // You can also redirect the user to a success page or perform other actions
        } catch (error) {
          // Handle createUser function error
          console.error("createUser error:", error);
          toast.error("Create new user registration failed.", {
            position: "bottom-center",
          });
        }
        // You can also redirect the user to a success page or perform other actions
      })
      .catch((error) => {
        // Handle signup error here, e.g., display an error message
        console.error("Signup error:", error);
        // Show a toast notification for signup error
        // toast.error(`Signup failed. Please try again. ${error.message}`, {
        //   position: "top-center",
        // });

        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "You have already Registered with this Email. Please use a different email.",
            {
              position: "bottom-center",
            }
          );
        } else {
          toast.error("Registration failed, Please try again.", {
            position: "bottom-center",
          });
        }
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SectionTitle title="Sign up" />
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Password Again
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordAgain"
                  name="passwordAgain"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  required
                  className="block w-full text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-3 bg-gray-100 border rounded"
                  placeholder="type same Password again"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Address (optional)
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)} // Capture address input
                  className="block w-full text-secondary font-light text-base font-custom leading-none p-3 focus:outline-none mt-3 bg-gray-100 border rounded"
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={() => signup()}
                disabled={
                  !email ||
                  !password ||
                  !passwordAgain ||
                  password !== passwordAgain
                }
                className="font-semibold text-base font-raleway mt-5 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-black">
            Already a member ?{" "}
            <button
              onClick={() => router.push("signin")}
              className="font-semibold leading-6 text-black hover:text-primary"
            >
              Sign In
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
