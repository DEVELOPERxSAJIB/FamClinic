import "../stylesheet.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import testimonials from "../../data/testimonial";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const [t] = useTranslation("global");

  return (
    <div className="mx-auto">
      <div
        className="elfsight-app-9a2d98f7-e292-4e70-a654-87a2de121ed5 mb-12"
        data-elfsight-app-lazy
      />
      <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
        <div className="w-full lg:w-3/5">
          {/*Slider wrapper*/}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            slidesPerGroup={1}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="group bg-white shadow-sm rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <div className="image-area h-16 w-16 rounded-full">
                      <img
                        className="rounded-full object-cover w-full h-full"
                        src={item.avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h5 className="font-medium text-[18px] transition-all duration-500">
                        {t(`testimonials.${item.key}.name`)}
                      </h5>
                      <span className="text-sm leading-6 text-gray-600 font-semibold">
                        {t(`testimonials.${item.key}.positionAndCompany`)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="font-normal min-h-24 text-[16px] sm:text-[18px] mt-8 max-w-lg">
                    {t(`testimonials.${item.key}.review`)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="content-area flex flex-col flex-1 md:w-full mb-4 md:mb-0 items-start md:items-start">
            <p className="font-playfair text-[32px] sm:text-[32px] font-normal mb-0 pb-0">
              {t("testimonials.subtitle")}
            </p>
            <h2 className="pt-6 font-playfair text-[32px] sm:text-[40px] md:text-[40px] font-semibold mt-0">
              {t("testimonials.title")}
            </h2>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border-2 border-solid border-[#F0DECA] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#F0DECA]"
              data-carousel-prev
            >
              <MdArrowBack />
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border-2 border-solid border-[#F0DECA] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#F0DECA]"
              data-carousel-next
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
