import ScrollToTop from "../components/ScrollToTop";
import pricingBanner from "../assets/images/pricing-banner.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import treatments from "../data/treatment";

const Price = () => {
  return (
    <>
      <ScrollToTop />
      <div className="contact-top mx-auto">
        <div className="image max-w-full h-56 relative">
          <img
            className="h-full w-full object-cover"
            src={pricingBanner}
            alt="hero-image"
          />
          <h2 className="absolute inset-0 flex gap-3 items-center justify-center text-[#8d7b67] text-xl font-bold">
            <Link
              to={"/"}
              className="translate-all ease-in duration-300 hover:text-[#8d7b67] hover:duration-300 hover:ease-out"
            >
              Home{" "}
            </Link>{" "}
            {">"} Contact Page
          </h2>
        </div>
      </div>
      <div className="container max-w-[1380px] px-6 mx-auto py-20">
        <div className="lg:flex items-start justify-between">
          <div className="content-area sticky top-20 pt-4 flex flex-col mb-8 md:mb-0 md:items-start sm:items-start">
            <p className="font-playfair text-[40px] font-normal mb-0 pb-0">
              Plans for You
            </p>
            <h2 className="font-playfair text-[64px] font-semibold mt-0">
              Choose your plan
            </h2>
            <p className="max-w-[550px] font-normal text-[18px] mt-8">
              We offer a range of flexible pricing plans designed to provide you
              with top-notch treatments at transparent and competitive rates.
              Select the plan that works best for you and experience the highest
              standard of care tailored to your needs.
            </p>
            <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center justify-center">
              <Link
                to="/about"
                className="flex items-center gap-2 text-[18px] font-normal group"
              >
                Maak kennis met ons
                <div className="rounded-full bg-[#F9EEDD] p-3 border border-[#F9EEDD] shadow-lg transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-[#F0DECA] group-hover:text-[#000]">
                  <FiArrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 "
            role="list"
          >
            {treatments?.map((item) => (
              <Link
                to={`/treatment/${item.slug}`}
                key={item.id}
                role="listitem"
                className="bg-white group cursor-pointer shadow rounded-lg mt-3 flex relative"
              >
                <div className="w-2.5 h-auto transition-all ease-in duration-300 group-hover:bg-[#8d7b67] rounded-tl-md rounded-bl-md" />
                <div className="w-full p-8">
                  <div className="md:flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold leading-6">
                      {item?.name}
                    </h2>
                    <p className="text-[18px] md:mt-0 mt-4 font-semibold leading-6">
                      € {item?.price}
                      <span className="font-normal text-base">/ hr</span>
                    </p>
                  </div>
                  <p className="md:w-80 text-base leading-6 mt-4">
                    {item?.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
