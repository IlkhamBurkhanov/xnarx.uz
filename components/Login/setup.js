// // pages/setup.js
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// export default function Setup() {
//   // Check if router is correctly initialized
//   const [redirect, setRedirect] = useState(false);
//   const router = useRouter();

//   // function handleSubmit() {
//   //   // event.preventDefault(); // Prevent the default form submission

//   //   // Example logic to handle form data, set the token, etc.
//   //   const token = "example-token-from-api"; // Assume this comes from an API response
//   //   if (typeof window !== "undefined") {
//   //     localStorage.setItem("token", token);
//   //     // console.log("Token saved to localStorage");
//   //     // console.log("saved");
//   //   }
//   //   // setRedirect(true);
//   //   router.push("/");

//   //   // window.location.reload();
//   // }
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://194.31.52.65:8080/api/user/register",
//         {
//           email,
//           password,
//           firstName: "", // You can set default values if required
//           lastName: "",
//           phone: "",
//           address: "",
//           role: "USER",
//           createdDate: new Date().toISOString(),
//           enabled: true,
//         }
//       );

//       if (response.status === 200) {
//         setSuccess("Registration successful");
//         console.log(response);
//         // Redirect to another page on success, e.g., login page
//         router.push("/");
//       }
//     } catch (error) {
//       setError(error?.response?.data?.message);
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
//       <div className="w-full max-w-[720px] p-6 sm:p-10 shadow-2xl space-y-8 bg-white rounded-2xl">
//         <h2 className="text-3xl font-bold text-center text-[#222222]">Setup</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         {success && <p className="text-green-500 mb-4">{success}</p>}

//         <div className="space-y-6">
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
//               onChange={(e) => setEmail(e.target.value)}
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
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="confirmPassword"
//               className="block font-semibold text-gray-700"
//             >
//               Confirm Password
//             </label>
//             <input
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               type="password"
//               required
//               className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="w-full px-4 py-2 text-sm font-medium text-white bg-[#FA7426] border border-transparent rounded-xl shadow-sm hover:bg-[#ee6a1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Setup
//             </button>
//           </div>
//           <div className="mt-6 text-center">
//             <div className="flex justify-between items-center">
//               <div className="border-t w-1/4 border-gray-500"></div>
//               <p className="px-2 text-sm font-semibold text-gray-700">
//                 Setup with Others
//               </p>
//               <div className="border-t w-1/4 border-gray-500"></div>
//             </div>
//             <button
//               // Reuse handleSubmit for this button
//               type="submit"
//               className="w-full flex justify-center items-center gap-2 mt-3 px-4 py-3 text-sm font-medium border-2 border-gray-500 rounded-xl shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               <Image
//                 className="w-5 h-5"
//                 src={"/Assets/Images/news/Google_logo.png"}
//                 alt="G"
//                 width={28}
//                 height={32}
//                 priority="true"
//               />
//               <p>Setup with Google</p>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Setup() {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Added phone state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://194.31.52.65:8080/api/user/register",
        {
          email,
          phone, // Send phone number to the API
          password,
          firstName: "",
          lastName: "",
          address: "",
          role: "USER",
          createdDate: new Date().toISOString(),
          enabled: true,
        }
      );
      console.log(response);
      if (response.data.access_token) {
        setSuccess("Registration successful");
        // Store the tokens in localStorage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("userId", response.data.userId);

        // Redirect to a secure page (dashboard or home)
        router.push("/"); // Change to your route
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-10">
      <div className="w-full max-w-[720px] p-6 sm:p-10 shadow-2xl space-y-8 bg-white rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-[#222222]">Setup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

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
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block outline-none w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={(e) => setPhone(e.target.value)} // Update phone state
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
          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {/* <button
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
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
