import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

// ...existing code...

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-image"></div>
          </Link>
        </div>

        {/* ...resto del código sin cambios... */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className={location.pathname === "/rooms" ? "active" : ""}>
              <Link to="/rooms" onClick={closeMenu}>
                Habitaciones
              </Link>
            </li>
            <li className={location.pathname === "/tours" ? "active" : ""}>
              <Link to="/tours" onClick={closeMenu}>
                Tours
              </Link>
            </li>

            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact" onClick={closeMenu}>
                Contacto
              </Link>
            </li>

            <li>
              <Link to="/invest" onClick={closeMenu}>
                Inversión
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay para cerrar menú en móviles */}
      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Header;
