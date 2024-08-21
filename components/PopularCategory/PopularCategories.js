// import { CiLaptop } from "react-icons/ci";
// import Link from "next/link";
// import Samsung from "../../public/Assets/Images/news/Samsung.png";
// import Apple from "../../public/Assets/Images/news/Apple.png";
// import Vivo from "../../public/Assets/Images/news/Vivo.png";
// import Xiaomi from "../../public/Assets/Images/news/Xiaomi.png";
// import Huawei from "../../public/Assets/Images/news/Huawei.png";
// import Oppo from "../../public/Assets/Images/news/Oppo.png";
// import { IoPhonePortraitOutline } from "react-icons/io5";
// import { IoTvOutline } from "react-icons/io5";
// import { GiWashingMachine } from "react-icons/gi";
// import { GiVacuumCleaner } from "react-icons/gi";
// import { CgSmartHomeRefrigerator } from "react-icons/cg";
// function PopularCategories() {
//   return (
//     <div className="md:mx-10 md:mt-8 mx-5 mt-5">
//       <h3 className="text-black-black_thin text-medium font-bold  md:text-2xl md:pl-10 leading-36">
//         Ommabop kategoriyalar
//       </h3>
//       <div className="flex justify-between items-center  gap-3 sm:py-4 sm:px-2 scrollbar-hide overflow-x-auto">
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Samsung" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <CiLaptop className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Samsung
//           </h4>
//         </Link>
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Apple" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <IoPhonePortraitOutline className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Apple
//           </h4>
//         </Link>
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Xiaomi" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <IoTvOutline className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Xiaomi
//           </h4>
//         </Link>
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Huawei" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <GiWashingMachine className="w-12 h-12 rounded-md p-2 text-orange-400 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Huawei
//           </h4>
//         </Link>
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Vivo" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <CgSmartHomeRefrigerator className="w-12 h-12 rounded-md p-2 text-orange-400 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Vivo
//           </h4>
//         </Link>
//         <Link
//           href={{
//             pathname: "/search",
//             query: { keyword: "Oppo" },
//           }}
//           className="flex gap-5 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
//         >
//           <GiVacuumCleaner className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
//           <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
//             Oppo
//           </h4>
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default PopularCategories;

import Image from "next/image";
import Link from "next/link";
import Samsung from "../../public/Assets/Images/news/Samsung.png";
import Apple from "../../public/Assets/Images/news/Apple.png";
import Vivo from "../../public/Assets/Images/news/Vivo.png";
import Xiaomi from "../../public/Assets/Images/news/Xiaomi.png";
import Huawei from "../../public/Assets/Images/news/Huawei.png";
import Oppo from "../../public/Assets/Images/news/Oppo.png";

function PopularCategories() {
  return (
    <div className="md:mx-10 md:mt-8 mx-5 mt-5">
      <h3 className="text-black-black_thin text-medium font-bold md:text-2xl md:pl-10 leading-36">
        Mashhur Brendlar
      </h3>
      <div className="flex justify-between items-center gap-3 sm:py-4 sm:px-2 scrollbar-hide overflow-x-auto">
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Samsung" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4  sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Samsung}
            alt="Samsung"
            className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Samsung
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Apple" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Apple}
            alt="Apple"
            className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Apple
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Xiaomi" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Xiaomi}
            alt="Xiaomi"
            className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Xiaomi
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Huawei" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Huawei}
            alt="Huawei"
            className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Huawei
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Vivo" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Vivo}
            alt="Vivo"
            className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Vivo
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/search",
            query: { keyword: "Oppo" },
          }}
          className="flex sm:gap-5 gap-1 items-center w-full rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Oppo}
            alt="Oppo"
            className="sm:w-16 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1"
            width={48}
            height={48}
          />
          <h4 className="font-semibold text-[#7a7a7a] pr-3 text-sm sm:text-base">
            Oppo
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default PopularCategories;
