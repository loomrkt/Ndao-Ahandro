import ThemeController from "./ThemeController";

function Navbar() {
    return ( <>
    <div className="h-96 max-md:h-[31.25rem]">
        <nav className="navbar rounded-box shadow">
            <div className="navbar-start">
            <a className="link text-base-content link-neutral text-xl font-semibold no-underline" href="#">
                Ndao Ahandro
            </a>
            </div>
            <div className="navbar-center max-md:hidden">
            <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-md:[--placement:bottom]">
                <button id="dropdown-end" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    Products
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                    <li><a className="dropdown-item" href="#">Templates</a></li>
                    <li><a className="dropdown-item" href="#">UI kits</a></li>
                    <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                    <button id="nested-dropdown-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Components
                        <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                        <li><a className="dropdown-item" href="#">Basic</a></li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Advanced
                            <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                        </a>
                        </li>
                        <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                        <button id="nested-dropdown-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Vendor
                            <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                            <li>
                            <a className="dropdown-item" href="#">
                                Data tables
                                <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Apex charts
                                <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                            </a>
                            </li>
                            <li><a className="dropdown-item" href="#">Clipboard</a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
            </div>
            <div className="navbar-end items-center gap-4">
            <div className="dropdown relative inline-flex md:hidden rtl:[--placement:bottom-end]">
                <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <li className="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-md:[--placement:bottom]">
                    <button id="dropdown-end-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    Products
                    <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                    <li><a className="dropdown-item" href="#">Templates</a></li>
                    <li><a className="dropdown-item" href="#">UI kits</a></li>
                    <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                        <button id="nested-dropdown-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Components
                        <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                        <li><a className="dropdown-item" href="#">Basic</a></li>
                        <li>
                            <a className="dropdown-item" href="#">
                            Advanced
                            <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                            </a>
                        </li>
                        <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-md:[--placement:bottom] rtl:[--placement:left-start]">
                            <button id="nested-dropdown-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Vendor
                            <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                            <li>
                                <a className="dropdown-item" href="#">
                                Data tables
                                <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                Apex charts
                                <span className="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                </a>
                            </li>
                            <li><a className="dropdown-item" href="#">Clipboard</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Careers</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-4 flex-row">
                <ThemeController />
                <a className="btn btn-primary" href="#">Login</a>
            </div>
            </div>
        </nav>
    </div>
    </> );
}

export default Navbar;