import { useEffect, useState } from 'react';

function ThemeController() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'theme2');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <label className="swap swap-rotate">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} className="theme-controller" />
        <span className="swap-off icon-[tabler--sun] size-7"></span>
        <span className="swap-on icon-[tabler--moon] size-7"></span>
      </label>
    </>
  );
}

export default ThemeController;