import Image from "next/image";
import Link from "next/link";
import Samsung from "../../public/Assets/Images/news/Samsung.png";
import Apple from "../../public/Assets/Images/news/Apple.png";
import Vivo from "../../public/Assets/Images/news/Vivo.png";
import Xiaomi from "../../public/Assets/Images/news/Xiaomi.png";
import Huawei from "../../public/Assets/Images/news/Huawei.png";
import Oppo from "../../public/Assets/Images/news/Oppo.png";
import React from "react";

const brands = [
    { name: "Samsung", image: Samsung, keyword: "Samsung" },
    { name: "Apple", image: Apple, keyword: "Apple" },
    { name: "Xiaomi", image: Xiaomi, keyword: "Xiaomi" },
    { name: "Huawei", image: Huawei, keyword: "Huawei" },
    { name: "Vivo", image: Vivo, keyword: "Vivo" },
    { name: "Oppo", image: Oppo, keyword: "Oppo" },
];

function PopularCategories() {
    return (
        <div className="md:mx-10 mx-5">
            <h2 className="font-bold text-black-black_thin text-xl md:text-2xl leading-36 sm:ml-6">
                Mashhur Brendlar
            </h2>
            <div className="flex justify-between items-center gap-3 sm:py-4 sm:px-2 overflow-x-auto scrollbar-hide">
                {brands.map((brand) => (
                    <Link
                        key={brand.name}
                        href={{
                            pathname: "/search",
                            query: {keyword: brand.keyword},
                        }}
                        className="flex items-center justify-center gap-3 sm:gap-5 w-full min-w-[150px] sm:min-w-[180px] rounded-xl border p-2 sm:p-3 hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            className="w-auto h-4 sm:h-6 rounded-md"
                            width={40}
                            height={40}
                        />
                        {/*<h4 className="font-semibold text-[#7a7a7a] text-sm sm:text-base">*/}
                        {/*    {brand.name}*/}
                        {/*</h4>*/}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularCategories;
