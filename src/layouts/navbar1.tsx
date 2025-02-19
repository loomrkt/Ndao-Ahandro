import ThemeController from "../Components/ThemeController";
import logo from "../assets/logo.png";
import Button1 from "../Components/buttons/button1";
import { Link } from "react-router-dom";
import FilterBtn from "../Components/filterBtn";

interface Navbar1Props {
  toggleSidebar?: () => void;
}

function Navbar1({ toggleSidebar }: Navbar1Props) {
  return (
    <>
      <nav className={`navbar z-50 `}>
        <div className="navbar-start">
          <a
            className={`link text-xl font-semibold no-underline flex items-center gap-2`}
            href="#"
          >
            <img src={logo} alt="logo" className="w-7 h-auto" />
            <span className="text-sm sm:text-lg">Ndao Ahandro</span>
          </a>
        </div>
        <div className="navbar-center max-md:hidden">
          <ul className={` menu-horizontal gap-4 p-0 text-base rtl:ml-20 `}>
            <li>
              <Link to="/">Accuiel</Link>
            </li>
            <li>
              <Link to="/recette">Les recettes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end items-center gap-2 sm:gap-4">
          { toggleSidebar && <div className="flex md:hidden">
            <FilterBtn toggleSidebar={toggleSidebar} />
          </div>}
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
                <Link to="/">Accuiel</Link>
              </li>
              <li>
                <Link to="/recette">Les recettes</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="" className="flex items-center gap-4">
                  <Button1 text="S'inscrire" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 flex-row">
            <ThemeController isTop={false} />
            <a href="" className="hidden md:flex items-center gap-4">
              <Button1 text="S'inscrire" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar1;