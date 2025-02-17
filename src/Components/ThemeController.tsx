import { JSX, useEffect, useState } from "react";

interface ThemeControllerProps {
  isTop: boolean;
}

function ThemeController({ isTop }: ThemeControllerProps): JSX.Element {
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "theme1" : "theme2");
  };

  return (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="theme-controller"
        />
        <span
          className={`swap-off icon-[tabler--sun] size-7 ${
            isTop ? "text-white" : ""
          }`}
        ></span>
        <span
          className={`swap-on icon-[tabler--moon] size-7 ${
            isTop ? "text-white" : ""
          }`}
        ></span>
      </label>
    </>
  );
}

export default ThemeController;
