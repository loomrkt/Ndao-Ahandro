import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar';

import Home from './pages/home';

import { IStaticMethods } from 'flyonui/flyonui';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-base-200/60">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
