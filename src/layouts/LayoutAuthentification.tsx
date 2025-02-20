import { JSX, ReactNode } from "react";
import { Link } from "react-router-dom";

import Landing from "./../assets/landing.jpg";

interface LayoutAuthentificationProps {
  children: ReactNode;
}

function LayoutAuthentification({
  children,
}: LayoutAuthentificationProps): JSX.Element {
  return (
    <>
      <div className="relative font-[sans-serif] bg-base-100 h-screen">
        <Link className="btn absolute top-5 left-5 p-2" to="/">
          <span className="icon-[material-symbols--arrow-back-ios-new] size-5"></span>
        </Link>
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 bg-gray-50 h-full hidden md:block">
            <img
              src={Landing}
              className=" w-full h-full object-cover block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="flex items-center p-6 h-full w-full">{children}</div>
        </div>
      </div>
    </>
  );
}

export default LayoutAuthentification;