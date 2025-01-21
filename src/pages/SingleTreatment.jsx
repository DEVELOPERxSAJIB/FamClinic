import singleTreatmentHero from "../assets/images/treatment/single-treatment-page-hero.jpg";
import ScrollToTop from "../components/ScrollToTop";

const SingleTreatment = () => {
  return (
    <>
    <ScrollToTop />
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
              Treatment Title
            </h2>
            <p className="text-xl text-center leading-6">
              Onze behandelingen in de categorie &quot;Injectables&quot;
            </p>
          </div>
          {/*Grid*/}
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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
            <div className="hover:scale-105 duration-500 group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-lg transition-all px-8 xl:px-12  ">
              <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                {/* <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                  <svg
                    className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </div> */}
                <h3 className="font-manrope text-2xl font-bold my-7 text-center">
                  Gezichtshaar laseren
                </h3>
                <div className="flex items-center justify-center">
                  <span className="font-manrope text-4xl font-medium text-gray-900">
                    $75
                  </span>
                  <span className="text-xl ml-3">
                    |&nbsp; 1 hr
                  </span>
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

          </div>
          {/*Grid End*/}
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-50 h-screen flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Mesotherapie </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-orange-400  text-white rounded-lg  tracking-wider hover:bg-orange-500 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-orange-500 to-orange-400 w-32 h-32  rounded-full shadow-2xl shadow-orange-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-red-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-red-400  text-white rounded-lg  tracking-wider hover:bg-red-500 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-red-500 to-red-400 w-32 h-32  rounded-full shadow-2xl shadow-red-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-cyan-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-cyan-400  text-white rounded-lg  tracking-wider hover:bg-cyan-500 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-cyan-500 to-cyan-400 w-32 h-32  rounded-full shadow-2xl shadow-cyan-400 border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
              <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                <div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Total Ballance
                  </h2>
                  <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">
                    + 150.000 ₭
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">
                    Last Transaction
                  </p>
                  <button className="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
                    Add to cart
                  </button>
                </div>
                <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                  <div>
                    <h1 className="text-white text-2xl">Basic</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTreatment;
