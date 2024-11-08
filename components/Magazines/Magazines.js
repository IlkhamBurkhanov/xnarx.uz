import TexnoLogo from "../../public/Assets/Images/Stores/texnomart-logo.png";
import IdeaLogo from "../../public/Assets/Images/Stores/idea-logo.png";
import MediaLogo from "../../public/Assets/Images/Stores/mediapark-logo.png";
import ElmakonLogo from "../../public/Assets/Images/Stores/elmakon-logo.png";
import Image from "next/image";
function Magazines() {
  return (
    <>
      <div className="mt-10 sm:mt-7 md:mt-[85px] sm:mx-14 mx-5 ">

        <div className="flex justify-around items-center lg:gap-10 sm:gap-5 gap-2">
          <div
              className=" w-full border shadow-md pt-1 pb-2  bg-yellow-400  sm:bg-white  sm:px-4 px-2 rounded-lg">
            <Image
                  className="w-16 h-4 sm:w-auto mx-auto sm:h-3.5"
                  src={TexnoLogo}
                  width={500}
                  height={500}
                  alt="Texnomart*"
              />
            </div>
            <div className="border w-full shadow-md  py-1.5 px-4 rounded-lg">
              <Image
                  className="h-3.5 w-[40px] sm:w-auto mx-auto sm:h-4"
                  src={IdeaLogo}
                  width={500}
                  height={500}
                  alt="Texnomart*"
              />
            </div>
            <div className="border w-full pt-1.5 pb-1 shadow-md px-4 rounded-lg">
              <Image
                  className="sm:w-auto mx-auto sm:h-4"
                  src={ElmakonLogo}
                  width={500}
                  height={500}
                  alt="Texnomart*"
              />
            </div>
            <div className="border  w-full shadow-md py-2 px-4 rounded-lg">
              <Image
                  className="h-3 sm:w-auto mx-auto sm:h-3"
                  src={MediaLogo}
                  width={500}
                  height={500}
                  alt="Texnomart*"
              />
            </div>
          </div>

        </div>
      </>
      );
      }

      export default Magazines;
