import React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateTime } from "luxon";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ImageSale from "../../public/Assets/Images/news/fakeSale.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import { useSelector } from "react-redux";
import { Spinner } from "../Spinner/Spinner";

const env = process.env.NEXT_PUBLIC_TOKEN;
const img = process.env.NEXT_PUBLIC_IMG;

const InfoTovar = () => {
  const chartRef = useRef(null);
  const [product, setProduct] = useState([]);
  const [numberProduct, setNumberProduct] = useState(8);
  const [recentPrice, setRecentPrice] = useState([]);
  const [loader, setLoader] = useState(true);

  const [productImageUrl, setProductImageUrl] = useState("");
  const [priceHistoryByStore, setPriceHistoryByStore] = useState({});
  const router = useRouter();

  const productUrl = `${env}/product/getAllPH?product_name=${router.query.product_name}`;
  // nEeeeeeeeeeeeeeeewwwwwwwwwwwwwwwwwwwwww

  // const productId = useSelector((state) => state.data.productId);

  //intex-shop-production.up.railway.app/api/products/getOne/4
  //   https://intex-shop-production.up.railway.app/api/products?page=0&limit=100
  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    axios
      .get(`${env}/product/getAllPH?product_name=${router.query.product_name}`)
      .then((res) => {
        setProduct(res?.data?.object[0]);
        setRecentPrice(res?.data?.object[0]?.priceHistory[0]?.price);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);
  // console.log(productId);

  console.log(product);
  console.log(recentPrice);

  return (
    <div className="">
      {loader ? (
        <div className="h-40 md:w-full md:h-[600px] flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="md:mt-[114px] mt-5 mx-5 md:mx-[130px]">
          <p className="flex items-center sm:text-base text-xs text-black-black_thin">
            <Link
              href={`/`}
              className="text-orange-400"
              // onClick={() => dispatch(setCategoryId(0))}
            >
              Главная
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/news/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            <Link
              href={{
                pathname: "/categoryPage",
                query: { category: product?.category_name },
              }}
              className="text-orange-400"
            >
              {product?.category_name}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/news/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {product?.product_name}
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-5 md:mt-10">
            <div className=" md:col-span-1">
              <div className="border-2 rounded-xl ">
                <img
                  className=" object-contain py-1 w-full h-[200px] md:h-[370px]"
                  src={`${img}${product?.product_image}`}
                  alt="Success_image"
                  width={680}
                  height={370}
                />
              </div>

              {/* <Swiper
              spaceBetween={50}
              slidesPerView={
                product[0]?.image.length > 5 ? 5 : product[0]?.image.length
              }
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {product
                ? product[0]?.image.map((item, i) => {
                    return (
                      <SwiperSlide key={i} className="mt-2.5">
                        <Image
                          key={i}
                          className="object-cover w-[80px] h-[66px] border rounded-md"
                          src={ImageSale}
                          width={80}
                          height={66}
                          alt={"IMG"}
                        />
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper> */}

              {/* <div className="mt-10">
              <h2 className=" text-2xl text-[#000000] font-bold">
                Описание товара
              </h2>
              <p className="mt-6 text-[#464A4D] text-sm leading-7">
                Сборный бассейн Intex Rectangular Frame Pool легко и быстро
                устанавливается. Процесс сборки занимает 30 минут (до наполнения
                водой). Технология Super-Tough придает стенкам бассейна тройную
                прочность. Они сделаны из трех слоев: два слоя плотного винила и
                один — полиэстер для особой прочности. Стальной каркас
                выдерживает большие нагрузки, в нем одновременно могут купаться
                несколько человек
              </p>
              <p className="mt-6 text-[#464A4D] text-sm leading-7">
                У бассейна есть сливной клапан, который присоединяется к
                садовому шлангу. Воду из можно слить в любое удобное место.
                Также есть отверстия для подключения фильтрующего насоса.
              </p>
            </div> */}
              {/* <div className="mt-5 text-sm leading-7">
                <h2 className="font-bold">Характеристики товара</h2>
                <p>
                  {" "}
                  Размеры: <span>220х150х60 см</span>{" "}
                </p>
                <p>
                  Объем: <span>2 282 л</span>
                </p>
                <p>
                  Время сборки: <span>20 мин</span>
                </p>
              </div> */}
            </div>
            <div className="md:col-span-1">
              <h1 className="font-bold text-xl md:text-2xl">
                {product?.product_name}
              </h1>
              {/* <canvas ref={chartRef} className="w-full" /> */}
              <div className=" flex justify-between items-center mt-2 sm:mt-5 sm:py-1 border px-2">
                <div className="flex  py-1 gap-2 items-center">
                  {/* <img
                  src={`https://backendstartup-production-5c5e.up.railway.app/stores/${product?.store_name}`}
                /> */}
                  <h3 className=" text-lg sm:text-xl font-medium">
                    {product?.store_name}
                  </h3>
                  <p className=" text-orange-400 text-lg">
                    {formatPrice2(recentPrice)} so'm
                  </p>
                </div>
                <a
                  href={product?.product_link}
                  className=" py-1 px-4 rounded text-white hover:scale-105 bg-orange-500 text-xs sm:text-base"
                >
                  Sotib olish
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTovar;
