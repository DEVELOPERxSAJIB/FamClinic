import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import pricingBanner from "../assets/images/pricing-banner.jpg";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import treatments from "../data/treatment";
import { GoCheckCircleFill } from "react-icons/go";

const Price = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <Link to="/" className="hover:text-[#8d7b67]">
              Home
            </Link>{" "}
            {">"} Contact Page
          </h2>
        </div>
      </div>

      <div className="container max-w-[1380px] px-6 mx-auto py-20">
        <div className="lg:flex items-start justify-between">
          <div className="content-area md:sticky top-20 pt-12 flex flex-col mb-8 md:mb-0">
            <p className="font-playfair text-[20px] sm:text-[30px] md:text-[40px] font-normal">
              Plans for You
            </p>
            <h2 className="font-playfair text-[30px] sm:text-[40px] md:text-[64px] font-semibold">
              Choose your plan
            </h2>
            <p className="max-w-[550px] text-[18px] mt-8">
              We offer a range of flexible pricing plans designed to provide you
              with top-notch treatments at transparent and competitive rates.
            </p>
            <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center">
              <Link to="/about" className="flex items-center gap-2 text-[18px]">
                Maak kennis met ons
                <div className="rounded-full bg-[#F9EEDD] p-3 border border-[#F9EEDD] shadow-lg group-hover:translate-x-2">
                  <FiArrowRight />
                </div>
              </Link>
            </div>
          </div>

          <div className="xl:w-1/2 lg:w-7/12 w-full lg:mt-0 mt-12">
            {treatments.map((item, index) => (
              <div
                key={item.id}
                className="group flex bg-white shadow rounded-lg mt-3"
              >
                <div className="w-2.5 transition-all group-hover:bg-[#8d7b67] rounded-l-md" />
                <div className="w-full">
                  <button
                    className="flex items-center justify-between p-6 w-full"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="title text-start flex flex-col gap-3">
                      <h2 className="text-[18px] font-semibold">{item.name}</h2>
                      <p className={openIndex === index ? "hidden" : "block"}>
                        {item.description.split(" ").slice(0, 3).join(" ")}...
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.subcategory.length === 0 && (
                        <div className="pricing text-center flex flex-row items-center gap-3">
                          <p className="text-[16px] font-medium hidden md:block">
                            Start from :
                          </p>
                          <p className="text-[18px] font-semibold">
                            € {item.price}{" "}
                            {/* <span className="font-normal text-base">
                              | {item.duration}
                            </span> */}
                          </p>
                        </div>
                      )}
                      {openIndex === index ? (
                        <MdKeyboardArrowUp size={22} />
                      ) : (
                        <MdKeyboardArrowDown size={22} />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="p-6">
                      <p className="text-base leading-6">{item.description}</p>

                      {item.benefits.length > 0 && (
                        <div>
                          <h2 className="my-3 text-[14px] font-semibold">
                            Key Benefits :
                          </h2>
                          <ul className="max-w-md space-y-1 list-inside">
                            {item.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-center gap-2"
                              >
                                <GoCheckCircleFill color="#8d7b67" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.subcategory.length > 0 && (
                        <div className="flex flex-col mt-5">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th className="px-6 py-3 text-start text-xs font-semibold uppercase">
                                  Name
                                </th>
                                <th className="px-6 py-3 text-start text-xs font-semibold uppercase">
                                  Min. Time
                                </th>
                                <th className="px-6 py-3 text-end text-xs font-semibold uppercase">
                                  Starting Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.subcategory.map((sub) => (
                                <tr
                                  key={sub.name}
                                  className="odd:bg-white even:bg-gray-100"
                                >
                                  <td className="px-6 py-4 text-sm font-medium">
                                    {sub.name}
                                  </td>
                                  <td className="px-6 py-4 text-sm">
                                    {sub.duration}
                                  </td>
                                  <td className="px-6 py-4 text-end text-sm">
                                    € {sub.price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
