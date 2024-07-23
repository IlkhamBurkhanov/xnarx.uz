"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";
import { setCategoryId } from "../../redux/siteDataReducer";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";
import Pagination from "../Pagination/Pagination";

const env = process.env.NEXT_PUBLIC_TOKEN;

export default function Products({ data }) {
  // const searchParams = useSearchParams();

  // const searchX = searchParams.get("search");
  // console.log(searchX);
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  console.log(router.query.category);
  // const location = useLocation();
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryName = useSelector((state) => state.data.categoryId);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState({});
  const [minValue, set_minValue] = useState(100);
  const [maxValue, set_maxValue] = useState(500);
  const [rotateEl, setRotateEl] = useState(false);
  const [menuCatOpen, setMenuCatOpen] = useState(false);
  const [sortBtn, setSortBtn] = useState(false);
  const [filters, setFilters] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [checked2, setChecked2] = useState(0);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000000 });
  const [filterPrice, setFiltersPrice] = useState(true);
  const [noFound, setNoFound] = useState(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  // --- Get Products
  // useEffect(() => {
  //   setLoader(true);
  //   axios
  //     .get(
  //       `https://intex-shop-production.up.railway.app/api/categories/getCategories`
  //     )
  //     .then((res) => setHeading(res?.data.find((el) => el.id == categoryId)))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoader(false));
  // }, [categoryId]);

  // --- Search
  function searchProduct(inputValue, data) {
    let regex = new RegExp(inputValue, "gi");
    const filterInput = data.filter((product) =>
      product[`name_${lang}`].match(regex)
    );

    return filterInput;
  }

  const handleClick = () => {
    setRotateEl(!rotateEl);
  };
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `${env}product/category/${router?.query?.category}?minPrice=${priceRange.min}&maxPrice=${priceRange.max}&orderType=true&page=${currentPage}&size=15`
      )
      .then((res) => {
        setProducts(res?.data?.object);
        setNoFound(res?.data?.totalElements);

        setTotalPage(res?.data?.totalPages);
        setLoader(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [router, currentPage, filterPrice]);

  const handleClicked = () => {
    setFiltersPrice(!filterPrice);
    setLoader(true);
    console.log(priceRange);
  };

  let arrayItem = [];
  for (let i = 0; i < totalPage; i++) {
    arrayItem.push(i);
  }

  const handleClickItem = (itemy) => {
    setCurrentPage(itemy);
    setLoader(true);
  };
  const generatePagination = () => {
    const pages = [];
    const totalNumbersToShow = 6;
    const firstPageNumbers = 3;
    const lastPageNumbers = 3;

    // Determine the range of pages to show
    if (pageCount <= totalNumbersToShow) {
      for (let i = 0; i < pageCount; i++) {
        pages.push(i);
      }
    } else {
      // Add the first set of pages
      for (let i = 0; i < firstPageNumbers; i++) {
        pages.push(i);
      }

      // Add dots or intermediate page numbers
      if (
        currentPage >= firstPageNumbers &&
        currentPage < pageCount - lastPageNumbers
      ) {
        if (currentPage > firstPageNumbers) {
          pages.push("...");
        }

        const start = Math.max(currentPage - 1, firstPageNumbers);
        const end = Math.min(currentPage + 2, pageCount - lastPageNumbers);

        for (let i = start; i < end; i++) {
          pages.push(i);
        }

        if (currentPage < pageCount - lastPageNumbers - 1) {
          pages.push("...");
        }
      } else {
        pages.push("...");
      }

      // Add the last set of pages
      for (let i = pageCount - lastPageNumbers; i < pageCount; i++) {
        pages.push(i);
      }
    }

    return pages;
  };
  const [pageCount] = useState(totalPage);

  const pages = generatePagination();
  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container mx-auto w-full px-5">
        <div className="">
          <p className="flex items-center text-2xl font-semibold text-black-black_thin">
            {router?.query?.category}
          </p>

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
              {loader ? (
                <div className="w-full h-20 md:w-[900px] md:h-[200px] flex items-center justify-center">
                  <Spinner />
                </div>
              ) : noFound == 0 ? (
                <div className="w-full  sm:col-span-3 sm:mt-10 mt-2 rounded-md">
                  <p className=" bg-gray-300   sm:text-lg font-medium py-2 px-5 rounded-md">
                    Sizning soʻrovingiz boʻyicha hech narsa topilmadi
                  </p>
                </div>
              ) : (
                <div className="sm:col-span-3 w-full grid grid-cols-2 gap-2 justify-center items-center  sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-5 mt-3">
                  {products?.map((el) => {
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
          {/* {totalPage > 1 ? (
            <div className=" flex justify-center mt-5">
              {arrayItem.map((itemy, index) => {
                return (
                  <button
                    key={itemy}
                    onClick={() => handleClickItem(itemy)}
                    className={`${
                      currentPage == itemy ? "bg-orange-400" : "bg-gray-300"
                    } text-white py-1 px-2 border`}
                  >
                    <a href="#">{itemy + 1}</a>
                  </button>
                );
              })}
            </div>
          ) : null} */}
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
