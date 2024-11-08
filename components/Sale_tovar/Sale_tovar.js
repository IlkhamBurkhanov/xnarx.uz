
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../ComponetntModuls/button/Button";
import { useSelector } from "react-redux";
import { Spinner } from "../Spinner/Spinner";
import Card from "../Card/Card";
import {useGetAllQuery} from "../../hooks";
import {get} from "lodash";

const env = process.env.NEXT_PUBLIC_TOKEN;

const Sale_nov = ({ cartItems, onAdd, onRemove }) => {
  const [loader, setLoader] = useState(false);
  const [tovar, setTovar] = useState([]);
  const [productSize, setProductSize] = useState(10);
  const [showMore, setShowMore] = useState(false);

  const lang = useSelector((state) => state.data.lang);

  const { data, isLoading } = useGetAllQuery({
    key: "premium-tovar",
    url: "product/category/Smartfonlar?",
    params: {
      minPrice: 10000000,
      maxPrice: 100000000,
      orderType: true,
      page:0,
      size: productSize,
    },
  });

  const handleShowMore = () => {
    setLoader(true);
    if (showMore) {
      setProductSize(productSize - 10);
    } else {
      setProductSize(productSize + 10);
    }
    setShowMore(!showMore);
  };

  return (
    <section id="populyar" className="sm:mx-2 bg-white pl-4 mt-5 md:pt-8">
      <h2 className="font-bold text-black-black_thin text-xl md:text-2xl leading-36 pl-3 md:pl-14">
        Premium Smartfonlar
      </h2>
      <div className="sm:mx-10 mx-auto">
        {loader ? (
          <div className="w-full h-[80px] md:h-[200px] flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-5 gap-2 max-w-screen-xl">
              {get(data, "data.data.object", [])?.map((el, index) => (
                <Card
                  key={el?.id}
                  id={el?.id}
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
                  product={el}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  items={cartItems.find((x) => x.id === el.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {tovar.length > 0 && (
        <div className="flex justify-end mt-4 text-lg font-semibold mr-10 md:mx-20 hover:text-[#ec5f0e] px-5">
          <button onClick={handleShowMore}>
            {showMore ? "Kamroq" : "Hammasi"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Sale_nov;
