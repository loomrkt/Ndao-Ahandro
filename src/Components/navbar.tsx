import ThemeController from "./ThemeController";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="h-96 max-md:h-[31.25rem]">
        <nav className="navbar rounded-box shadow">
          <div className="navbar-start">
            <a
              className="link text-base-content link-neutral text-xl font-semibold no-underline flex items-center gap-2"
              href="#"
            >
              <img src={logo} alt="logo" className="w-7 h-auto" />
              Ndao Ahandro
            </a>
          </div>
          <div className="navbar-center max-md:hidden">
            <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
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
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
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
              </ul>
            </div>
            <div className="flex items-center gap-4 flex-row">
              <ThemeController />
              <a className="btn btn-primary" href="#">
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;