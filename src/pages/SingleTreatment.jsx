import { useParams } from "react-router-dom";
import singleTreatmentHero from "../assets/images/treatment/single-treatment-page-hero.jpg";
import ScrollToTop from "../components/ScrollToTop";
import treatments from "../data/treatment";
import NotFound from "./NotFound";

const SingleTreatment = () => {
  const { slug } = useParams();

  // find single treatment with slug
  const treatment = treatments.find(
    (treatment) => treatment.slug.trim() === slug.trim()
  );

  return (
    <>
      <ScrollToTop />
      {treatment ? (
        <section className="relative">
          {/* Background Image */}
          <div
            style={{ backgroundImage: `url(${singleTreatmentHero})` }}
            className="absolute h-[36.5rem] w-full top-0 -z-10 bg-cover bg-center"
          />

          {/* Overlay */}
          <div className="absolute h-[36.5rem] w-full top-0 -z-5 bg-[#F0DECA] bg-opacity-70" />

          {/* Content */}
          <div className="relative top-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-playfair text-[#8d7b67] text-[40px] md:text-[64px] text-center font-bold mb-4">
                {treatment?.name}
              </h2>
              <p className="text-xl text-center leading-6">
                {treatment?.description}
              </p>
            </div>
            {/*Grid*/}
            <div className="space-y-8 mb-36 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
              {treatment?.subcategory.length > 0 ? (
                treatment?.subcategory.map((item, index) => (
                  <div
                    key={item.name}
                    className="hover:scale-105 py-4 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  "
                  >
                    <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                      <div className="w-16 h-16 rounded-full bg-[#F0DECA] mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-[#8d7b67]">
                        <span className="w-6 h-6 text-[#8d7b67] transition-all duration-300 group-hover:text-[#F0DECA]">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center">
                        <span className="font-manrope text-4xl font-medium text-gray-900">
                          $75
                        </span>
                        <span className="text-xl ml-3">|&nbsp; 1 hr</span>
                      </div>
                    </div>
                    {/*List*/}
                    <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                      <li className="flex items-center space-x-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8d7b67]" />
                        <span>AI advisor for a day</span>
                      </li>
                      <li className="flex items-center space-x-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8d7b67]" />
                        <span>2 auto tracking</span>
                      </li>
                    </ul>
                    {/* <a
                href="javascript:;"
                className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-indigo-600 group-hover:text-white "
              >
                Purchase Plan
              </a> */}
                    {/*List End*/}
                  </div>
                ))
              ) : (
                <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
                  <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                    <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                      {treatment.name}
                    </h3>
                    <div className="flex items-center justify-center">
                      <span className="font-manrope text-4xl font-medium text-gray-900">
                        €{treatment.price}
                      </span>
                      <span className="text-xl ml-3">|&nbsp; 1 hr</span>
                    </div>
                  </div>
                  {/*List*/}
                  <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900">
                    <li className="flex items-center space-x-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8d7b67]" />
                      <span>AI advisor for a day</span>
                    </li>
                    <li className="flex items-center space-x-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8d7b67]" />
                      <span>2 auto tracking</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/*Grid End*/}
          </div>
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default SingleTreatment;
