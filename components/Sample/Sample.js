import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CallBtn from "../ComponetntModuls/CallBtn/CallBtn";
import Texno from "../../public/Assets/Images/news/Texnomart.png";
import Media from "../../public/Assets/Images/news/Mediapark.jpg";
import Elmakon from "../../public/Assets/Images/news/Elmakon.png";
import Idea from "../../public/Assets/Images/news/Idea.png";
import Magazines from "../Magazines/Magazines";
import Phone from "../../public/Assets/Images/news/Phone1.png";
import Phone2 from "../../public/Assets/Images/news/Phone2.png";

import ButtonMain from "../../public/Assets/Images/news/Button.png";
import Link from "next/link";
import Profile from "../../pages/profile";

// const lang = useSelector((state) => state.data.lang);
// const languages = useSelector((state) => state.data.localization);

const Sample = () => {
  return (
    <>
      <Header />
      <Magazines />
      <section className="mt-5 sm:mt-5 md:mt-10 ">
        <div className="w-full max-w-container mx-auto">
          <div className="bg-gray-bg_main  rounded-3xl flex-col lg:flex-row flex lg:items-center justify-between">
            <div className="w-full max-w-container mx-auto">
              <div className="bg-gray-bg_main py-3 sm:pl-6 md:py-8 lg:py-10 pl-4 rounded-sectionRadius flex-col lg:flex-row flex lg:items-center justify-between">
                <div className="w-full lg:w-heroContent pr-4">
                  <div className="flex">
                    <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-black-black_dark mb-4">
                      <span className=" text-orange-400">x</span>nar
                      <span className="text-orange-400">x </span>
                      dan eng arzon va sifatlisi sotib oling
                    </h1>
                  </div>
                  <p className="font-normal text-sm lg:text-base text-black-black_thin mb-3 sm:mb-6y">
                    xnarx-dan eng arzon tovarlar - bu barcha magazinlardagi
                    mavjud arzon, yuqori sifatli, ishonchli mahsulotlar.
                  </p>
                  <div className="flex gap-5 p-8 mt-8">
                    {/* Setup Button */}
                    <Link
                      href={"/login"}
                      className="px-10 py-3 font-medium text-[#181717] bg-gray-100 border-1 border-orange-500 rounded-lg shadow-md hover:bg-[#FA7426] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2  transition duration-300"
                    >
                      Kirish
                    </Link>
                    <Link
                      href={"/setup-user"}
                      className="px-10 py-3 text-white bg-[#FA7426] hover:bg-gray-100 hover:text-[#222222] border-2 border-[#FA7426] rounded-lg shadow-md  "
                    >
                      Ro'yxatdan o'tish
                    </Link>

                    {/* Login Button */}
                  </div>

                  {/* <div className="hidden sm:inline-block">
                  <CallBtn />
                </div> */}
                </div>
                <div className="mt-10 sm:mt-0">
                  {/* Container for Images */}
                  <div className="flex flex-col items-center">
                    {/* Phone Image */}
                    <Image
                      className="w-[250px] h-[270px] sm:hidden -mb-4 z-40"
                      id="hero-bg"
                      src={Phone2}
                      width={250}
                      height={270}
                      alt="Phone"
                    />
                    {/* ButtonMain Image */}
                    <Image
                      className="w-[300px] h-[60px] sm:hidden z-30"
                      id="hero-bg"
                      src={ButtonMain}
                      width={300}
                      height={60}
                      alt="Button Main"
                    />
                    {/* Desktop Version */}
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center">
                    <Image
                      className="w-[250px] h-[270px] -mb-4 z-40"
                      id="hero-bg"
                      src={Phone2}
                      width={250}
                      height={270}
                      alt="Phone"
                    />
                    <Image
                      className="w-[300px] h-[60px] z-30"
                      id="hero-bg"
                      src={ButtonMain}
                      width={300}
                      height={60}
                      alt="Button Main"
                    />
                  </div>
                </div>

                {/* <div className="sm:hidden mt-7 pr-4">
                <CallBtn namejon={languages[lang].hero.button} />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sample;
