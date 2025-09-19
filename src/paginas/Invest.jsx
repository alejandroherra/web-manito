import { useEffect } from "react";
import "./Invest.css";

function Invest() {
  useEffect(() => {
    document.body.classList.add("invest-page-active");
    return () => {
      document.body.classList.remove("invest-page-active");
    };
  }, []);

  return (
    <div className="invest-container">
      {/* HERO SECTION */}
      <div className="invest-hero">
        <div className="invest-hero-content">
          <h1 className="invest-title">Invierte en nosotros</h1>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="invest-content">
        <div className="invest-section">
          <h2>¿Por qué invertir con nosotros?</h2>
          <p>
            Donde Familia Manito ofrece una oportunidad única de inversión en el
            sector turístico de Costa Rica, específicamente en la hermosa
            península de Nicoya, Paquera. Contamos con 10 hectáreas para
            construcción así como varias cabinas y un restaurante en
            funcionamiento. Nuestra ubicación privilegiada, combinada con la
            creciente demanda es una excelente oportunidad para inversores que
            buscan diversificar su portafolio y obtener rendimientos atractivos.
          </p>
        </div>

        <div className="invest-section">
          <h2>Oportunidades de Inversión</h2>
          <ul>
            <li>Expansión de habitaciones</li>
            <li>Mejora de instalaciones</li>
            <li>Construcción de otras habitaciones</li>
          </ul>
        </div>

        {/* SECCIÓN DE BENEFICIOS - LAYOUT VERTICAL */}
        <div className="invest-benefits">
          <h2>Beneficios para Inversores</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏖️</div>
              <div className="benefit-content">
                <h3>Acceso a Instalaciones</h3>
                <p>Como socio, tendrás acceso completo a todas nuestras instalaciones y servicios de forma preferencial.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <div className="benefit-content">
                <h3>Ganancias de Venta</h3>
                <p>Participación directa en los ingresos generados por las ventas y servicios del establecimiento.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <div className="benefit-content">
                <h3>Porcentaje de Adquisición</h3>
                <p>Opciones flexibles de participación según tu nivel de inversión, con términos transparentes y justos.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <div className="benefit-content">
                <h3>Rentabilidad</h3>
                <p>ROI atractivo respaldado por el crecimiento constante del turismo en la península de Nicoya.</p>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <div className="benefit-content">
                <h3>Expansión Rápida</h3>
                <p>Plan de crecimiento acelerado con 10 hectáreas disponibles para desarrollo futuro.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="invest-contact">
          <h2>Contáctanos</h2>
          <p>Para más información sobre oportunidades de inversión:</p>
          <a
            href="https://wa.me/70345679"
            className="invest-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Invest;