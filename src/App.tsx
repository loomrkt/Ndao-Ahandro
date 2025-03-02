import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Preload from "./Components/preload";
import Home from "./pages/home/home";
import { IStaticMethods } from "flyonui/flyonui";
import Recette from "./pages/recette/recette";
import useScrollToTop from "./hooks/useScrollToTop";
import Contact from "./pages/contact/contact";
import Ln from "./layouts/ln";
import Sidebar from "./layouts/sidebar";
import { SidebarProvider } from "./contexts/SidebarContext";
import Login from "./pages/authentification/login";
import Register from "./pages/authentification/register";
import LayoutAuthentification from "./layouts/LayoutAuthentification";
import LayoutWithoutNavbar from "./layouts/LayoutWithoutNavbar";
import Profil from "./pages/profil/profil";

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
            <Ln>
              <Home />
            </Ln>
          }
        />
        <Route
          path="/recette"
          element={
            <SidebarProvider>
              <Ln>
                <Sidebar>
                  <Recette />
                </Sidebar>
              </Ln>
            </SidebarProvider>
          }
        />
        <Route
          path="/contact"
          element={
            <Ln>
              <Contact />
            </Ln>
          }
        />
        <Route
          path="/login"
          element={
            <LayoutAuthentification>
              <Login />
            </LayoutAuthentification>
          }
        />
        <Route
          path="/register"
          element={
            <LayoutAuthentification>
              <Register />
            </LayoutAuthentification>
          }
        />
        <Route
          path="/profil"
          element={
            <LayoutWithoutNavbar>
              <Profil />
            </LayoutWithoutNavbar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
