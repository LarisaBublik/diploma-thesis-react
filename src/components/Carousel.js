import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const initializeCarousel = async () => {
      const { Carousel } = await import("bootstrap");

      if (carouselRef.current) {
        const carousel = new Carousel(carouselRef.current, {
          interval: 3000,
          wrap: true,
        });

        return () => carousel.dispose();
      }
    };

    initializeCarousel();
  }, []);

  return (
    <div
      ref={carouselRef}
      id="mainCarousel"
      className="carousel slide py-3"
      data-bs-ride="carousel"
    >
      <div
        id="mainCarousel"
        className="carousel slide py-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img
              src="/img/card1.jpeg"
              className="d-block w-100 c-img"
              alt="Дизайн проект 1"
            />
            <div className="carousel-caption d-none d-md-block top-0 mt-4">
              <h5 className="text-success fs-3 py-3 bg-white rounded-5">
                Уникальный дизайн на заказ от талантливого дизайнера!
              </h5>
            </div>
          </div>

          <div className="carousel-item c-item">
            <img
              src="/img/card2.jpeg"
              className="d-block w-100 c-img"
              alt="Дизайн проект 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5
                className="fs-3 text-start mb-4"
                style={{
                  color: "#2F2F2F",
                  marginBottom: "15px",
                  textShadow: "2px 0 5px white",
                }}
              >
                Заинтересованы в креативных идеях для вашего проекта?
              </h5>
            </div>
          </div>

          <div className="carousel-item c-item">
            <img
              src="/img/card3.jpeg"
              className="d-block w-100 c-img"
              alt="Дизайн проект 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5
                className="fs-3 text-end mb-4"
                style={{
                  color: "#2F2F2F",
                  marginBottom: "10px",
                }}
              >
                Обращайтесь прямо сейчас!
              </h5>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
