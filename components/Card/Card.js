// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Button from "../ComponetntModuls/button/Button";
// import { Modal } from "../ComponetntModuls/Modal/Modal";
// import { BtnLoader } from "../Spinner/Spinner";
// import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";
// import Heart from "../../public/Assets/Images/ModalImg/heart.svg";
// import ImagePro from "../../public/Assets/Images/news/plisos.png";

// const env = process.env.NEXT_PUBLIC_TOKEN;
// const img = process.env.NEXT_PUBLIC_IMG;

// function Card({
//   subattributes,
//   status_ru,
//   status_en,
//   status_uz,
//   name_ru,
//   name_en,
//   name_uz,
//   image,
//   price,
//   sale,
//   data,
//   id,
//   onAdd,
//   onRemove,
//   product,
//   items,
// }) {
//   const [showModal, setShowModal] = useState(false);
//   const [numberProduct, setNumberProduct] = useState(1);
//   const [modalContent, setModalContent] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [find, setFind] = useState({});
//   const lang = useSelector((state) => state.data.lang);
//   const languages = useSelector((state) => state.data.localization);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   let token = "5463520222:AAFQgcQ7hyUTAYV3ad0YaGTQ_lGIbRZyyxg";
//   let chatId = "636476536";

//   const initialValues = {
//     name: "",
//     number: "",
//     address: "",
//   };

//   const onSubmit = (values, { resetForm }) => {
//     // let fullText = `\u{2705} Name: ${values.name}%0A\u{2705} Phone Number: \u{FF0B}998${values.number} %0A\u{2705} Address: ${values.address}`;
//     // // --- Sent Message for Telegram
//     // axios.post(
//     //   `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
//     // );
//     // setLoading(true);
//     // // --- Create Order
//     // axios
//     //   .post(`${env}orders/create`, {
//     //     order: {
//     //       name: values.name,
//     //       phone: String(`+998${values.number}`),
//     //       address: values.address,
//     //       location: {
//     //         x: 49.9,
//     //         y: 62.2,
//     //       },
//     //       order_number: "0",
//     //       status_id: 3,
//     //     },
//     //     bascet: [
//     //       {
//     //         count: numberProduct,
//     //         product_id: find.id,
//     //       },
//     //     ],
//     //   })
//     //   .then((res) => {
//     //     if (res?.status === 201) {
//     //       setModalContent(true);
//     //     }
//     //   })
//     //   .catch((err) => console.log(err))
//     //   .finally(() => {
//     //     setNumberProduct(1);
//     //     setLoading(false);
//     //     setTimeout(() => {
//     //       setShowModal(false);
//     //       setModalContent(false);
//     //     }, 2000);
//     //   });
//     // values.name = "";
//     // resetForm({ values: "" });
//   };

//   const phoneRegExp = /^[0-9]{9}$/;

//   const formatPrice2 = (price) => {
//     const formattedPrice = parseFloat(price).toFixed(0);
//     return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//   };

//   return (
//     <>
//       <div className="card border rounded-xl  md:w-[232px] hover:scale-105 hover:border-orange-400 sm:w-[200px] w-max-[180px] shadow relative mb-3 mx-2  mt-5">
//         <Link
//           href={{
//             pathname: "/infoProduct",
//             query: { product_name: id },
//           }}
//         >
//           <div className=" md:max-h-[220px] w-max-180 mt-6 md:mt-0">
//             <img
//               className="mt-2 mb-0 mx-auto md:mb-3 w-[160px] h-[160px] object-contain  cursor-pointer"
//               src={`${img}${image}`}
//               alt="product_image"
//               layout="fill"
//               width={280}
//               height={220}
//             />
//           </div>
//           <div className="p-2 md:p-4 md:max-w-[320px] border-t-lineColor border-t-1">
//             <div>
//               {/* <h3 className="text-black-text_color text-sm md:text-lg font-bold leading-5 mb-2 "> */}
//               <h3 className="text-black-text_color text-sm md:text-lg font-bold leading-5 mb-2 h-[2.5rem] sm:h-[3.5rem] overflow-hidden text-ellipsis">
//                 {name_uz}
//               </h3>
//             </div>
//             {/* <p
//             className={`${
//               subattributes.length > 0 ? "" : "h-6"
//             } text-xs md:text-base m-0 mb-2 block leading-22 text-black-black_thin`}
//           >
//             {subattributes[0]?.attribute_ru} {subattributes[4]?.attribute_ru}
//           </p> */}

//             <span className="font-semibold text-sm md:text-lg text-orange-400 block mb-2.5">
//               {formatPrice2(price)} so'm
//             </span>

//             <Link
//               href={{
//                 pathname: "/infoProduct",
//                 query: { product_name: id },
//               }}
//               className={"text-sm md:text-base col-span-4"}
//             >
//               <Button className={"text-sm md:text-base"}>
//                 Batafsil Ma'lumot
//               </Button>
//             </Link>
//           </div>
//         </Link>
//       </div>

//       {/* --- Modal --- */}
//     </>
//   );
// }

// export default Card;

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
import HeartIconFilled from "../../public/Assets/Images/news/heart.png";

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
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  useEffect(() => {
    AOS.init();
  }, []);

  const formatPrice2 = (price) => {
    const formattedPrice = parseFloat(price).toFixed(0);
    return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
            onClick={() => setLiked(!liked)}
            className="absolute top-2 right-2 cursor-pointer z-40"
          >
            <Image
              src={liked ? HeartIconFilled : HeartIcon}
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
          <div className="flex items-center justify-start mb-2">
            <Image src={ReviewIcon} alt="Review" width={18} height={18} />
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
            <span className="text-sm md:text-base font-semibold mx-1">4.9</span>
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
        </div>
      </div>

      {/* --- Modal --- */}
    </>
  );
}

export default Card;
