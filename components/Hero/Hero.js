import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CallBtn from "../ComponetntModuls/CallBtn/CallBtn";
import Texno from "../../public/Assets/Images/news/Texnomart.png";
import Media from "../../public/Assets/Images/news/Mediapark.jpg";
import Elmakon from "../../public/Assets/Images/news/Elmakon.png";
import Idea from "../../public/Assets/Images/news/Idea.png";
import Main1 from "../../public/Assets/Images/news/main1.png";
import Main3 from "../../public/Assets/Images/news/main2.png";
import Main4 from "../../public/Assets/Images/news/main3.png";
import Main2 from "../../public/Assets/Images/news/main4.png";

import Phone2 from "../../public/Assets/Images/news/Phone2.png";

import ButtonMain from "../../public/Assets/Images/news/Button.png";
import Link from "next/link";
import Slider from "react-slick";

function Hero() {
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const sliderSettings = {
    dots: true,
    customPaging: (i, currentSlide) => (
      <div
        className={`h-2 w-2 rounded-full mx-1 transition-colors duration-300 lg:-mt-10 -mt-5 ${
          i === currentSlide ? "bg-blue-500" : "bg-white"
        }`}
      ></div>
    ),
    dotsClass: "slick-dots flex justify-center", // Style for the dots container
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="mt-5 ">
      <div className="lg:mx-10 mx-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          {/* Slider Section (2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <Slider {...sliderSettings}>
              <Link
                href={{
                  pathname: "/search",
                  query: { keyword: "GeekCases" },
                }}
              >
                <img
                  src="/Assets/Images/news/main1s.png"
                  alt="Slider Image 1"
                  className="w-full rounded h-full"
                />
              </Link>{" "}
              <Link
                href={{
                  pathname: "/search",
                  query: { keyword: "CoolGagets" },
                }}
              >
                <img
                  src="/Assets/Images/news/main4s.png"
                  alt="Slider Image 2"
                  className="w-full rounded h-full"
                />
              </Link>
            </Slider>
          </div>

          {/* Static Images Section (side by side on mobile, stack vertically on larger screens) */}
          <div className="grid grid-cols-2 lg:grid-cols-1  lg:-mt-1.5 lg:gap-4 gap-1">
            <Link
              href={{
                pathname: "/search",
                query: { keyword: "Adreamer" },
              }}
              className="h-full"
            >
              <img
                src="/Assets/Images/news/main2.png"
                alt="Static Image 1"
                className="w-full h-full object-contain rounded"
              />
            </Link>
            <Link
              href={{
                pathname: "/search",
                query: { keyword: "Zeblaze" },
              }}
              className="h-full"
            >
              <img
                src="/Assets/Images/news/main3.png"
                alt="Static Image 2"
                className="w-full h-full object-contain rounded"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
//  <div className="w-full max-w-container mx-auto">
//   <div className="bg-gray-bg_main  rounded-3xl flex-col lg:flex-row flex lg:items-center justify-between">
//     <div className="w-full max-w-container mx-auto">
//       <div className="bg-gray-bg_main  sm:pl-6 sm:pr-10 pl-4 rounded-sectionRadius flex-col lg:flex-row flex lg:items-center justify-between">
//         <div className="w-full lg:w-heroContent py-3 md:py-8 lg:py-10 pr-4">
//           <div className="flex">
//             <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-black-black_dark mb-4">
//               <span className=" text-orange-400">x</span>nar
//               <span className="text-orange-400">x </span>
//               {languages[lang].hero.heading}
//             </h1>
//           </div>
//           <p className="font-normal text-sm lg:text-base text-black-black_thin mb-3 sm:mb-6y">
//             {languages[lang].hero.text}
//           </p>
//           {/* <div className="hidden sm:inline-block">
//             <CallBtn />
//           </div> */}
//         </div>
//         <div className="mt-10 sm:mt-0 p-3">
//           <div className="flex flex-col items-center">
//             <Image
//               className="w-[250px] h-[270px] sm:hidden -mb-4 z-40"
//               id="hero-bg"
//               src={Phone2}
//               width={250}
//               height={270}
//               alt="Phone"
//             />
//             <Image
//               className="w-[300px] h-[60px] sm:hidden z-30"
//               id="hero-bg"
//               src={ButtonMain}
//               width={300}
//               height={60}
//               alt="Button Main"
//             />
//           </div>
//           <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center">
//             <Image
//               className="w-[250px] h-[270px] -mb-4 z-40"
//               id="hero-bg"
//               src={Phone2}
//               width={250}
//               height={270}
//               alt="Phone"
//             />
//             <Image
//               className="w-[300px] h-[60px] z-30"
//               id="hero-bg"
//               src={ButtonMain}
//               width={300}
//               height={60}
//               alt="Button Main"
//             />
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <div className="grid md:grid-cols-2 grid-cols-4 gap-4 px-10">
//             <Image
//               className="md:w-[200px] md:h-[150px]  w-20 h-auto"
//               id="hero-bg"
//               src={Texno}
//               width={571}
//               height={319}
//               alt="Hero Bg"
//             />
//             <Image
//               className="md:w-[200px] md:h-[150px]  w-20 h-auto"
//               id="hero-bg"
//               src={Media}
//               width={571}
//               height={319}
//               alt="Hero Bg"
//             />
//             <Image
//               className="md:w-[200px] md:h-[150px]  w-20 h-auto"
//               id="hero-bg"
//               src={Elmakon}
//               width={571}
//               height={319}
//               alt="Hero Bg"
//             />
//             <Image
//               className="md:w-[200px] md:h-[150px]  w-20 h-auto"
//               id="hero-bg"
//               src={Idea}
//               width={571}
//               height={319}
//               alt="Hero Bg"
//             />
//           </div>
//           <Image
//             className="w-heroImgMobile h-heriImgMobile sm:hidden "
//             id="hero-bg"
//             src={"/Assets/Images/HeaderAndHeroImg/heroMobile.png"}
//             width={320}
//             height={160}
//             alt="Hero Bg"
//           />
//         </div>
//         <div className="sm:hidden mt-7 pr-4">
//           <CallBtn namejon={languages[lang].hero.button} />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
