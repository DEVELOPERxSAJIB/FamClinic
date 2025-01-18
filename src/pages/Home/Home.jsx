import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { MdArrowCircleDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import heroImage from "../../assets/images/hero-image-woman.png";

import treatment1 from "../../assets/images/treatment/treatment-1.jpg";
import treatment2 from "../../assets/images/treatment/treatment-2.jpg";
import treatment3 from "../../assets/images/treatment/treatment-3.jpg";

import whyus from "../../assets/images/whyus.jpg";

import affiliate1 from "../../assets/images/affiliate/affiliate-1.png";
import affiliate2 from "../../assets/images/affiliate/affiliate-2.png";
import affiliate3 from "../../assets/images/affiliate/affiliate-3.png";
import affiliate4 from "../../assets/images/affiliate/affiliate-4.png";

import notice1 from "../../assets/images/we-notice/notice-1.png";
import notice2 from "../../assets/images/we-notice/notice-2.png";
import notice3 from "../../assets/images/we-notice/notice-3.png";
import notice4 from "../../assets/images/we-notice/notice-4.jpg";
import notice5 from "../../assets/images/we-notice/notice-5.png";
import notice6 from "../../assets/images/we-notice/notice-6.png";
import notice7 from "../../assets/images/we-notice/notice-7.png";

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
  {
    image: notice5,
  },
  {
    image: notice6,
  },
  {
    image: notice7,
  },
];

const Home = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 z-0 relative md:px-10">
        <div className="hero-wrapper py-12">
          <div className="hero-section flex flex-col md:flex-row items-center">
            {/* Content Area */}
            <div className="content-area flex flex-col flex-1 md:w-1/2 mb-8 md:mb-0 md:items-start sm:items-start">
              <p className="font-playfair text-[40px] font-normal mb-0 pb-0">
                Welkom bij
              </p>
              <h2 className="font-playfair text-[64px] font-semibold mt-0">
                FamClinic
              </h2>
              <p className="max-w-[550px] font-normal text-[18px] mt-8">
                waar schoonheid, welzijn en zelfvertrouwen samenkomen. Vanaf het
                moment dat je onze deuren binnenstapt, zul je de perfecte mix
                van professionaliteit en warmte ervaren. Ons team is hier om je
                natuurlijke schoonheid te verbeteren en je te helpen je op je
                best te voelen. Of je nu op zoek bent naar een subtiele glow-up
                of een volledige schoonheidsverandering, wij zijn er om het voor
                je te realiseren
              </p>
              <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center justify-center">
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
              </div>
            </div>

            {/* Image Area */}
            <div
              style={{
                height: "540px",
                width: "650px",
                objectFit: "cover",
              }}
              className="image-area flex-1 flex justify-end md:w-1/2 md:justify-end sm:justify-center"
            >
              <img
                src={heroImage}
                alt="here-woman-image"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="treatment-wrapper py-12">
          <div className="treatment-section">
            <div className="title flex flex-col gap-5 items-center">
              <h2 className="text-[50px] font-medium font-playfair">
                <span className="font-playfair text-[32px] font-medium">
                  Onze
                </span>{" "}
                Behandelingen
              </h2>
              <p className="max-w-[690px] text-center text-[18px] font-normal">
                Aphrodite staat bekend om haar hoge diversiteit aan kwalitatieve
                behandelingen, specialistische vakkennis en hoogwaardige
                producten en apparatuur.
              </p>
            </div>
            <div className="all-treatments py-12">
              <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-2">
                <div className="card">
                  <button className="mail">
                    <MdArrowCircleDown size={25} color="#8D7B67" />
                  </button>
                  <div className="profile-pic">
                    <img src={treatment1} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">Lasertherapie</span>
                      <span className="desc">
                        Onze behandelingen in de categorie
                        &quot;Injectables&quot;
                      </span>
                      <ul className="pt-2">
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Gezichtshaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Okselhaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Bikinilijn laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Lichaamshaar laseren</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-bottom">
                      <div className="social-links-container">
                        Lasertherapie
                      </div>
                      <Link
                        to={"/"}
                        className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                      >
                        Meer behandelingen
                        <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="mail">
                    <MdArrowCircleDown size={25} color="#8D7B67" />
                  </button>
                  <div className="profile-pic">
                    <img src={treatment2} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">Mesoestetic</span>
                      <span className="desc">
                        Onze behandelingen in de categorie
                        &quot;Injectables&quot;
                      </span>
                      <ul className="pt-2">
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Gezichtshaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Okselhaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Bikinilijn laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Lichaamshaar laseren</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-bottom">
                      <div className="social-links-container">Mesoestetic</div>
                      <Link
                        to={"/"}
                        className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                      >
                        Meer behandelingen
                        <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="mail">
                    <MdArrowCircleDown size={25} color="#8D7B67" />
                  </button>
                  <div className="profile-pic">
                    <img src={treatment3} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">Permanente Make-up</span>
                      <span className="desc">
                        Onze behandelingen in de categorie
                        &quot;Injectables&quot;
                      </span>
                      <ul className="pt-2">
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Gezichtshaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Okselhaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Bikinilijn laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Lichaamshaar laseren</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-bottom">
                      <div className="social-links-container">Make-up</div>
                      <Link
                        to={"/"}
                        className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                      >
                        Meer behandelingen
                        <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="mail">
                    <MdArrowCircleDown size={25} color="#8D7B67" />
                  </button>
                  <div className="profile-pic">
                    <img src={treatment2} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">Mesoestetic</span>
                      <span className="desc">
                        Onze behandelingen in de categorie
                        &quot;Injectables&quot;
                      </span>
                      <ul className="pt-2">
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Gezichtshaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Okselhaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Bikinilijn laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Lichaamshaar laseren</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-bottom">
                      <div className="social-links-container">Mesoestetic</div>
                      <Link
                        to={"/"}
                        className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                      >
                        Meer behandelingen
                        <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <button className="mail">
                    <MdArrowCircleDown size={25} color="#8D7B67" />
                  </button>
                  <div className="profile-pic">
                    <img src={treatment3} alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <span className="name">Permanente Make-up</span>
                      <span className="desc">
                        Onze behandelingen in de categorie
                        &quot;Injectables&quot;
                      </span>
                      <ul className="pt-2">
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Gezichtshaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Okselhaar laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Bikinilijn laseren</span>
                          </div>
                        </li>
                        <li className="list-none">
                          <div className="inline-flex gap-1 items-center transition-transform duration-300 hover:translate-x-3 hover:text-[#5f5041]">
                            <MdKeyboardArrowRight size={20} />
                            <span>Lichaamshaar laseren</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bottom-bottom">
                      <div className="social-links-container">Make-up</div>
                      <Link
                        to={"/"}
                        className="button bg-[#FAF5EF] py-1 px-3 text-[14px] font-medium rounded-md flex gap-2 items-center transition-all duration-300 group"
                      >
                        Meer behandelingen
                        <BsArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-wrapper py-12">
          <div className="why-us flex items-center justify-between gap-5">
            <div className="image-section flex-1">
              <div
                style={{
                  height: "620px",
                  maxWidth: "510px",
                  objectFit: "cover",
                }}
                className="img-area"
              >
                <img
                  style={{ borderRadius: "30px" }}
                  className="w-full h-full object-cover"
                  src={whyus}
                  alt="why-us-image"
                />
              </div>
            </div>

            <div className="content-section flex-1 flex justify-end">
              <div className="flex flex-col gap-5">
                <div className="title">
                  <span className="m-0 p-0 font-playfair text-[32px] font-medium">
                    Waarom
                  </span>{" "}
                  <h2 className="-mt-3 text-[50px] font-medium font-playfair">
                    Aphrodite Clinic?
                  </h2>
                </div>

                <div className="desc">
                  <p className="max-w-[600px] text-[16px] font-normal">
                    Persoonlijke aandacht, realistische
                    huidverbeteringsperspectieven, vakkundig uitgevoerde
                    behandelingen van de beste kwaliteit, uitgevoerd door
                    specialisten met hoogwaardige medische apparatuur… Dat - en
                    nog veel meer - vinden wij belangrijk als u met uw
                    behandelingsvraag bij ons komt. Zo bieden wij u de zorg die
                    uw huid verdient. Het team van Aphrodite Clinic staat graag
                    voor u klaar om uw huid met de grootst mogelijke zorg te
                    behandelen.
                  </p>
                  <ul className="py-6">
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Uw huid is onze zorg
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Persoonlijke, gastvrije benadering
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Resultaat vanaf de eerste behandeling.
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Realistisch advies
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Gediplomeerde, gespecialiseerde huidtherapeuten
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Grote diversiteit aan hoogwaardige behandelingen
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Vrijblijvende intake, inclusief behandelplan op maat
                      </span>
                    </li>
                    <li className="flex items-center gap-1 py-1">
                      <IoCheckmarkCircleOutline size={25} />
                      <span className="text-[16px] text-[#5f5041] font-semibold">
                        Gecontracteerde zorg via alle zorgverzekeraars
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="affiliate-partner mt-8 lg:col-span-2 md:mt-6">
                  <div
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                    className="bg-[#F0DECA] px-4 py-2 inline-block ml-12 relative z-10 xs:ml-5"
                  >
                    <h4 className="font-semibold text-[16px] xs:text-sm">
                      Wij zijn aangesloten bij
                    </h4>
                  </div>
                  <div className="bg-white px-12 pt-8 pb-2 inline-flex items-center shadow rounded-lg -mt-5 lg:w-full lg:justify-between xs:px-6 xs:pt-8 xs:pb-3 xxs:px-5">
                    <a
                      href="https://www.huidtherapie.nl/"
                      target="_blank"
                      className="mr-10 xs:mr-4 xxs:mr-3"
                    >
                      <picture>
                        <source srcSet={affiliate1} media="(min-width: 0px)" />
                        <img
                          src={affiliate1}
                          alt
                          className="hover-gray nvh-logo"
                        />
                      </picture>
                    </a>
                    <a
                      href="https://www.kwaliteitsregisterparamedici.nl/default.aspx"
                      target="_blank"
                      className="mr-10 xs:mr-4 xxs:mr-3"
                    >
                      <picture>
                        <source srcSet={affiliate2} media="(min-width: 0px)" />
                        <img
                          src={affiliate2}
                          alt
                          className="hover-gray kp-logo-2"
                        />
                      </picture>
                    </a>
                    <a
                      href="https://www.s-bb.nl/"
                      target="_blank"
                      className="mr-10 xs:mr-4 xxs:mr-3"
                    >
                      <picture>
                        <source srcSet={affiliate3} media="(min-width: 0px)" />
                        <img
                          src={affiliate3}
                          alt
                          className="hover-gray bb-logo-3"
                        />
                      </picture>
                    </a>
                    <a
                      href="https://www.veiligtatoeerenenpiercen.nl/vind-hier-je-studio"
                      target="_blank"
                    >
                      <picture>
                        <source srcSet={affiliate4} media="(min-width: 0px)" />
                        <img
                          src={affiliate4}
                          alt
                          className="hover-gray bb-logo-3"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="we-notice-wrapper py-12">
          <div className="we-notice">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <div className="flex flex-col gap-10">
                  <div className="title">
                    <span className="m-0 p-0 font-playfair text-[32px] font-medium">
                      Wij werken met deze
                    </span>{" "}
                    <h2 className="-mt-3 text-[50px] font-medium font-playfair">
                      Merken{" "}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex flex-end">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  className="mySwiper"
                  slidesPerGroup={1}
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: true }}
                >
                  {weNoticeArray.map((item) => (
                    <>
                      <SwiperSlide>
                        <div
                          style={{
                            boxShadow:
                              "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                          }}
                          className="bg-white w-full h-[90%] rounded-lg cursor-pointer flex justify-center items-center"
                        >
                          <div className="img-area w-[80%] flex justify-center">
                            <img src={item?.image} alt="" />
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
