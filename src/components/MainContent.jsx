import React from "react";
import "./maincontent.css";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <div className="main-content">
      {/* Sección Hero con imagen de fondo */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Donde Familia Manito</h1>
          <p className="hero-subtitle">
            Bienvenidos a nuestro rincón paradisíaco en Paquera, Costa Rica.
            Donde la hospitalidad se encuentra con la naturaleza.
          </p>
        </div>
      </section>

      {/* Secciones normales */}
      <div className="content-sections">
        <div className="topic topic-investment">
          <h1>Oportunidades de Inversión</h1>
          <p>
            Descubre las oportunidades de inversión en el paraíso. Únete a
            nuestro proyecto y sé parte del crecimiento sostenible de Casa
            Manito.
          </p>
          <Link to="/invest" className="view-more-link">
            Conocer oportunidades →
          </Link>
        </div>

        <div className="topic topic-rooms">
          <h1>Nuestras habitaciones</h1>
          <p>
            Habitaciones cómodas y acogedoras con todas las comodidades para tu
            estadía perfecta.
          </p>
          <Link to="/rooms" className="view-more-link">
            Ver nuestras habitaciones →
          </Link>
        </div>

        <div className="topic topic-tours">
          <h1>Nuestros Tours</h1>
          <p>
            Explora la belleza de Paquera con nuestros tours guiados por
            expertos locales.
          </p>
          <Link to="/tours" className="view-more-link">
            Ver nuestros tours →
          </Link>
        </div>

        {/* Formulario de contacto existente */}
        <div className="ContactForm">
          <h2>Contáctanos</h2>
          <div className="Iconos">
            <a
              href="https://wa.me/70345679"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/ManitoHugo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/dondefamiliamanito/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
