import { JSX } from "react";
import loader from "../assets/loader.webm"
function preload(): JSX.Element {
    return ( <>
        <div className="w-[100svw] h-[100svh] flex justify-center items-center z-50">
            <video autoPlay loop muted className="w-[150px] h-auto">
                <source
                    src={loader}
                    type="video/webm"
                />
            </video>
        </div>
    </> );
}

export default preload;