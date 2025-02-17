import { JSX, ReactNode } from "react";
import "./gridCenter.css";

interface GridCenterProps {
    children: ReactNode;
}

function GridCenter({ children }: GridCenterProps):JSX.Element {
    return ( <>
    <div className="grid grid-cols-center-1 grid-cols-center-2 grid-cols-center-3 gap-2 md:gap-4">
        {children}
    </div>
    </> );
}

export default GridCenter;