import { CiLaptop } from "react-icons/ci";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoTvOutline } from "react-icons/io5";
import { GiWashingMachine } from "react-icons/gi";
import { GiVacuumCleaner } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
function PopularCategories() {
  return (
    <div className="md:mx-16 md:mt-10 mx-5 mt-5">
      <h3 className="text-black-black_thin text-medium font-bold  md:text-2xl leading-36  md:pl-14">
        Ommabop kategoriyalar
      </h3>
      <div className="flex  gap-3 scrollbar-hide overflow-x-auto">
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Noutbuklar" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <CiLaptop className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Noutbuklar
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Smartfonlar" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <IoPhonePortraitOutline className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Smartfonlar
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Televizorlar" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <IoTvOutline className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Televizorlar
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Kir yuvish mashinalari" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <GiWashingMachine className="w-12 h-12 rounded-md p-2 text-orange-400 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Kir yuvish mashinalari
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Muzlatgichlar" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <CgSmartHomeRefrigerator className="w-12 h-12 rounded-md p-2 text-orange-400 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Muzlatgichlar
          </h4>
        </Link>
        <Link
          href={{
            pathname: "/categoryPage",
            query: { category: "Changyutgichlar" },
          }}
          className="flex gap-5 items-center rounded-xl border sm:pl-4 pl-2 sm:pr-10 pr-5 sm:py-3 py-1 hover:scale-105"
        >
          <GiVacuumCleaner className="sm:w-12 w-8 h-8 sm:h-12 rounded-md sm:p-2 p-1 text-orange-500 bg-orange-100" />
          <h4 className=" font-semibold text-[#7a7a7a] text-sm sm:text-base">
            Changyutgichlar
          </h4>
        </Link>
      </div>
    </div>
  );
}
export default PopularCategories;
