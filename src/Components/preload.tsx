import { JSX, useEffect, useState } from "react";
import loader from "../assets/loader.webm";
function preload(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "theme2") {
      setIsDarkMode(true);
    }
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "theme2");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="w-[100svw] h-[100svh] flex justify-center items-center z-50">
        <video autoPlay loop muted className="w-[150px] h-auto">
          <source src={loader} type="video/webm" />
        </video>
      </div>
    </>
  );
}

export default preload;
