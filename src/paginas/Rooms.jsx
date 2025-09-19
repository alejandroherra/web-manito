import "./Rooms.css";
import { useState } from "react";

function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Garrobo🦎",
      description: (
        <span className="room-description-highlight green">
          Perfecta para familias, con espacio para 4 personas.
        </span>
      ),
      images: [
        "/src/assets/Garrobo.webp",
        "/src/assets/Garrobo2.webp",
        "/src/assets/Garrobo3.webp",
        "/src/assets/Garrobo4.webp",
      ],
    },
    {
      id: 2,
      title: "Mariposa🦋",
      description: (
        <span className="room-description-highlight blue">
          Ideal para parejas que buscan privacidad y comodidad.
        </span>
      ),
      images: [
        "/src/assets/Garrobo5.webp",
        "/src/assets/Garrobo6.webp",
        "/src/assets/Garrobo7.webp",
        "/src/assets/Garrobo8.webp",
      ],
    },
    {
      id: 3,
      title: "Urraca🐦",
      description: (
        <span className="room-description-highlight orange">
          Con vista al mar y todas las comodidades modernas.
        </span>
      ),
      images: [
        "/src/assets/urraca(1).webp",
        "/src/assets/urraca(2).webp",
        "/src/assets/urraca(3).webp",
        "/src/assets/urraca(4).webp",
        "/src/assets/urraca(5).webp",
        "/src/assets/urraca(6).webp",
      ],
    },
  ];

  return (
    <div className="rooms-container">
      <h1 className="rooms-title">Nuestras Cabinas</h1>
      <p className="rooms-description">
        Explora nuestras opciones de alojamiento diseñadas para satisfacer todas
        tus necesidades.
      </p>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

function RoomCard({ room }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="room-card">
      <h2 className="room-title">{room.title}</h2>
      <p className="room-description">{room.description}</p>
      <div className="room-carousel">
        <button className="carousel-button prev" onClick={prevImage}>
          &#8249;
        </button>
        <img
          src={room.images[currentImageIndex]}
          alt={`${room.title} - Imagen ${currentImageIndex + 1}`}
          className="room-image"
        />
        <button className="carousel-button next" onClick={nextImage}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Rooms;
