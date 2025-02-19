import { JSX, ReactNode } from "react";
import Navbar1 from "./navbar1";
import Footer from "./footer";

interface LayoutWithNavbar1WithoutAsideProps {
    children: ReactNode;
}

function LayoutWithNavbar1WithoutAside({children}:LayoutWithNavbar1WithoutAsideProps):JSX.Element {
    return ( <>
    <div className="fixed top-0 w-full z-50">
        <Navbar1/>
    </div>
        {children}
        <Footer/>
    </> );
}

export default LayoutWithNavbar1WithoutAside;