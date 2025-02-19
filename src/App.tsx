import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preload from "./Components/preload";

import Home from "./pages/home/home";

import { IStaticMethods } from "flyonui/flyonui";
import Recette from "./pages/recette/recette";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import LayoutWithNavbar1 from "./layouts/LayoutWithNavbar1";
import useScrollToTop from "./hooks/useScrollToTop";
import Contact from "./pages/contact/contact";
import LayoutWithNavbar1WithoutAside from "./layouts/LayoutWithNavbar1WithoutAside";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");

      window.HSStaticMethods.autoInit();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    loadFlyonui();
  });
  useScrollToTop();

  if (loading) {
    return <Preload />;
  }

  return (
    <div className="min-h-screen bg-base-200/60 relative">
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNavbar>
              <Home />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/recette"
          element={
            <LayoutWithNavbar1>
              <Recette />
            </LayoutWithNavbar1>
          }
        />
        <Route
          path="/contact"
          element={
            <LayoutWithNavbar1WithoutAside>
              <Contact />
            </LayoutWithNavbar1WithoutAside>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
