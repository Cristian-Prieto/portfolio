import { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export function Slider({ project, imageFormat }) {
  const [imageSpotLight, setImageSpotlight] = useState(0);
  const manualSlide = () => {
    setImageSpotlight((prevState) => {
      if (prevState === 2) return 0;
      return prevState + 1;
    });
  };
  const backSlide = () => {
    setImageSpotlight((prevState) => {
      if (prevState === 0) return 2;
      return prevState - 1;
    });
  };

  //   useEffect(() => {
  //     const count = setInterval(() => {
  //       manualSlide();
  //     }, 5000);
  //     return () => clearInterval(count);
  //   }, []);

  return (
    <div
      data-aos="fade-in"
      className="group relative flex min-w-[16rem] overflow-hidden"
    >
      <div className="absolute flex justify-between items-center w-full h-full p-4 opacity-0 group-hover:opacity-100 transition duration-300">
        <div onClick={backSlide}>
          <IoIosArrowDropleftCircle className="flex w-full text-6xl md:text-7xl drop-shadow-xl scale-90 hover:scale-110 transition duration-300 text-white" />
        </div>
        <div onClick={manualSlide}>
          <IoIosArrowDroprightCircle className="flex w-full text-6xl md:text-7xl drop-shadow-xl scale-90 hover:scale-110 transition duration-300 text-white" />
        </div>
      </div>
      <img
        src={`images/${project}/${project}${imageSpotLight}.${imageFormat}`}
        alt="shopbix"
        className="w-full object-top object-cover rounded-3xl"
      ></img>

      {/* <Slider project={"shopbix"} imageFormat={"png"} /> */}
    </div>

    // <img
    //   onClick={manualSlide}
    //   src={`images/${project}/${project}${imageSpotLight}.${imageFormat}`}
    //   alt="shopbix"
    //   className="w-full object-top object-cover rounded-3xl"
    // ></img>
  );
}
