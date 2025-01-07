import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// types
import type { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import type { SwiperComponentProps } from "./types";

// external components
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

function SwiperComponent({ images, classNameItem }: SwiperComponentProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsPrevDisabled(swiper.isBeginning);
    setIsNextDisabled(swiper.isEnd);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          renderBullet: (_, className: string) =>
            `<div class="${className} p-1 bg-zinc-600 hover:bg-cyan-500 rounded-full transition-all ${
              className.includes("swiper-pagination-bullet-active") &&
              "bg-cyan-500"
            }"></div>`,
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}${+index}`}>
            <img
              className={twMerge(
                "w-full h-[600px] flex items-center justify-center bg-zinc-700 text-slate-200 rounded-lg object-center object-contain",
                classNameItem
              )}
              src={image}
              alt={`${image}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <button
          type="button"
          ref={prevRef}
          id="swiper-prev"
          className={`transition-opacity rounded-full ${
            isPrevDisabled
              ? "opacity-50"
              : "hover:shadow-lg hover:shadow-cyan-200"
          }`}
          disabled={isPrevDisabled}
        >
          <FaChevronCircleLeft className="w-6 h-6 text-cyan-500 cursor-pointer" />
        </button>
        <button
          type="button"
          ref={nextRef}
          id="swiper-next"
          className={`transition-opacity rounded-full ${
            isNextDisabled
              ? "opacity-50"
              : "hover:shadow-lg hover:shadow-cyan-200"
          }`}
          disabled={isNextDisabled}
        >
          <FaChevronCircleRight className="w-6 h-6 text-cyan-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default SwiperComponent;
