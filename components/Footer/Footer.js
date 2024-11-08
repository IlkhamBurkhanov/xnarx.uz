import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";

const env = process.env.NEXT_PUBLIC_TOKEN;

const Footer = () => {
  const [info, setInfo] = useState([]);
  const [loader, setLoader] = useState(false);

  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);

  let URL1 = `${env}social-networks`;
  let URL2 = `${env}sites`;
  const site = [
    {
      name: "Instagram",
      id: 1,
      link: "https://www.instagram.com/xnarx.uz?igsh=MWF2bm5vNG1tbHAxcw==",
    },
    {
      name: "Telegram",
      id: 2,
      link: "https://t.me/xnarxuz",
    },
    {
      name: "YouTube",
      id: 3,
      link: "https://youtube.com/@xnarx-user?si=DT-iEn9jcK4ov2Ne",
    },
    {
      name: "Linkedin",
      id: 4,
      link: "https://www.linkedin.com/",
    },
  ];
  // const promise1 = axios.get(URL1);
  // const promise2 = axios.get(URL2);

  // useEffect(() => {
  //   setLoader(true);
  //   Promise.all([promise1, promise2])
  //     .then((values) => {
  //       setSite(values[0]?.data);
  //       setInfo(values[1]?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoader(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <footer
      id="contact"
      className="w-full sm:mt-10 mt-5  bg-gray-bg_main pt-11"
    >
      <div className="max-w-container w-full mx-auto pt-14 px-5 ">
        <div className="sm:grid sm:grid-cols-2 sm:gap-y-10 tablet:flex tablet:justify-between pb-4 ">
          <div className="max-w-281 w-full">
            <Link href={"/"}>
              <Image
                className="w-[164px] h-[50px]"
                src={`/Assets/Images/HeaderAndHeroImg/logos1.png`}
                width={164}
                height={16}
                alt="site_logo"
              />
            </Link>
            <p className="mt-7 text-base text-gray-foot hidden mini_phone:block">
              {languages[lang].footer.text}
            </p>
            <div className="max-w-237 px-1 mt-7 flex justify-between ">
              {loader ? (
                <div className="flex mx-auto">
                  <Spinner />
                </div>
              ) : (
                site?.map((item) => (
                  <Link key={item.id} href={item.link} target="blank">
                    <Image
                      src={
                        item.name === "Instagram"
                          ? `/Assets/Images/FooterSvg/Instagram.svg`
                          : item.name === "Telegram"
                          ? `/Assets/Images/FooterSvg/Telegram.svg`
                          : item.name === "YouTube"
                          ? `/Assets/Images/FooterSvg/YouTube.svg`
                          : `/Assets/Images/FooterSvg/Linkedin.svg`
                      }
                      className="w-9 h-9 hover:scale-105 transition-all"
                      width={36}
                      height={36}
                      alt="link"
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
          <div className=" mt-6 sm:mt-0 hidden mini_phone:block"></div>
          <div className="max-w-237 mt-6 sm:mt-0 hidden mini_phone:block"></div>
          {loader ? (
            <div className="flex mx-auto mt-10">
              <Spinner />
            </div>
          ) : (
            info?.map((item) => (
              <div key={item?.id} className=" mt-6 sm:mt-0">
                <p className="text-black-black_dark font-bold text-lg">
                  {languages[lang].footer.adress.addressName}
                </p>
                <div className=" h-135 tablet:h-153 mt-4 tablet:mt-6 flex flex-col justify-between ">
                  <div className="flex items-center max-w-290">
                    <Image
                      src={`/Assets/Images/FooterSvg/Location.svg`}
                      className="w-5 h-6"
                      width={18}
                      height={23}
                      alt="Location"
                    />
                    <address className="pl-1 text-sm  text-gray-foot not-italic">
                      {lang === "ru"
                        ? item?.address_ru
                        : lang === "en"
                        ? item?.address_en
                        : item?.address_uz}
                    </address>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={`/Assets/Images/FooterSvg/Phone.svg`}
                      className="w-5 h-5"
                      width={18}
                      height={19}
                      alt="Phone"
                    />
                    <a
                      href="tel:+998901288182"
                      className="text-sm pl-1 text-gray-foot"
                    >
                      {item?.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={`/Assets/Images/FooterSvg/Message.svg`}
                      className="w-5 h-5"
                      width={18}
                      height={19}
                      alt="Message"
                    />
                    <a
                      href="mailto:Intex@gmail.com"
                      className="text-sm pl-1 text-gray-foot"
                    >
                      {item?.email}
                    </a>
                  </div>
                  <div className="flex">
                    <Image
                      src={`/Assets/Images/FooterSvg/Clock.svg`}
                      className="w-5 h-5"
                      width={18}
                      height={19}
                      alt="Clock"
                    />
                    <p className="text-sm pl-1 text-gray-foot">
                      {lang === "ru"
                        ? item.work_ru
                        : lang === "en"
                        ? item.work_en
                        : item.work_uz}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <hr className="w-full bg-gray-200 h-0.5" />
          <p className="text-gray-foot pt-4 pb-10 sm:py-7">
            {languages[lang].footer_text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
