import { useEffect } from "react";
import "./Contact.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    // Agregar clase al body para activar el fondo transparente
    document.body.classList.add("contact-page-active");

    return () => {
      // Limpiar la clase al salir de la página
      document.body.classList.remove("contact-page-active");
    };
  }, []);

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Toca los botones y Contáctanos</h1>
        <div className="contact-grid">
          {/* Sección WhatsApp */}
          <div className="contact-card">
            <a
              href="https://wa.me/70345679"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp className="contact-icon" />
            </a>
            <h2 className="contact-heading">WhatsApp</h2>
            <p className="contact-description">
              Envíanos un mensaje directo por WhatsApp.
            </p>
          </div>

          {/* Sección Facebook */}
          <div className="contact-card">
            <a
              href="https://www.facebook.com/ManitoHugo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaFacebook className="contact-icon" />
            </a>
            <h2 className="contact-heading">Facebook</h2>
            <p className="contact-description">
              Síguenos en nuestra página de Facebook.
            </p>
          </div>

          {/* Sección Instagram */}
          <div className="contact-card">
            <a
              href="https://www.instagram.com/dondefamiliamanito/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaInstagram className="contact-icon" />
            </a>
            <h2 className="contact-heading">Instagram</h2>
            <p className="contact-description">
              Explora nuestras fotos y novedades en Instagram.
            </p>
          </div>

          {/* NUEVA SECCIÓN - UBICACIÓN */}
          <div className="contact-card">
            <a
              href="https://www.google.com/maps/place/Donde+Familia+Manito/@9.8321131,-84.8987355,17z/data=!4m13!1m2!2m1!1scasa+manito!3m9!1s0x8fa1d513bbc32eb1:0xa1d8fdf6a456bf7d!5m2!4m1!1i2!8m2!3d9.8321131!4d-84.8942294!15sCgtjYXNhIG1hbml0b1oNIgtjYXNhIG1hbml0b5IBEWJlZF9hbmRfYnJlYWtmYXN0mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVVJuYVc4M2VYbG5SUkFCqgFACgsvZy8xdmQ5NjhybRABMh4QASIahDnE26lh_CUW3V5M-EH5He8xZkhkzHkNVd8yDxACIgtjYXNhIG1hbml0b-ABAPoBBAh1EBc!16s%2Fg%2F11sd4dwyks?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaMapMarkerAlt className="contact-icon" />
            </a>
            <h2 className="contact-heading">Ubicación</h2>
            <p className="contact-description">
              Encuéntranos en Google Maps y ven a visitarnos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
