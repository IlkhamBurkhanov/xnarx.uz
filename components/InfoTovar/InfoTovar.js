import React from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateTime } from "luxon";
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

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
  const [takeDateGragh, setTakeDateGragh] = useState([]);

  const [productImageUrl, setProductImageUrl] = useState("");
  const [priceHistoryByStore, setPriceHistoryByStore] = useState({});
  const router = useRouter();

  const productUrl = `${env}product/getAllPH?product_name=${router.query.product_name}`;

  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    axios
      .get(`${env}product/search?productId=${router.query.product_name}`)
      .then((res) => {
        setLoader(false);
        // console.log(res?.data?.priceHistory);
        setProduct(res?.data);
        setTakeDateGragh(res?.data?.priceHistory);
        setRecentPrice(res?.data?.priceHistory[0]?.price);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [router]);
  // console.log(productId);
  function getColor(storeName) {
    switch (storeName) {
      case "Mediapark":
        return "#FF0000"; // Red
      case "Idea":
        return "#FFC0CB"; // Pink
      case "Texnomart":
        return "#FFFF00"; // Yellow
      case "Elmakon":
        return "#0000FF"; // Blue
      default:
        return "#000000"; // Default color (Black)
    }
  }

  // LABELS
  const allDates = Array.from(
    new Set(product?.priceHistory?.map((item) => item.date.split("T")[0]))
  ).sort();
  // console.log(allDates);

  // Resulting labels
  const labels = allDates;
  // console.log(labels);

  // Group data by storeName
  const datasets = Array.from(
    new Set(product?.priceHistory?.map((item) => item.storeName))
  ).map((storeName) => ({
    label: storeName,
    data: labels.map((label) => {
      const historyItem = product?.priceHistory?.find(
        (item) =>
          item.date.split("T")[0] === label && item.storeName === storeName
      );
      return historyItem ? historyItem.price : null;
    }),
    backgroundColor: getColor(storeName),
    borderColor: getColor(storeName),
    fill: false,
    tension: 0.4,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  // console.log(takeDateGragh);

  const latestPrices = new Map();

  product?.priceHistory?.forEach((item) => {
    const existing = latestPrices.get(item.storeName);
    if (!existing || new Date(item.date) > new Date(existing.date)) {
      latestPrices.set(item.storeName, item);
    }
  });

  // Transform the map into the desired array format
  const result = Array.from(latestPrices?.values()).map((item) => ({
    store_name: item.storeName,
    last_price: item.price,
    product_link: item.productLink,
  }));

  // console.log(result);

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
              Bosh sahifa
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
                query: { category: product?.categoryName },
              }}
              className="text-orange-400"
            >
              {product?.categoryName}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/news/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {product?.productName}
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-5 md:mt-10">
            <div className=" md:col-span-1">
              <div className="border-2 rounded-xl ">
                <img
                  className=" object-contain py-1 w-full h-[200px] md:h-[370px]"
                  src={`${img}${product?.productImage}`}
                  alt="Success_image"
                  width={680}
                  height={370}
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <h1 className="font-bold text-xl md:text-2xl">
                {product?.productName}
              </h1>
              {/* <canvas ref={chartRef} className="w-full" /> */}

              <Line data={data} options={options}></Line>

              {result.map((item, key) => {
                return (
                  <div
                    key={key}
                    className=" flex justify-between items-center mt-2 sm:mt-5 sm:py-1 border px-2"
                  >
                    <div className="flex  py-1 gap-2 items-center">
                      {/* <img
                  src={`https://backendstartup-production-5c5e.up.railway.app/stores/${product?.store_name}`}
                /> */}
                      <h3 className=" text-lg sm:text-xl font-medium">
                        {/* {product?.store_name} */}
                        {item?.store_name}
                      </h3>
                      <p className=" text-orange-400 text-lg">
                        {formatPrice2(item?.last_price)} so'm
                      </p>
                    </div>
                    <a
                      href={item?.product_link}
                      className=" py-1 px-4 rounded text-white hover:scale-105 bg-orange-500 text-xs sm:text-base"
                    >
                      Sotib olish
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTovar;
