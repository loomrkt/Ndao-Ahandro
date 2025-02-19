import { ReactNode, useEffect } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import Footer from "./footer";

interface LnProps {
  children: ReactNode;
}

function Ln({ children }: LnProps) {
  const location = useLocation();
  const isNotRecette = location.pathname !== "/recette";

  useEffect(() => {}, [location.pathname, isNotRecette]);

  return (
    <>
      <Navbar />
      {children}
      {isNotRecette && <Footer />}
    </>
  );
}

export default Ln;
