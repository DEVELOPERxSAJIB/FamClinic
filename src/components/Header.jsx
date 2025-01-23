import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/images/logo/demoLogo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

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
            <div
              style={{
                height: "120%",
                width: "280px",
              }}
              className="logo-area"
            >
              <img
                src={mainLogo}
                className="md:w-full md:h-full w-2/4"
                alt="main-logo"
              />
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
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end mt-8 sm:mt-0 sm:ps-5"
          >
            <li className={location.pathname === "/" ? "active-menu" : ""}>
              <Link to={"/"} className="main-menu" aria-current="page">
                Home
              </Link>
            </li>

            <li className={location.pathname === "/about" ? "active-menu" : ""}>
              <Link className="main-menu" to={"/about"}>
                About
              </Link>
            </li>

            <li
              className={
                location.pathname === "/treatment" ? "active-menu" : ""
              }
            >
              <Link className="main-menu" to={"/treatment"}>
                Treatment
              </Link>
            </li>
            <li
              className={location.pathname === "/pricing" ? "active-menu" : ""}
            >
              <Link className="main-menu" to={"/pricing"}>
                Price
              </Link>
            </li>
            <li
              className={location.pathname === "/contact" ? "active-menu" : ""}
            >
              <Link className="main-menu" to={"/contact"}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
