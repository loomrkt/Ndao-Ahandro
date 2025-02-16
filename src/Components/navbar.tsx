import { useState, useEffect } from "react";
import ThemeController from "./ThemeController";
import logo from "../assets/logo.png";
import Button1 from "./buttons/button1";

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 z-50  ${
          isAtTop ? "bg-transparent " : "shadow"
        }`}
      >
        <div className="navbar-start">
          <a
            className={`link text-xl font-semibold no-underline flex items-center gap-2 ${
              isAtTop ? "text-white" : ""
            }`}
            href="#"
          >
            <img src={logo} alt="logo" className="w-7 h-auto" />
            <span className="text-sm sm:text-lg">Ndao Ahandro</span>
          </a>
        </div>
        <div className="navbar-center max-md:hidden">
          <ul
            className={` menu-horizontal gap-4 p-0 text-base rtl:ml-20 ${
              isAtTop ? "text-white" : ""
            }`}
          >
            <li>
              <a href="#">Accuiel</a>
            </li>
            <li>
              <a href="#">Les recettes</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center gap-4">
          <div className="dropdown relative inline-flex md:hidden rtl:[--placement:bottom-end]">
            <button
              id="dropdown-default"
              type="button"
              className="dropdown-toggle btn btn-text btn-secondary btn-square"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
              <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
            </button>
            <ul
              className="menu dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-default"
            >
              <li>
                <a href="#">Accuiel</a>
              </li>
              <li>
                <a href="#">Les recettes</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="" className="flex items-center gap-4">
                  <Button1 text="S'inscrire" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 flex-row">
            <ThemeController isTop={isAtTop} />
            <a href="" className="hidden md:flex items-center gap-4">
              <Button1 text="S'inscrire" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
