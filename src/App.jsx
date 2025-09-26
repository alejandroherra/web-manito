import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

// Lazy loading de las páginas (code splitting)
const Rooms = lazy(() => import("./paginas/Rooms"));
const Contact = lazy(() => import("./paginas/Contact"));
const Tours = lazy(() => import("./paginas/Tours"));
const Invest = lazy(() => import("./paginas/Invest"));

// Componente de loading mejorado
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "1.2rem",
      color: "#666",
    }}
  >
    Cargando...
  </div>
);

function App() {
  // Determine the basename based on the environment
  const basename = import.meta.env.MODE === "production" ? "/web-manito" : "/";

  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
