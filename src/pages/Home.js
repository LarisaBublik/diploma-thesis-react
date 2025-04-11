import React, { useRef, useState } from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import videoSrc from "../assets/videos/IMG_1293.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="container">
      <Carousel />

      <article>
        <div className="container article-container py-5 mx-auto pt-0 mt-0">
          <div className="row">
            <div className="col-md-8 py-5 pt-0 mt-0">
              <h2 className="text-center mb-3 ">Мой подход к дизайну</h2>
              <p className="text-center fs-3 text-article">
                Я верю, что дизайн интерьера должен быть не только красивым, но
                и функциональным. Моя задача - создать пространство, которое
                отражает вашу индивидуальность и удовлетворяет ваши потребности.
              </p>

              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card h-100 rounded-5">
                    <img
                      src="/img/th(10).jpg"
                      className="img-fluid"
                      alt="Этап знакомства"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-3">
                        Знакомство
                      </h5>
                      <p className="card-text fs-5">
                        На первом этапе мы договариваемся о времени и месте
                        встречи с заказчиком. Мы обсуждаем ваши потребности,
                        стиль, бюджет и ваши идеи для проекта. Я задаю вопросы,
                        чтобы лучше понять ваши желания и предпочтения. Также мы
                        предварительно согласовываем сроки и формат нашего
                        взаимодействия, чтобы процесс проектирования был
                        комфортным и прозрачным.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card h-100 rounded-5">
                    <img
                      src="/img/th (9).jpg"
                      className="img-fluid"
                      alt="Этап понимания"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-3">Понимание</h5>
                      <p className="card-text fs-5">
                        Я начинаю с глубокого понимания ваших потребностей и
                        предпочтений. Я создаю видение вашего идеального
                        пространства - не просто набор мебели у стен, а
                        настоящую жизненную сцену, где каждый предмет играет
                        свою роль. На этом этапе рождается 'ДНК' вашего будущего
                        интерьера: я определяю его характер, ритм и настроение.Вы получаете план квартиры с расстановкой мебели в реальных размерах в 3-х вариантах
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card h-100 rounded-5 mt-5">
                    <img
                      src="/img/th (8).jpg"
                      className="img-fluid"
                      alt="Этап планирования"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-3">
                        Планирование
                      </h5>
                      <p className="card-text fs-5">
                        Затем я разрабатываю детальный план проекта, включая
                        эскизы, чертежи, спецификации материалов и мебели. Я
                        использую современные технологии для создания
                        реалистичных 3D-визуализаций.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card h-100 rounded-5 mt-5">
                    <img
                      src="/img/th(13).jpg"
                      className="img-fluid"
                      alt="Этап реализации"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center fs-3">
                        Реализация
                      </h5>
                      <p className="card-text fs-5">
                        Я контролирую все этапы реализации проекта, работая с
                        проверенными подрядчиками и поставщиками. Я всегда слежу
                        за качеством работы и соблюдением сроков.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4  mx-auto text-center about-me-section card">
              <h2 className="m-5 ">Обо мне</h2>
              <img
                className="rounded mx-auto mt-0 d-block"
                src="/img/foto.jpeg"
                alt="Фото дизайнера"
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
              />
              <p className="text-center m-4 fs-3">
                Я - начинающий дизайнер интерьера с страстью к созданию красивых
                и функциональных пространств. Моя миссия - сделать ваш дом не
                просто красивым, но и удобным для жизни! Окончила с отличием
                Международную школу-студию "Shad". Создала несколько проектов в
                ЖК "GreenLine" и готова помочь Вам осуществить свою мечту и жить
                в красивой, уютной и современной квартире. Я предпочитаю
                современный стиль с элементами классики, но всегда открыта к
                новым идеям и творческим экспериментам. Можете ознакомиться с
                примерами моих работ на сайте! Спасибо, что доверяете мне!
              </p>
            </div>
          </div>
        </div>
      </article>

      <section
        className="portfolio-preview py-5"
        style={{
          background: "linear-gradient(45deg, #f8f9fa, #e9ecef)",
          borderRadius: "15px",
          margin: "40px 0",
        }}
      >
        <div className="text-center py-5">
          <h2 className="mb-5 display-4">Почему выбирают меня</h2>

          <div className="row align-items-center mb-5 g-5">
            <div className="col-md-6">
              <img
                src="/img/th(12).jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="Интерьеры вне времени"
                style={{ transform: "rotate(-3deg)" }}
              />
            </div>
            <div className="col-md-6 text-start">
              <div className="number-badge mb-3">01</div>
              <h3 className="mb-4"> Интерьеры вне времени </h3>
              <blockquote className="border-start border-3 ps-4 border-primary">
                «Превращаю смелые концепции в удобные для жизни интерьеры, где
                каждая деталь работает на комфорт и эстетику»
              </blockquote>
            </div>
          </div>

          <div className="row align-items-center mb-5 g-5 flex-md-row-reverse">
            <div className="col-md-6">
              <img
                src="/img/th (11).jpg"
                className="img-fluid rounded-circle shadow"
                alt="Сверхвнимание к деталям"
                style={{ width: "400px", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 text-end">
              <div className="number-badge mb-3">02</div>
              <h3 className="mb-4">Сверхвнимание к деталям</h3>
              <blockquote className="border-end border-3 pe-4 border-warning">
                «От выбора фактуры обоев до расчета освещения — всё подчинено
                гармонии. Даже скрытые элементы становятся частью концепции»
              </blockquote>
            </div>
          </div>

          <div
            className="position-relative mb-5 overflow-hidden"
            style={{ height: "500px" }}
          >
            <img
              src="/img/big.jpg"
              className="img-fluid h-100 w-100 object-fit-cover"
              alt="Эмпатия"
            />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-dark bg-opacity-50">
              <div className="container text-light">
                <div className="number-badge-light mb-3">03</div>
                <h3 className="display-5 mb-4">Эмпатия и понимание</h3>
                <blockquote className="lead">
                  «Ваш интерьер — это ваш характер. Пространство должно быть не
                  просто красивым, а по-настоящему вашим»
                </blockquote>
              </div>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="btn btn-outline-secondary mb-4"
            style={{
              padding: "12px 30px",
              fontSize: "1.1rem",
              borderRadius: "25px",
            }}
          >
            Посмотреть работы →
          </Link>
        </div>
      </section>

      <section className="bub-section py-5 position-relative">
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <span className="gradient-text">Хотите заглянуть за кулисы?</span>{" "}
              🎭
            </h2>
            <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
              Подписывайтесь и получайте эксклюзивный контент, который я не
              публикую в портфолио:
            </p>
          </div>
        </div>
        <div className="subscription-card">
          <div className="telegram-icon">
          <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="#0088cc"
  >
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l16.5-6.33c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
  </svg>
          </div>
          <h3>Присоединяйтесь к моему Telegram-каналу!</h3>
          <p>
            Получайте эксклюзивные материалы и первыми смотрите новые проекты
          </p>

          <form className="subscription-form">
            <input
              type="text"
              placeholder="Ваше имя"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Email (необязательно)"
              className="form-input"
            />
            <button type="submit" className="telegram-link-btn">
              Подписаться
            </button>
          </form>

          <div className="social-links ">
            <p
              style={{
                fontSize: "clamp(24px)",
                lineHeight: 1.2,
                fontWeight: "bold",
                wordWrap: "break-word",
                margin: "20px 0",
              }}
            >
              Или перейдите сразу в Telegram:
            </p>
            <a
              href="https://t.me/Larisa12070"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-link"
            >
              <i className="bi bi-telegram"></i> Мой канал
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6 d-flex">
              <div className="exclusive-card p-4 p-lg-5 rounded-4 bg-white shadow-lg hover-3d w-100">
                <span
                  className="badge bg-custom mb-3"
                  style={{ fontSize: "1.1rem", padding: "0.5em 0.75em" }}
                >
                  Только для подписчиков
                </span>
                <h3 className="mb-4">💎Чек-лист в подарок!</h3>

                <ul className="list-unstyled fs-4 mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-"></i>{" "}
                    ✨ 7 ошибок в планировке
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    ✨  Гид по сочетанию цветов
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    ✨  Шаблон для общения с подрядчиками
                  </li>
                </ul>

                <a
                  href="https://t.me/Larisa12070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="telegram-link-btn d-inline-flex align-items-center justify-content-center w-100 py-3"
                >
                  <i className="bi bi-telegram me-2 fs-5"></i> Получить в
                  Telegram
                </a>

                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Уже получили 1,240+ человек
                  </small>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="video-card rounded-4 overflow-hidden shadow-lg hover-3d w-100 d-flex flex-column">
                <div className="ratio ratio-16x9 bg-dark position-relative">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    muted
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    src={videoSrc}
                    onClick={handleVideoClick}
                  />

                  {!isPlaying && (
                    <div
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{ cursor: "pointer" }}
                      onClick={handlePlayClick}
                    >
                      <div className="play-button pulse-animation">
                        <i className="bi bi-play-fill fs-1 text-white"></i>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-white">
                  <h5>Начнем вместе новый дизайн-проект!</h5>
                  <p className="text-muted fs-5 mb-0">
                    Видео будет обновлятся каждую неделю!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
