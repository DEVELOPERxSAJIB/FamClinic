import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import heroImage from "../../assets/images/hero-image2.jpg";

import aboutHero from "../../assets/images/about-hero.jpg";

import affiliate1 from "../../assets/images/affiliate/affiliate-1.png";
import affiliate2 from "../../assets/images/affiliate/affiliate-2.png";

import notice1 from "../../assets/images/we-notice/notice-1.png";
import notice2 from "../../assets/images/we-notice/notice-2.png";
import notice3 from "../../assets/images/we-notice/notice-3.png";
import notice4 from "../../assets/images/we-notice/notice-4.png";

import TreatmentCards from "../../components/Home/TreatmentCards";
import ScrollToTop from "../../components/ScrollToTop";
import { useTranslation } from "react-i18next";

const weNoticeArray = [
  {
    image: notice1,
  },
  {
    image: notice2,
  },
  {
    image: notice3,
  },
  {
    image: notice4,
  },
];

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <ScrollToTop />
      <div className="container mx-auto max-w-[1380px] md:px-4 px-8 lg:px-10 z-0 relative">
        <div className="hero-wrapper md:pt-20 pt-16">
          <div className="hero-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-col md:flex-row items-center">
            <div className="content-area flex flex-col mb-8 md:mb-0 md:items-start sm:items-start">
              <p className="font-playfair text-[40px] font-normal mb-0 pb-0">
                {t("heroSection.hero_subtitle")}
              </p>
              <h2 className="font-playfair text-[64px] font-semibold mt-0">
                {t("heroSection.hero_title")}
              </h2>
              <p className="max-w-[550px] font-normal text-[18px] mt-8">
                {t("heroSection.hero_description")}
              </p>
              <p className="max-w-[550px] font-normal text-[18px] mt-8">
                {t("heroSection.hero_cta")}
              </p>
              {/* <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center justify-center">
                <Link
                  to="/about"
                  style={{
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                  }}
                  className="py-4 px-6 bg-[#F0DECA] text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
                >
                  Bekijk onze Behandelingen
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-[18px] font-normal group"
                >
                  Maak kennis met ons
                  <div
                    style={{
                      boxShadow:
                        "box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
                    }}
                    className="rounded-full bg-[#F9EEDD] p-3 border border-[#F9EEDD] shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-[#F0DECA] group-hover:text-[#000]"
                  >
                    <FiArrowRight />
                  </div>
                </Link>
              </div> */}
            </div>

            <div className="flex justify-end md:justify-end sm:justify-center">
              <div
                className="image-area"
                style={{
                  // height: "640px",
                  width: "540px",
                  objectFit: "cover",
                }}
              >
                <img
                  src={heroImage}
                  alt="here-woman-image"
                  className="object-cover lg:w-full md:w-full md:h-full sm:w-[75%]"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "10px",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "50px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="treatment-wrapper pt-16 md:pt-24">
          <div className="treatment-section">
            <div className="title flex flex-col gap-5 items-center justify-center">
              <h2 className="text-[50px] font-medium font-playfair text-center">
                <span className="font-playfair text-[32px] font-medium">
                  {t("treatmentSection.subtitle")}
                </span>{" "}
                {t("treatmentSection.title")}
              </h2>
              <p className="md:max-w-[690px] text-center sm:text-[16px] md:text-[18px] font-normal">
                {t("treatmentSection.description")}
              </p>
            </div>
            <TreatmentCards limit={6} />
            <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center justify-center">
              <Link
                to="/treatment"
                style={{
                  borderTopRightRadius: "25px",
                  borderBottomLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                }}
                className="py-4 px-6 bg-[#F0DECA] shadow-md text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
              >
                {t("treatments.seeMore")}
              </Link>
            </div>
          </div>
        </div>

        <div className="why-us-wrapper grid grid-cols-1 md:grid-cols-2 pt-28 md:pt-40 lg:pt-40 gap-8">
          <div className="why-us flex flex-col items-center gap-5 md:items-start">
            <div className="image-section">
              <div className="img-area h-[620px] max-w-[510px] w-full">
                <img
                  className="w-full h-full rounded-[30px] object-cover"
                  src={aboutHero}
                  alt="why-us-image"
                  style={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    borderTopLeftRadius: "50px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="content-section flex flex-col gap-5">
            <div className="content-area">
              <div className="upper-content">
                <div className="title">
                  <span className="font-playfair text-xl md:text-2xl font-medium">
                    {t("whyUs.subTitle1")}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-medium font-playfair">
                    {t("whyUs.title")}
                  </h2>
                </div>
                <div className="desc">
                  <div className="w-full"></div>
                  <ul className="py-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description1.point1.title")}{" "}
                        <span className="font-medium">
                          {t("whyUs.description1.point1.description")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description1.point2.title")}{" "}
                        <span className="font-medium">
                          {t("whyUs.description1.point2.description")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description1.point3.title")}{" "}
                        <span className="font-medium">
                          {t("whyUs.description1.point3.description")}
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description1.point4.title")}{" "}
                        <span className="font-medium">
                          {t("whyUs.description1.point4.description")}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom-content">
                <div className="title">
                  <span className="font-playfair text-xl md:text-2xl font-medium">
                    {t("whyUs.subTitle2")}
                  </span>
                </div>
                <div className="desc">
                  <ul className="py-6 space-y-2">
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description2.point1")}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description2.point2")}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-base font-semibold">
                        {t("whyUs.description2.point3")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="affiliate-partner mt-8 lg:col-span-2 md:mt-6">
              <div
                style={{
                  borderTopRightRadius: "25px",
                  borderTopLeftRadius: "25px",
                  borderBottomRightRadius: "25px",
                  borderBottomLeftRadius: "0",
                }}
                className="bg-[#F0DECA] px-4 py-2 inline-block rounded-t-lg ml-0 md:ml-12"
              >
                <h4 className="font-semibold text-base">
                  {t("whyUs.affiliatedWith")}
                </h4>
              </div>
              <div className="bg-white -mt-4 px-12 py-4 rounded-lg grid grid-cols-2 md:grid-cols-4 flex-wrap items-center shadow lg:w-full lg:justify-between">
                <a className="mr-6 col-span-1 flex justify-center">
                  <img
                    src={affiliate1}
                    alt="Affiliate 1"
                    className="hover:opacity-80"
                  />
                </a>
                <a className="mr-6 col-span-1 flex justify-center p-4">
                  <img
                    src={affiliate2}
                    alt="Affiliate 2"
                    className="hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="we-notice-wrapper pt-28">
          <div className="we-notice">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <div className="flex flex-col gap-10">
                  <div className="title">
                    <h2 className="-mt-3 text-[50px] font-medium font-playfair">
                      {t("weNotice.title")}
                    </h2>
                    <span className="m-0 p-0 font-playfair text-[32px] font-medium">
                      {t("weNotice.subtitle")}
                    </span>{" "}
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex flex-end">
                <Swiper
                  spaceBetween={30}
                  className="mySwiper"
                  slidesPerGroup={1}
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: true }}
                  breakpoints={{
                    640: { slidesPerView: 1 }, // Mobile (1 slide)
                    1024: { slidesPerView: 3 }, // Desktop (3 slides)
                  }}
                >
                  {weNoticeArray.map((item) => (
                    <>
                      <SwiperSlide>
                        <div
                          style={{
                            
                            borderTopRightRadius: "25px",
                            borderBottomLeftRadius: "25px",
                            borderBottomRightRadius: "25px",
                          }}
                          className="bg-white shadow-none sm:shadow-sm overflow-hidden w-full h-full md:h-[90%] px-8 cursor-pointer flex justify-center items-center"
                        >
                          <div className="img-area md:py-0 md:w-[80%] flex justify-center overflow-hidden">
                            <img
                              src={item?.image}
                              className="w-3/4 sm:w-full sm:h-full object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
