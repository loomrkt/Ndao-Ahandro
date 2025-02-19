import { JSX, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutWithNavbarProps {
    children: ReactNode;
}

function LayoutWithNavbar({children}:LayoutWithNavbarProps):JSX.Element {
    return ( <>
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    </> );
}

export default LayoutWithNavbar;