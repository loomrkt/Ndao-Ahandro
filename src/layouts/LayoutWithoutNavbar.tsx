import { JSX, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutWithoutNavbarProps {
    children: ReactNode;
}

function LayoutWithoutNavbar({children}:LayoutWithoutNavbarProps ):JSX.Element {
    return ( <>
        {children}
    </> );
}

export default LayoutWithoutNavbar;