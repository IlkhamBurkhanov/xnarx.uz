import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

// Import icons
import StarIcon from "../../public/Assets/Images/news/star.png";
import ReviewIcon from "../../public/Assets/Images/news/review.png";
import HeartIcon from "../../public/Assets/Images/news/heart.png";
import HeartLiked from "../../public/Assets/Images/news/HeartLiked.svg";

// import HeartIconFilled from "../../public/Assets/Images/news/heart.png";

const img = process.env.NEXT_PUBLIC_IMG;

function Card({
  subattributes,
  status_ru,
  status_en,
  status_uz,
  name_ru,
  name_en,
  name_uz,
  image,
  price,
  sale,
  data,
  id,
  onAdd,
  onRemove,
  product,
  items,
}) {
  const [liked, setLiked] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  useEffect(() => {
    AOS.init();
  }, []);

  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    const storedLikedProducts =
      JSON.parse(localStorage.getItem("LikedProducts")) || [];
    setLikedProducts(storedLikedProducts);
  }, [likedProducts]);

  const handleLikeToggle = () => {
    const isLiked = likedProducts.some(
      (likedProduct) => likedProduct.id === id
    );

    let updatedLikedProducts;

    if (isLiked) {
      // If already liked, remove it from the list
      updatedLikedProducts = likedProducts.filter(
        (likedProduct) => likedProduct.id !== id
      );
    } else {
      // If not liked, add it to the list
      updatedLikedProducts = [...likedProducts, { name, image, price, id }];
    }

    // Update the state and localStorage with the complete array (old + new liked product)
    setLikedProducts(updatedLikedProducts);
    localStorage.setItem("LikedProducts", JSON.stringify(updatedLikedProducts));
  };

  const isProductLiked = () => {
    return likedProducts.some((likedProduct) => likedProduct.id === id);
  };
  return (
    <>
      <div
        className="card border rounded-xl  hover:scale-105 hover:border-orange-400 shadow relative mb-3 mx-2 mt-5  transition-transform duration-300"
        style={{ width: "100%", maxWidth: "232px" }}
      >
        <div className="relative">
          {/* Like Button */}
          <div
            onClick={handleLikeToggle}
            className="absolute top-2 right-2 cursor-pointer z-40"
          >
            <Image
              className="w-6 h-6"
              src={isProductLiked() ? HeartLiked : HeartIcon}
              alt="Like"
              width={24}
              height={24}
            />
          </div>
          {/* Product Image */}
          <Link
            href={{
              pathname: "/infoProduct",
              query: { product_name: id },
            }}
          >
            <div className="md:max-h-[220px] w-full mt-6 md:mt-0">
              <img
                className="mt-2 mb-0 mx-auto md:mb-3 w-[160px] h-[160px] object-contain cursor-pointer"
                src={`${img}${image}`}
                alt="product_image"
                layout="fill"
                width={280}
                height={220}
              />
            </div>
          </Link>
        </div>

        <div className="p-2 md:p-4 md:max-w-[320px]  border-t-lineColor border-t-1">
          {/* Review Section */}
          <Link
            href={{
              pathname: "/infoProduct",
              query: { product_name: id },
            }}
          >
            <div className="flex items-center justify-start mb-2">
              <Image
                className="w-[18px] h-[18px]"
                src={ReviewIcon}
                alt="Review"
                width={18}
                height={18}
              />
              <span className="text-sm md:text-base text-[#696969] mx-1">
                Reviews
              </span>
              <Image
                className="mb-0.5"
                src={StarIcon}
                alt="Star"
                width={14}
                height={14}
              />
              <span className="text-sm md:text-base font-semibold mx-1">
                4.9
              </span>
              <span className="text-sm md:text-base  text-gray-600">(156)</span>
            </div>

            {/* Product Name */}
            <h3 className="text-black-text_color text-sm md:text-lg font-bold leading-5 mb-2 h-[2.5rem] sm:h-[3.5rem] overflow-hidden text-ellipsis">
              {name_uz}
            </h3>

            {/* Product Price */}
            <span className="font-semibold text-sm md:text-xl text-orange-400 block mb-2.5">
              {formatPrice2(price)} so'm
            </span>
          </Link>
        </div>
      </div>

      {/* --- Modal --- */}
    </>
  );
}

export default Card;
