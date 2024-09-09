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
import ProductDetails from "../ProductDetails/ProductDetails";

const env = process.env.NEXT_PUBLIC_TOKEN;
const img = process.env.NEXT_PUBLIC_IMG;

const InfoTovar = () => {
  const chartRef = useRef(null);
  const [product, setProduct] = useState([]);
  const [numberProduct, setNumberProduct] = useState(8);
  const [recentPrice, setRecentPrice] = useState([]);
  const [loader, setLoader] = useState(true);
  const [takeDateGragh, setTakeDateGragh] = useState([]);
  const [xDeatails, setXDetails] = useState(null);

  const [productImageUrl, setProductImageUrl] = useState("");
  const [priceHistoryByStore, setPriceHistoryByStore] = useState({});
  const router = useRouter();

  // const productUrl = `${env}product/getAllPH?product_name=${router.query.product_name}`;

  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    axios
      .get(`${env}product/search/${router.query.product_name}`)
      .then((res) => {
        setLoader(false);
        // console.log(res?.data?.priceHistory);
        setProduct(res?.data);
        setTakeDateGragh(res?.data?.priceHistory);
        setRecentPrice(res?.data?.priceHistory[0]?.price);
        setXDetails(res?.data?.characteristics ? true : false);
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

  const productss = {
    id: 1,
    productName: "Xiaomi redmi note 10 pro india 8/128",
    productImage: "Xiaomi_redmi_note_10_pro_india_8128.jpg",
    categoryName: "Smartfonlar",
    priceHistory: [
      {
        id: 1,
        storeName: "Mediapark",
        productLink:
          "https://mediapark.uz/products/view/smartfon-xiaomi-redmi-note-10-pro-india-8-128-blue-26462",
        price: 4467000,
        date: "2024-08-16T00:00:00.000+05:00",
        product: null,
      },
    ],
    characteristics: {
      id: 112,
      name: "xiaomi redmi note 10",
      details:
        '{"Network": {"Technology": "GSM / HSPA / LTE", "2G bands": "GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2", "3G bands": "HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 - International", "": "1, 3, 5, 8, 40, 41 - India", "4G bands": "1, 2, 3, 4, 5, 7, 8, 20, 28, 38, 40, 41 - International", "Speed": "HSPA, LTE (CA)"}, "Launch": {"Announced": "2021, March 04", "Status": "Available. Released 2021, March 16"}, "Body": {"Dimensions": "160.5 x 74.5 x 8.3 mm (6.32 x 2.93 x 0.33 in)", "Weight": "178.8 g (6.31 oz)", "Build": "Glass front (Gorilla Glass 3), plastic back, plastic frame", "SIM": "Dual SIM (Nano-SIM, dual stand-by)", "": "IP53, dust and splash resistant (market/region dependent)"}, "Display": {"Type": "Super AMOLED, 450 nits (typ), 1100 nits (peak)", "Size": "6.43 inches, 99.8 cm 2  (~83.5% screen-to-body ratio)", "Resolution": "1080 x 2400 pixels, 20:9 ratio (~409 ppi density)", "Protection": "Corning Gorilla Glass 3"}, "Platform": {"OS": "Android 11, upgradable to Android 12, MIUI 14", "Chipset": "Qualcomm SDM678 Snapdragon 678 (11 nm)", "CPU": "Octa-core (2x2.2 GHz Kryo 460 Gold & 6x1.7 GHz Kryo 460 Silver)", "GPU": "Adreno 612"}, "Memory": {"Card slot": "microSDXC (dedicated slot)", "Internal": "64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", "": "UFS 2.2"}}',
    },
  };

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {result.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="mt-2 sm:mt-5 sm:py-2 rounded-xl text-lg border px-4 text-center bg-[#FA7426] text-white"
                    >
                      <Link href={item?.product_link}>
                        {item?.store_name}{" "}
                        <span className=" text-xl ml-2">
                          {formatPrice2(item?.last_price)}
                        </span>{" "}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {xDeatails ? <ProductDetails product={product} /> : null}
        </div>
      )}
    </div>
  );
};

export default InfoTovar;
