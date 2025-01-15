import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/hero-image-woman.png";
import { MdArrowCircleDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import "./Home.scss";
import { Link } from "react-router-dom";

import treatment1 from "../../assets/images/treatment-1.jpg";
import treatment2 from "../../assets/images/treatment-2.jpg";
import treatment3 from "../../assets/images/treatment-3.jpg";

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
                Aphrodite Clinic
              </h2>
              <p className="max-w-[550px] font-normal text-[18px] mt-8">
                Aphrodite Clinic verwelkomt u graag voor een breed palet aan
                cosmetische en innovatieve huidverbeterende behandelingen in
                haar paramedische kliniek in Nijmegen. Ons team van
                gediplomeerde, specialistische huidtherapeuten volgt de nieuwste
                ontwikkelingen en wordt getraind om u de best mogelijke
                behandelingen te kunnen geven.
              </p>
              <div className="button-area pt-16 flex flex-col md:flex-row gap-5 items-center justify-center">
                <a
                  href="#"
                  style={{
                    borderTopRightRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    borderBottomRightRadius: "25px",
                  }}
                  className="py-4 px-6 bg-[#F0DECA] text-[18px] font-semibold duration-300 ease-in-out translate-all hover:bg-[#F9EEDD] hover:transition-all hover:ease-out hover:duration-300"
                >
                  Bekijk onze Behandelingen
                </a>
                <a
                  href="#"
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
                </a>
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
      </div>
    </>
  );
};

export default Home;
