import { JSX, ReactNode, useState } from "react";
import Footer from "./footer";
import Navbar1 from "./navbar1";

interface LayoutWithNavbarProps1 {
    children: ReactNode;
}

function LayoutWithNavbar1({children}:LayoutWithNavbarProps1):JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return ( <>
        <nav className="fixed top-0 z-50 w-full ">
        <Navbar1 toggleSidebar={toggleSidebar} />
        </nav>

        <aside id="logo-sidebar" className={`fixed top-0 left-0 bg-base-100 z-40 w-64 h-screen pt-20 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#" className="flex items-center p-2 rounded-lg bg-base-200/60 hover:bg-base-200/80">
                            <svg className="w-5 h-5  transition duration-75 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <div className="p-4 sm:ml-64 bg-base-200">
            <div className="p-4 mt-14">
                {children}
                <div className="mt-10">
                    <Footer/>
                </div>
            </div>
        </div>
    </> );
}

export default LayoutWithNavbar1;