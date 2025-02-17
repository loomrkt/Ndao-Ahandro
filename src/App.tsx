import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Preload from "./Components/preload";

import Home from "./pages/home/home";

import { IStaticMethods } from "flyonui/flyonui";
import Footer from "./Components/footer";
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

  if (loading) {
    return <Preload />;
  }

  return (
    <div className="min-h-screen bg-base-200/60 relative">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
