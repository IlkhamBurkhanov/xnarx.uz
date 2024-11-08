"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { searchPageNumber } from "../../redux/siteDataReducer";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";
import {useGetAllQuery} from "../../hooks";

const env = process.env.NEXT_PUBLIC_TOKEN;

export default function SearchProduct({}) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const search = useSelector((state) => state.data.search);
  const currentPageNumber = useSelector((state) => state.data.pageNumber);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryName = useSelector((state) => state.data.categoryId);
  const [heading, setHeading] = useState({});
  const [minValue, set_minValue] = useState(100);
  const [maxValue, set_maxValue] = useState(500);
  const [rotateEl, setRotateEl] = useState(false);
  const [menuCatOpen, setMenuCatOpen] = useState(false);
  const [sortBtn, setSortBtn] = useState(false);
  const [filters, setFilters] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(currentPageNumber);
  const [checked2, setChecked2] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000000 });
  const [filterPrice, setFiltersPrice] = useState(true);
  const dispatch = useDispatch();


  const { data, isLoading } = useGetAllQuery({
    key: "search-product",
    url: "product/search?",
    params: {
      name: router.query.keyword,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      orderType: true,
      page:currentPage,
      size: 15,
    },
  });


  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const formatPrice = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " s'om";
  };
  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  const handlePriceChange = (event, type) => {
    const value = parseInt(event.target.value.replace(/\./g, ""), 10) || 0;
    setPriceRange((prev) => ({ ...prev, [type]: value }));
  };

  useEffect(() => {
    setLoader(true);
    http: axios
      .get(
        `${env}product/search?name=${router.query.keyword}&minPrice=${priceRange.min}&maxPrice=${priceRange.max}&orderType=True&page=${currentPage}&size=15`
      )
      .then((res) => {
        setProducts(res?.data?.object);
        setTotalPage(res?.data?.totalPages);
        setLoader(false);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, [router, currentPage, filterPrice]);

  const handleClicked = () => {
    setFiltersPrice(!filterPrice);
    setLoader(true);
    // console.log(priceRange);
  };

  let arrayItem = [];
  for (let i = 0; i < totalPage; i++) {
    arrayItem.push(i);
  }

  const handleClickItem = (itemy) => {
    setCurrentPage(itemy);
    console.log(itemy);
    dispatch(searchPageNumber(itemy));

    setLoader(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  console.log(currentPage, currentPageNumber);
  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container mx-auto w-full px-5">
        <div className="">
          <div className="flex items-center gap-2 ">
            <h4 className=" sm:text-2xl font-semibold text-black-black_thin">
              Qidiruv:
            </h4>
            <p className="flex items-center  sm:text-2xl font-semibold text-gray-300">
              {router?.query?.keyword}
            </p>
          </div>

          <div className="">
            <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5  text-[#464A4D]">
              <div className=" sm:col-span-1 sm:mt-8 mt-1  ">
                <div className="shadow-card_shadow">
                  {" "}
                  <div className="flex justify-between border-b-1 sm:p-4 px-2 py-1">
                    <h1 className=" font-bold sm:text-lg">Filter</h1>
                  </div>
                  <div className="mx-4 mt-4 border-b-1 pb-4 ">
                    <h2 className=" font-bold sm:text-lg">Narx</h2>

                    <p className=" sm:text-sm text-xs px-2 mt-2">dan</p>
                    <input
                      type="text"
                      value={formatPrice2(priceRange.min)}
                      onChange={(e) => handlePriceChange(e, "min")}
                      className="sm:p-2.5 py-1 px-2 text-sm sm:text-base w-full outline-none rounded-md bg-[#F2F2F2]"
                    />
                    <p className=" sm:text-sm text-xs px-2 mt-2">gacha</p>
                    <input
                      type="text"
                      value={formatPrice2(priceRange.max)}
                      onChange={(e) => handlePriceChange(e, "max")}
                      className="sm:p-2.5 py-1 px-2 text-sm sm:text-base w-full outline-none rounded-md bg-[#F2F2F2]"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleClicked}
                      className="sm:px-20  text-center sm:py-3 my-4 sm:my-8 w-full mx-5 py-1.5 bg-orange-400 rounded-xl text-white text-sm sm:text-lg"
                    >
                      Qidirish
                    </button>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="w-full h-20 md:w-[900px] md:h-[200px]  flex items-center justify-center">
                  <Spinner />
                </div>
              ) : data?.data?.object?.length == 0 ? (
                <div className="w-full  sm:col-span-3 sm:mt-10 mt-2 rounded-md">
                  <p className=" bg-gray-300   sm:text-lg font-medium py-2 px-5 rounded-md">
                    Sizning soʻrovingiz boʻyicha hech narsa topilmadi
                  </p>
                </div>
              ) : (
                <div className="sm:col-span-3 w-full grid grid-cols-2 justify-center items-center sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-5 mt-3">
                  {products.map((el) => {
                    return (
                      <Card
                        key={el?.id}
                        id={el?.id}
                        data={data}
                        image={el?.product_image}
                        attributes={el?.attributes}
                        subattributes={el?.subattributes}
                        status_ru={el?.status_ru}
                        status_en={el?.status_en}
                        status_uz={el?.status_uz}
                        name_ru={el?.name_ru}
                        name_en={el?.name_en}
                        name_uz={el?.name}
                        price={el?.price}
                        sale={el?.discount_price}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            handleClickItem={handleClickItem}
          />
        </div>
      </div>
    </section>
  );
}
