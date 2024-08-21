// pages/setup.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Setup() {
  // Check if router is correctly initialized
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  function handleSubmit() {
    // event.preventDefault(); // Prevent the default form submission

    // Example logic to handle form data, set the token, etc.
    const token = "example-token-from-api"; // Assume this comes from an API response
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      console.log("Token saved to localStorage");
      console.log("saved");
    }
    // setRedirect(true);
    router.push("/");

    // window.location.reload();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
      <div className="w-full max-w-[720px] p-6 sm:p-10 shadow-2xl space-y-8 bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-[#222222]">Setup</h2>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA7426] border border-transparent rounded-xl shadow-sm hover:bg-[#ee6a1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Setup
            </button>
          </div>
          <div className="mt-6 text-center">
            <div className="flex justify-between items-center">
              <div className="border-t w-1/4 border-gray-500"></div>
              <p className="px-2 text-sm font-semibold text-gray-700">
                Setup with Others
              </p>
              <div className="border-t w-1/4 border-gray-500"></div>
            </div>
            <button
              // Reuse handleSubmit for this button
              type="submit"
              className="w-full flex justify-center items-center gap-2 mt-3 px-4 py-3 text-sm font-medium border-2 border-gray-500 rounded-xl shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Image
                className="w-5 h-5"
                src={"/Assets/Images/news/Google_logo.png"}
                alt="G"
                width={28}
                height={32}
                priority="true"
              />
              <p>Setup with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}