import { ReactNode } from "react";
import Navbar from "./navbar";

interface LnProps {
    children: ReactNode;
}

function Ln({children}: LnProps) {
    return ( <>
        <Navbar />
        {children}
    </> );
}

export default Ln;