import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  changeLang,
  searchProduct,
  setCategoryId,
} from "../../redux/siteDataReducer";
import LeftSidebar from "./LeftSideBar";
import Logos1 from "../../public/Assets/Images/HeaderAndHeroImg/logos1.png";

const env = process.env.NEXT_PUBLIC_TOKEN;

function Header() {
  // newww
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [currentValue, setCurrentValue] = useState("");
  const router = useRouter();
  // olds
  const [openLang, setOpenLang] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [menuLang, setMenuLang] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);
  const [menuCatOpen, setMenuCatOpen] = useState(false);
  const [fixedBar, setFixedBar] = useState(true);
  const [categories, setCategories] = useState([]);
  const [flagName, setFlagName] = useState("Ru");
  const [flagImg, setFlagImg] = useState(
    "/Assets/Images/HeaderAndHeroImg/russia-flag.svg"
  );
  const [savat, setSavat] = useState([]);

  const lang = useSelector((state) => state.data.lang);
  const setToken = useSelector((state) => state.data.setToken);
  const languages = useSelector((state) => state.data.localization);
  const [golink, setGoLink] = useState("laa");
  const [catalog, setCatalog] = useState(false);
  const [mainCategoryTitle, setMaincategoryTitle] = useState("");
  const [active, setActive] = useState("Smartfonlar");
  const [testCatalog, setTestCatalog] = useState(-1);
  const [openProfileModal, setOpenProfileModal] = useState(false); // New state
  const modalRef = useRef(null);
  const [tokenbek, setTokenbek] = useState();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenProfileModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserIconClick = () => {
    setOpenProfileModal((prev) => !prev);
  };

  // useEffect(() => {
  //   const tokens = JSON.parse(window.localStorage.getItem("token"));

  //   setGoLink(tokens ? "userprofil" : "login");
  // }, []);

  const dispatch = useDispatch();
  // const router = useRouter();
  const token = false;

  const toggleCategory = (mainCategory, index, indexAll) => {
    setMaincategoryTitle(mainCategory);
    setExpandedCategory((prevCategory) =>
      prevCategory === mainCategory ? null : mainCategory
    );
    setActive(index[0]);
    setTestCatalog(indexAll);
    setMenuCatOpen(!menuCatOpen);
  };

  const handleSubCategoryClick = () => {
    setExpandedCategory(null);
    setCatalog(false);
    setMenuCatOpen(!menuCatOpen);
    setClickMenu(false);
    // Close the category details pane
    // dispatch(setCategoryId(item.id));
  };

  // --- Get Categories
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/categories/getCategories`
  //     )
  //     .then((res) => {
  //       // console.log(res?.data);
  //       setCategories(res?.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  function handlMenuOpen(e) {
    if (e.target.id === "menuBar") setClickMenu(false);
  }

  const handleChange = (evt) => {
    // console.log(evt.target.value);
    setCurrentValue(evt.target.value);
  };

  // useEffect(() => {
  //   // window is accessible here.
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY > 10) {
  //       setFixedBar(true);
  //     } else {
  //       setFixedBar(false);
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   setSavat(JSON.parse(window.localStorage.getItem("cartItems")));
  // }, []);
  // console.log(savat?.length);

  const catalogTest = [
    {
      name: "1 chi catalog",
      catalog: ["swsws", "hswhsws", "whshwsh", "jdcnud"],
    },
    {
      name: "2 chi catalog",
      catalog: ["2wsws", "hswhsws", "whshwsh", "jdcnud"],
    },
    {
      name: "3 chi catalog",
      catalog: ["3sws", "hswhsws", "whshwsh", "jdcnud"],
    },
  ];

  const handleCatalog = (e) => {
    setTestCatalog(e);
    setMenuCatOpen(!menuCatOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { keyword: currentValue },
    });
    // setCurrentValue("");
  };
  // console.log(setToken, "!!!!!!!!");

  function deleteToken() {
    event.preventDefault(); // Prevent the default form submission

    // Example logic to handle form data, set the token, etc.
    const token = null; // Assume this comes from an API response
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
    }
    // setRedirect(true);
    router.push("/");

    // window.location.reload();
  }
  return (
    <header id="header" className=" shadow-sm">
      <div
        className="bg-gray-bg_nav z-50 md:fixed w-full
          top-0 transition-all
        border-b-2 md:border-none"
      >
        <div className="w-full max-w-container mx-auto px-4 py-3.5 sm:py-4">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center">
              <Link href={"/"} onClick={() => dispatch(setCategoryId(""))}>
                <Image
                  priority={true}
                  className="w-40 h-12 hidden sm:block"
                  src={Logos1}
                  width={"auto"}
                  height="auto"
                  alt="Site Logo"
                />
                <Image
                  priority={true}
                  className="w-20 h-12 sm:hidden"
                  src={Logos1}
                  width={"auto"}
                  height="auto"
                  alt="Site Logo Mobile"
                />
              </Link>
            </div>
            <div className="flex items-center pl-3">
              <form onSubmit={handleSubmit}>
                <input
                  value={currentValue}
                  id="input-searching"
                  className="hidden md:inline-block md:w-[400px]  lg:w-[560px] w-[260px] py-2.5 rounded-xl pl-9 outline-none"
                  type="text"
                  autoComplete="off"
                  placeholder=" Mahsulot qidirish"
                  aria-label="Enter your searching"
                  minLength={3}
                  onChange={handleChange}
                />
              </form>
              <button className="bg-white z-50 hidden md:flex ml-5 w-11 h-11 relative  items-center justify-center cursor-pointer rounded-xl">
                <Link href="/">
                  {savat?.length === 0 ? null : (
                    <div className=" bg-[#2B3D90] rounded-xl  z-20 ml-3 absolute w-4 h-4">
                      <h2 className=" text-center text-white  text-[8px] mt-0.5">
                        {savat?.length}
                      </h2>
                    </div>
                  )}
                  <Image
                    priority={true}
                    className="w-6 h-6 z-10"
                    src={"/Assets/Images/HeaderAndHeroImg/block-img.svg"}
                    width={24}
                    height={24}
                    alt="Blog Img"
                  />
                </Link>
              </button>
              <div className="relative">
                {setToken ? (
                  <div
                    onClick={() => setOpenProfileModal(!openProfileModal)}
                    className="bg-white relative z-50 h-11 w-11 flex items-center justify-between cursor-pointer rounded-xl ml-5"
                  >
                    <Image
                      priority={true}
                      className="w-6 h-6 mx-auto"
                      src={"/Assets/Images/HeaderAndHeroImg/user.svg"}
                      width={28}
                      height={20}
                      alt="User Icon"
                    />
                  </div>
                ) : (
                  <div className="hidden lg:flex items-center gap-5 ml-10">
                    {/* Setup Button */}
                    <Link
                      href={"/login"}
                      className="px-6 py-2 text-sm md:text-lg hover:border-orange-500 border rounded-lg shadow-md border-transparent leading-7 font-semibold text-[#FA7426] transition duration-300"
                    >
                      Kirish
                    </Link>
                    <Link
                      href={"/setup-user"}
                      className="px-6 py-2 text-xs md:text-base text-white bg-[#FA7426] hover:bg-gray-100 hover:text-[#222222] border-2 border-[#FA7426] rounded-lg shadow-md  duration-300"
                    >
                      Ro'yxatdan o'tish
                    </Link>

                    {/* Login Button */}
                  </div>
                )}
              </div>

              <button className="hidden cursor-pointer md:inline-block ml-3 xl:hidden">
                <Image
                  onClick={() => setClickMenu(true)}
                  priority={true}
                  className="w-8 h-5"
                  src={"/Assets/Images/HeaderAndHeroImg/hamburger.svg"}
                  width={32}
                  height={20}
                  alt="Hamburger Menu"
                />
              </button>
            </div>
          </div>
        </div>
        {openProfileModal && (
          <div
            ref={modalRef}
            className="fixed top-0 right-0 mt-16 mr-20 bg-white shadow-lg rounded-lg p-4 z-60"
          >
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/profile"
                  onClick={() => setOpenProfileModal(false)}
                  className="font-medium text-[#FA7426] hover:underline"
                >
                  Profile Page
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setOpenProfileModal(false);
                    deleteToken();
                  }}
                  className="font-medium text-[#FA7426] hover:underline"
                >
                  Exit
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`bg-gray-bg_nav z-50  ${
          fixedBar
            ? "fixed -top-1 transition-all w-full"
            : "static top-15 duration-500"
        } md:translate-y-59 flex py-3.5 px-4 items-center justify-between md:hidden`}
      >
        <Image
          onClick={() => setClickMenu(true)}
          priority={true}
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
          src={"/Assets/Images/HeaderAndHeroImg/hamburger.svg"}
          width={26}
          height={19}
          alt="Hamburger Manu"
        />
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            value={currentValue}
            className="w-full ml-2 max-w-inputWidth py-2 sm:py-3 rounded-xl pl-9 sm:pl-9 outline-none"
            type="text"
            autoComplete="off"
            placeholder="Qidirish"
            aria-label="Enter your searching"
            minLength={3}
            onChange={handleChange}
          />
        </form>
        {/* <button className="bg-white  w-10 h-10 sm:w-11 sm:h-11  flex items-center justify-center cursor-pointer rounded-xl">
          <Image
            priority={true}
            className="w-5 h-5 sm:w-6 sm:h-6"
            src={"/Assets/Images/HeaderAndHeroImg/block-img.svg"}
            width={24}
            height={24}
            alt="Blog Img"
          />
        </button> */}
      </div>

      <div
        id="menuBar"
        onClick={handlMenuOpen}
        className={`${
          clickMenu
            ? "left-0 bg-black w-auto inset-0 bg-opacity-25 backdrop-blur-sm duration-300 fixed z-50 top-0 "
            : "hidden"
        }   `}
      >
        <div className="w-modalMenu h-modalMenuHe h-screen bg-white pt-10 px-4">
          <Link
            className="mb-5 inline-block"
            href={"/"}
            onClick={() => {
              dispatch(setCategoryId(""));
              setClickMenu(false);
            }}
          >
            <Image
              priority="true"
              className=" w-36 h-10"
              src={Logos1}
              width={"auto"}
              height="auto"
              alt="Menu Bar Logo"
            />
          </Link>

          <div className="h-[100vh] overflow-y-auto pb-[180px]">
            {setToken ? (
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/profile"
                    onClick={() => setClickMenu(false)}
                    className="font-medium text-[#FA7426] hover:underline"
                  >
                    Profile Page
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setClickMenu(false);
                      deleteToken();
                    }}
                    className="font-medium text-[#FA7426] hover:underline"
                  >
                    Exit
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/login"
                    onClick={() => setClickMenu(false)}
                    className="font-medium text-[#FA7426] hover:underline"
                  >
                    Kirish
                  </Link>
                </li>
                <li>
                  <Link
                    href="/setup-user"
                    onClick={() => {
                      setClickMenu(false);
                    }}
                    className="font-medium text-[#FA7426] hover:underline"
                  >
                    Ro'yxatdan o'tish
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
// import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useRouter } from "next/router";
// import {
//   changeLang,
//   searchProduct,
//   setCategoryId,
// } from "../../redux/siteDataReducer";
// import LeftSidebar from "./LeftSideBar";
// import Logos1 from "../../public/Assets/Images/HeaderAndHeroImg/logos1.png";

// const env = process.env.NEXT_PUBLIC_TOKEN;

// function Header() {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [currentValue, setCurrentValue] = useState("");
//   const router = useRouter();
//   const [openLang, setOpenLang] = useState(false);
//   const [openUser, setOpenUser] = useState(false);
//   const [menuLang, setMenuLang] = useState(false);
//   const [clickMenu, setClickMenu] = useState(false);
//   const [menuCatOpen, setMenuCatOpen] = useState(false);
//   const [fixedBar, setFixedBar] = useState(true);
//   const [categories, setCategories] = useState([]);
//   const [flagName, setFlagName] = useState("Ru");
//   const [flagImg, setFlagImg] = useState(
//     "/Assets/Images/HeaderAndHeroImg/russia-flag.svg"
//   );
//   const [savat, setSavat] = useState([]);
//   const [openProfileModal, setOpenProfileModal] = useState(false); // New state

//   const lang = useSelector((state) => state.data.lang);
//   const setToken = useSelector((state) => state.data.setToken);
//   const languages = useSelector((state) => state.data.localization);
//   const [golink, setGoLink] = useState("laa");
//   const [catalog, setCatalog] = useState(false);
//   const [mainCategoryTitle, setMaincategoryTitle] = useState("");
//   const [active, setActive] = useState("Smartfonlar");
//   const [testCatalog, setTestCatalog] = useState(-1);

//   const categoryGroups = {
//     // ... (your category groups here)
//   };

//   const dispatch = useDispatch();
//   const token = false;

//   const toggleCategory = (mainCategory, index, indexAll) => {
//     setMaincategoryTitle(mainCategory);
//     setExpandedCategory((prevCategory) =>
//       prevCategory === mainCategory ? null : mainCategory
//     );
//     setActive(index[0]);
//     setTestCatalog(indexAll);
//     setMenuCatOpen(!menuCatOpen);
//   };

//   const handleSubCategoryClick = () => {
//     setExpandedCategory(null);
//     setCatalog(false);
//     setMenuCatOpen(!menuCatOpen);
//     setClickMenu(false);
//   };

//   const handleChange = (evt) => {
//     // console.log(evt.target.value);
//     setCurrentValue(evt.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push({
//       pathname: "/search",
//       query: { keyword: currentValue },
//     });
//     setCurrentValue("");
//   };

//   const toggleProfileModal = () => {
//     setOpenProfileModal(!openProfileModal);
//   };

//   return (
//     <header id="header" className="shadow-sm">
//       <div className="bg-gray-bg_nav z-50 md:fixed w-full top-0 transition-all border-b-2 md:border-none">
//         <div className="w-full max-w-container mx-auto px-4 py-3.5 sm:py-4">
//           <div className="hidden md:flex items-center justify-between">
//             <div className="flex items-center">
//               <Link href={"/"} onClick={() => dispatch(setCategoryId(""))}>
//                 <Image
//                   priority={true}
//                   className="w-40 h-12 hidden sm:block"
//                   src={Logos1}
//                   width={"auto"}
//                   height="auto"
//                   alt="Site Logo"
//                 />
//                 <Image
//                   priority={true}
//                   className="w-20 h-12 sm:hidden"
//                   src={Logos1}
//                   width={"auto"}
//                   height="auto"
//                   alt="Site Logo Mobile"
//                 />
//               </Link>
//             </div>
//             <div className="flex items-center pl-3">
//               <form onSubmit={handleSubmit}>
//                 <input
//                   value={currentValue}
//                   id="input-searching"
//                   className="hidden md:inline-block md:w-[400px] lg:w-[560px] w-[260px] py-2.5 rounded-xl pl-9 outline-none"
//                   type="text"
//                   autoComplete="off"
//                   placeholder=" Mahsulot qidirish"
//                   aria-label="Enter your searching"
//                   minLength={3}
//                   onChange={handleChange}
//                 />
//               </form>
//               <button className="bg-white z-50 hidden md:flex ml-5 w-11 h-11 relative items-center justify-center cursor-pointer rounded-xl">
//                 <Link href="/">
//                   {savat?.length === 0 ? null : (
//                     <div className="bg-[#2B3D90] rounded-xl z-20 ml-3 absolute w-4 h-4">
//                       <h2 className="text-center text-white text-[8px] mt-0.5">
//                         {savat?.length}
//                       </h2>
//                     </div>
//                   )}
//                   <Image
//                     priority={true}
//                     className="w-6 h-6 z-10"
//                     src={"/Assets/Images/HeaderAndHeroImg/block-img.svg"}
//                     width={24}
//                     height={24}
//                     alt="Blog Img"
//                   />
//                 </Link>
//               </button>
//               <div className="relative">
//                 {setToken ? (
//                   <div
//                     onClick={() => {
//                       setOpenUser(!openUser);
//                       toggleProfileModal(); // Toggle profile modal
//                     }}
//                     className="bg-white relative z-50 h-11 w-11 flex items-center justify-between cursor-pointer rounded-xl ml-5"
//                   >
//                     <Image
//                       priority={true}
//                       className="w-6 h-6 mx-auto"
//                       src={"/Assets/Images/HeaderAndHeroImg/user.svg"}
//                       width={28}
//                       height={20}
//                       alt="User Icon"
//                     />
//                   </div>
//                 ) : (
//                   <div className="hidden lg:flex items-center gap-5 ml-10">
//                     <Link
//                       href={"/login"}
//                       className="px-6 py-2 text-sm md:text-lg hover:border-orange-500 border rounded-lg shadow-md border-transparent leading-7 font-semibold text-[#FA7426] transition duration-300"
//                     >
//                       Kirish
//                     </Link>
//                     <Link
//                       href={"/setup-user"}
//                       className="px-6 py-2 text-xs md:text-base text-white bg-[#FA7426] hover:bg-gray-100 hover:text-[#222222] border-2 border-[#FA7426] rounded-lg shadow-md duration-300"
//                     >
//                       Ro'yxatdan o'tish
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <button className="hidden cursor-pointer md:inline-block ml-3 xl:hidden">
//                 <Image
//                   onClick={() => setClickMenu(true)}
//                   priority={true}
//                   className="w-8 h-5"
//                   src={"/Assets/Images/HeaderAndHeroImg/hamburger.svg"}
//                   width={32}
//                   height={20}
//                   alt="Hamburger Menu"
//                 />
//               </button>
//             </div>
//           </div>

//           <div className="md:hidden flex justify-between items-center">
//             <div className="flex items-center">
//               <Link href={"/"} onClick={() => dispatch(setCategoryId(""))}>
//                 <Image
//                   priority={true}
//                   className="w-20 h-12 sm:hidden"
//                   src={Logos1}
//                   width={"auto"}
//                   height="auto"
//                   alt="Site Logo Mobile"
//                 />
//               </Link>
//             </div>
//             <div className="relative">
//               {setToken ? (
//                 <div
//                   onClick={() => {
//                     setOpenUser(!openUser);
//                     toggleProfileModal(); // Toggle profile modal
//                   }}
//                   className="bg-white relative z-50 h-11 w-11 flex items-center justify-between cursor-pointer rounded-xl ml-5"
//                 >
//                   <Image
//                     priority={true}
//                     className="w-6 h-6 mx-auto"
//                     src={"/Assets/Images/HeaderAndHeroImg/user.svg"}
//                     width={28}
//                     height={20}
//                     alt="User Icon"
//                   />
//                 </div>
//               ) : (
//                 <button className="w-24 py-2 text-xs md:text-base text-white bg-[#FA7426] hover:bg-gray-100 hover:text-[#222222] border-2 border-[#FA7426] rounded-lg shadow-md duration-300">
//                   <Link href={"/login"}>Kirish</Link>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {openProfileModal && (
//           <div className="fixed top-0 right-0 mt-14 mr-5 bg-white shadow-lg rounded-lg p-4 z-40">
//             <div className="flex flex-col gap-2">
//               <Link
//                 href="/profile"
//                 className="text-lg font-medium text-[#FA7426] hover:underline"
//               >
//                 Profile Page
//               </Link>
//               <button
//                 onClick={() => setOpenProfileModal(false)}
//                 className="text-lg font-medium text-red-500 hover:underline"
//               >
//                 Exit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Header;
