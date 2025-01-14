import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/images/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-6">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
            to="/"
          >
            <img src={mainLogo} alt="main-logo" />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
              aria-expanded={isMenuOpen}
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
            >
              {!isMenuOpen ? (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-example"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block overflow-hidden transition-all duration-300 basis-full grow`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
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
