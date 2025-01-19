import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowCircleDown, MdKeyboardArrowRight } from "react-icons/md";

import treatment1 from "../assets/images/treatment/treatment-1.jpg";
import treatment2 from "../assets/images/treatment/treatment-2.jpg";
import treatment3 from "../assets/images/treatment/treatment-3.jpg";

const Treatment = () => {
  return (
    <>
      <div className="contact-top mx-auto">
        <section className="pb-8 lg:pb-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
          <div className="pb-56 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="z-10 text-[#F0DECA] absolute inset-0 flex gap-3 items-center justify-center text-xl font-bold">
              <Link
                to={"/"}
                className="translate-all ease-in duration-300 hover:text-[#8D7B67] hover:duration-300 hover:ease-out"
              >
                Home{" "}
              </Link>{" "}
              {">"} Treatment page
            </h2>
          </div>
        </section>

        <div className="-mt-48 relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl">
          <div
            style={{
              width: "575px",
              height: "575px",
              objectFit: "cover",
            }}
            className="lg:w-1/2 lg:h-auto"
          >
            <img
              style={{
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "10px",
              }}
              className="h-full w-full object-cover"
              src={treatment1}
              alt="Winding mountain road"
            />
          </div>
          <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
            <div className="flex items-start flex-col p-12 md:px-16">
              <h2 className="text-2xl font-playfair font-medium lg:text-4xl">
                Discover the Perfect Treatment for You with us.
              </h2>
              <div className="mt-8">
                <a
                  href="#all-treatment"
                  className="group border border-[#8d7b67] p-1 px-2 w-60 mx-auto rounded-full flex items-center justify-between mb-4"
                >
                  <span className="font-inter text-[12px] font-bold">
                    Explore what is perfect for you.
                  </span>
                  <div className="p-2 bg-[#8d7b67] rounded-full transition-all duration-300 group-hover:translate-x-1">
                    <FaArrowRight color="#fff" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 z-0 relative md:px-10">

        <div id="all-treatment" className="treatment-wrapper py-16">
          <div className="treatment-section">
            <div className="title flex items-end">
              <h2 className="text-[50px] font-medium font-playfair">
                <span className="font-playfair text-[32px] font-medium">
                  Onze
                </span>{" "}
                Behandelingen
              </h2>
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

export default Treatment;
