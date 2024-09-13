// // pages/login.js
// import Image from "next/image";

// export default function Login() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
//       <div className="w-[720px] p-10 shadow-2xl space-y-8 bg-white rounded-2xl">
//         <h2 className="text-3xl font-bold text-center text-[#222222]">Login</h2>
//         <form className="space-y-6">
//           <div>
//             <label
//               htmlFor="email"
//               className="block font-semibold text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block font-semibold text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//               />
//               <label
//                 htmlFor="remember-me"
//                 className="block ml-2 text-sm font-semibold text-gray-700"
//               >
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <a
//                 href="#"
//                 className="font-semibold text-[#FA7426] hover:text-[#ee6a1d]"
//               >
//                 Forgot your password?
//               </a>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA7426] border border-transparent rounded-xl shadow-sm hover:bg-[#ee6a1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Login
//             </button>
//           </div>
//           <div className="mt-6 text-center">
//             <div className="flex justify-between items-center">
//               <div className="border-t-1 w-[250px] border-gray-500"></div>
//               <p className="text-sm  font-semibold text-gray-700">
//                 Login with Others
//               </p>
//               <div className="border-t-1 w-[250px] border-gray-500"></div>
//             </div>
//             <button
//               type="button"
//               className="w-full flex justify-center gap-2 mt-3 px-4 py-3 text-sm font-medium border-2 border-gray-500 rounded-xl shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               <Image
//                 className="w-5 h-5"
//                 src={"/Assets/Images/news/Google_logo.png"}
//                 alt="G"
//                 width={28}
//                 height={32}
//                 priority="true"
//               />
//               <p>Login with Google</p>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// pages/login.js
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  // function handleSubmit() {
  //   // event.preventDefault(); // Prevent the default form submission

  //   // Example logic to handle form data, set the token, etc.
  //   const token = "example-token-from-api"; // Assume this comes from an API response
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("token", token);
  //     // console.log("Token saved to localStorage");
  //     // console.log("saved");
  //   }
  //   // setRedirect(true);
  //   router.push("/");

  //   // window.location.reload();
  // }
  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await axios.post(
        "http://194.31.52.65:8080/api/auth/authenticate",
        {
          email,
          password,
        }
      );

      if (response.data.access_token) {
        // Store the tokens in localStorage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("userId", response.data.userId);

        // Redirect to a secure page (dashboard or home)
        router.push("/"); // Change to your route
      }
    } catch (error) {
      // Handle errors (e.g., wrong email or password)
      setErrorMessage("Email or password is wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 md:mt-10">
      <div className="w-full max-w-[720px] p-6 sm:p-10 shadow-2xl space-y-8 bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-[#222222]">Login</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <form className="space-y-6">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm font-semibold text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm mt-2 sm:mt-0">
              <a
                href="#"
                className="font-semibold text-[#FA7426] hover:text-[#ee6a1d]"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleSignIn}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA7426] border border-transparent rounded-xl shadow-sm hover:bg-[#ee6a1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-center">
            <div className="flex justify-between items-center">
              <div className="border-t w-1/4 border-gray-500"></div>
              <p className="px-2 text-sm font-semibold text-gray-700">
                Login with Others
              </p>
              <div className="border-t w-1/4 border-gray-500"></div>
            </div>
            {/* <button
              type="button"
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
              <p>Login with Google</p>
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
