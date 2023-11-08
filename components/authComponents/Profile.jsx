"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  updateUserByEmail,
  getUserByEmail,
  createUser,
} from "../../services/auth";
import { AiTwotoneSave, AiTwotoneEdit } from "react-icons/ai";

// import Image from "next/image";
// import imgProfile from "../../public/img_about/About-Bianco-Sepia.jpg";

export default function Profile() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isEditMode, setIsEditMode] = useState(false); // Track if address is in edit mode
  const [newAddress, setNewAddress] = useState("");

  // const session = useSession();

  const session = useSession({
    required: true,
    onUnauthenticated() {
      toast.success(`Successfully Logged out`, {
        icon: "👋",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-center",
      });
      router.push("/signin");
    },
  });

  // useEffect(() => {
  //   if (router.query.user) {
  //     try {
  //       const currentUser = JSON.parse(router.query.user);
  //       console.log("Current User:", currentUser.attributes);

  //       setUsername(currentUser.attributes.username);
  //       setEmail(currentUser.attributes.email);
  //       setAddress(currentUser.attributes.address);
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   }
  // }, [router.query.user]);

  const handleLogout = async () => {
    try {
      result = await signOut();
      // If signOut is successful, show the toast notification
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error if needed
      // toast.error(`Network error, Please try again`, {
      //   position: "bottom-center",
      // });
    }
  };

  const handleEditAddress = () => {
    setIsEditMode(true);
    setNewAddress(address); // Set the current address as the initial value
  };

  // Function to fetch user data, including address
  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.data?.user?.email) {
        setUsername(session?.data?.user?.email.split("@")[0]);
        setEmail(session?.data?.user?.email);

        try {
          const user = await getUserByEmail(session?.data?.user?.email);
          // console.log(user);
          if (user !== "nouser") {
            setUsername(user.attributes.username);
            setEmail(user.attributes.email);
            setAddress(user.attributes.address);
          } else {
            // If user is null, create a new user
            await createUser(username, email, address);
            console.log("User created.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [session?.data?.user?.email, address, email, username]);

  // useEffect(() => {
  //   fetchUserData();
  // },[session?.data]);

  const handleSaveAddress = async () => {
    try {
      // Call the updateUserByEmail function to update the address
      await updateUserByEmail(email, { address: newAddress });

      // Update the local state with the new address
      setAddress(newAddress);

      // Exit edit mode
      setIsEditMode(false);

      // fetchUserData();

      toast.success("Address updated successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Address update error:", error);
      toast.error("Failed to update address. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <section id="profile" className="h-full bg-bg-h pt-10 pb-10">
      <div className="rounded-lg bg-white relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center shadow-md">
        <div className="relative my-4 flex h-8 w-full justify-center">
          <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-primary bg-bg-h cursor-pointer">
            <span className="text-secondary font-bold text-3xl hover:text-primary">
              {username ? username.charAt(0).toUpperCase() : ""}
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <h4 className="text-primary font-bold text-3xl">{username}</h4>
          <p className="text-secondary text-xl font-semi-bold">{email}</p>
        </div>
        <div className="flex mt-2 mb-3 gap-1 md:!gap-2">
          {/* <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
            <p className="text-lightSecondary text-sm font-normal">Posts</p>
          </div> */}

          {isEditMode ? ( // Render input field when in edit mode
            <>
              <label htmlFor="newAddress" className="flex  items-center">
                <div className="text-base font-raleway font-sans font-semi-bold">
                  Address:
                </div>
              </label>
              <input
                type="text"
                id="newAddress"
                className="block w-full text-secondary font-light text-base font-custom leading-none p-1 focus:outline-none border rounded"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <button
                onClick={handleSaveAddress}
                className="hover:bg-primary font-regular text-sm font-raleway relative bg-black text-white py-2 px-2 rounded uppercase"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div className="flex align-top">
                <div className="text-base font-raleway font-sans font-semi-bold p-1">
                  Address:
                </div>
                <div className="text-secondary font-regular underline p-1">
                  {address}
                </div>

                <button
                  onClick={handleEditAddress}
                  className="hover:bg-primary hover:text-white font-regular text-sm font-raleway relative text-black p-1 rounded uppercase"
                >
                  {address === "" ? (
                    "Add"
                  ) : (
                    <div className="align-baseline">
                      <AiTwotoneEdit size={20} />
                    </div>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center items-center p-2 space-x-4 pb-4">
          <button
            className="font-semibold text-sm font-raleway relative bg-black py-2 px-6 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="font-semibold text-sm font-raleway relative bg-black py-2 px-6 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

Profile.requireAuth = true;

{
  /* <section
  id="profile"
  className="container mx-auto mt-4 mb-4 px-4 sm:pb-2 py-4 md:px-24"
>
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="bg-bg-h p-4 rounded-lg shadow-md">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-semibold mb-2">You are Signed In</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-black text-3xl">
          Welcome, {username}
          <br />
          Name: {username}
          <br />
          Email: {email}
          <br />
          {isEditMode ? ( // Render input field when in edit mode
            <div>
              <label htmlFor="newAddress">Address:</label>
              <input
                type="text"
                id="newAddress"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <button onClick={handleSaveAddress}>Save</button>
            </div>
          ) : (
            <>
              Address: {address}
              <br />
              <button onClick={handleEditAddress}>
                {" "}
                {address === "" ? "Add Address" : "Edit Address"}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          className="font-semibold text-base font-raleway mt-9 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          className="font-semibold text-base font-raleway mt-9 relative bg-black py-3 px-10 rounded uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-10"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</section>; */
}
