import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/images/logo/logo-Photoroom.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  // change language
  const { i18n } = useTranslation("global");
  const [t] = useTranslation("global");
  const [input, setInput] = useState({
    language: "en",
  });

  // Update state when the select input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    i18n.changeLanguage(value);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#faf5eff6] px-4 md:px-6 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-6 md:py-0 lg:py-0 sticky top-0 z-30 ${
        isSticky ? "shadow-md sticky-animate" : "sticky-animate-reverse"
      }`}
    >
      {" "}
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:overflow-hidden sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link className="flex-none text-xl font-semibold" to="/">
            <div className="logo-area">
              <div
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "cover",
                }}
                className="image-area"
              >
                <img
                  src={mainLogo}
                  className="h-3/4 mt-3 sm:mt-0 md:w-full md:h-full w-3/4 flex items-center"
                  alt="main-logo"
                />
              </div>
            </div>
          </Link>

          <div className="sm:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="relative size-8 flex justify-center items-center gap-x-2 rounded-lg border border-[#F0DECA] bg-[#F0DECA] text-gray-800 shadow-sm duration-300 transition-all hover:bg-[#F9EEDD] focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
            >
              {!isMenuOpen ? (
                <AiOutlineMenu size={20} color="#8d7b67" />
              ) : (
                <RxCross1 size={20} color="#8d7b67" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className={`overflow-hidden transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen scale-y-100" : "max-h-0 scale-y-0"
          } sm:block sm:scale-y-100 sm:max-h-full sm:transition-none sm:overflow-visible basis-full grow sm:my-0 md:my-8 lg:my-8`}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end mt-8 sm:mt-0 sm:ps-5">
            <li className="inline-flex">
              <form className="flex justify-end">
                <select
                  id="countries"
                  value={input.language}
                  onChange={handleInputChange}
                  name="language"
                  className="border border-[#8d7b67] text-sm rounded-lg focus:ring-[#8d7b67] focus:border-[#8d7b67] block text-[16px] font-bold px-2 py-1"
                >
                  <option key={1} value="en" selected>
                    En
                  </option>
                  <option key={2} value="nl">
                    Nl
                  </option>
                </select>
              </form>
            </li>
            <li
              onClick={handleToggle}
              className={location.pathname === "/" ? "active-menu" : ""}
            >
              <Link to={"/"} className="main-menu" aria-current="page">
                {t("header.home")}
              </Link>
            </li>

            <li
              onClick={handleToggle}
              className={location.pathname === "/about" ? "active-menu" : ""}
            >
              <Link className="main-menu" to={"/about"}>
                {t("header.about")}
              </Link>
            </li>

            <li
              onClick={handleToggle}
              className={
                location.pathname === "/treatment" ? "active-menu" : ""
              }
            >
              <Link className="main-menu" to={"/treatment"}>
                {t("header.treatment")}
              </Link>
            </li>
            <li
              onClick={handleToggle}
              className={location.pathname === "/pricing" ? "active-menu" : ""}
            >
              <Link className="main-menu" to={"/pricing"}>
                {t("header.price")}
              </Link>
            </li>
            <li
              onClick={handleToggle}
              className={location.pathname === "/contact" ? "active-menu" : ""}
            >
              <Link className="main-menu" to={"/contact"}>
                {t("header.contact")}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
