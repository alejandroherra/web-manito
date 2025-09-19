import { useEffect, useState } from "react";
import "./Tours.css";

function Tours() {
  useEffect(() => {
    document.body.classList.add("tours-page-active");

    return () => {
      document.body.classList.remove("tours-page-active");
    };
  }, []);

  const destinations = [
    {
      id: 1,
      title: "Parque Nacional Curú",
      description:
        "Un refugio de vida silvestre con senderos naturales, playas vírgenes y una biodiversidad impresionante.",
      images: [
        "/src/assets/curu.webp",
        "/src/assets/curu2.webp",
        "/src/assets/curu3.webp",
        "/src/assets/curu4.webp",
        "/src/assets/curuuno.webp",
        "/src/assets/curudos.webp",
        "/src/assets/curutres.webp",
      ],
    },
    {
      id: 2,
      title: "Playa Muertos",
      description:
        "Una playa paradisíaca con aguas cristalinas, perfecta para relajarse y disfrutar del sol.",
      images: [
        "/src/assets/muertos.webp",
        "/src/assets/muertos2.webp",
        "/src/assets/muertos3.webp",
        "/src/assets/muertos4.webp",
        "/src/assets/muertosuno.webp",
        "/src/assets/muertosdos.webp",
      ],
    },
    {
      id: 3,
      title: "Isla Venado",
      description:
        "Una isla tropical ideal para snorkel, con aguas turquesas y vida marina abundante.",
      images: ["/src/assets/venado1.webp", "/src/assets/venado2.webp"],
    },
    {
      id: 4,
      title: "Tour De Bioluminiscencia",
      description:
        "Una experiencia mágica en la que podrás observar la bioluminiscencia en las aguas de Costa Rica.",
      images: [
        "/src/assets/Bio3.webp",
        "/src/assets/Biolum.webp",
        "/src/assets/Bio4.webp",
        "/src/assets/Biouno.webp",
        "/src/assets/Biodos.webp",
        "/src/assets/Biotres.webp",
      ],
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (destinationId) => {
    const destination = destinations.find((d) => d.id === destinationId);
    setCurrentImageIndex((prev) => ({
      ...prev,
      [destinationId]:
        ((prev[destinationId] || 0) + 1) % destination.images.length,
    }));
  };

  const prevImage = (destinationId) => {
    const destination = destinations.find((d) => d.id === destinationId);
    setCurrentImageIndex((prev) => ({
      ...prev,
      [destinationId]:
        ((prev[destinationId] || 0) - 1 + destination.images.length) %
        destination.images.length,
    }));
  };

  // 🎯 FUNCIÓN PARA GENERAR ENLACE DE WHATSAPP
  const generateWhatsAppLink = (tourTitle) => {
    const phoneNumber = "50661234567"; // 👈 CAMBIA POR TU NÚMERO DE WHATSAPP
    const message = `¡Hola! Me interesa reservar el tour: *${tourTitle}*. ¿Podrían darme más información sobre disponibilidad, precios y horarios? ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="tours-container">
      <h1 className="tours-title">Descubre Nuestros Destinos</h1>
      <p className="tours-subtitle">
        Explora los lugares más hermosos de Costa Rica
      </p>
      <div className="tours-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="tour-card">
            <h2 className="tour-title">{destination.title}</h2>
            <p className="tour-description">{destination.description}</p>

            <div className="tour-carousel">
              <button
                className="carousel-button prev"
                onClick={() => prevImage(destination.id)}
              >
                ❮
              </button>

              <img
                src={destination.images[currentImageIndex[destination.id] || 0]}
                alt={destination.title}
                className="tour-image"
                loading="lazy"
              />

              <button
                className="carousel-button next"
                onClick={() => nextImage(destination.id)}
              >
                ❯
              </button>
            </div>

            <div className="image-counter">
              {(currentImageIndex[destination.id] || 0) + 1} /{" "}
              {destination.images.length}
            </div>

            {/* 🎯 BOTÓN DE RESERVA WHATSAPP */}
            <a
              href={generateWhatsAppLink(destination.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="reserve-button"
            >
              <span className="whatsapp-icon">📱</span>
              Reservar Tour
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
