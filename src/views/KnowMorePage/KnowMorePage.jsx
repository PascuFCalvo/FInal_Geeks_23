/* eslint-disable react/no-unescaped-entities */
import "./KnowMorePage.css";
import integration from "../../assets/images/knowmore/integration.png";
import conection from "../../assets/images/knowmore/conection.jpg";
import money from "../../assets/images/knowmore/money.jpg";
import clicks from "../../assets/images/knowmore/clicks.jpg";
import direct from "../../assets/images/knowmore/direct.jpg";
import sponsors from "../../assets/images/knowmore/sponsors.jpg";
import audience from "../../assets/images/knowmore/audience.jpg";
import start from "../../assets/images/knowmore/start.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FooterSection from "../../views/FooterSection/FooterSection";

const KnowMoreSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="know-more-section-background">
        <div className="Know-section-horizontal4-background">
          <h1 className="title-know-section">Descubre más sobre StreamCash</h1>
          <p className="subtitle-know-section">
            Bienvenido a StreamCash, la plataforma que conecta de manera única a
            streamers y marcas para potenciar tu presencia en el mundo del
            streaming. Aquí, en la sección de "Saber Más", te ofrecemos
            información detallada sobre cómo nuestra plataforma puede cambiar tu
            experiencia como streamer o marca.
          </p>
          <h1 className="start-know-Section">¿Cómo Funciona?</h1>
          <div className="know-section-horizontal4-content white">
            <div className="know-section-horizontal4-content-right white">
              <h1 className="know-title-section4 white">
                Integración Sencilla:
              </h1>
              <p className="text-know-section4 ">
                Añadir StreamCash a tus plataformas de streaming es fácil y
                rápido. Te proporcionamos herramientas simples para que puedas
                centrarte en lo que más te gusta: crear contenido.
              </p>
            </div>
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={integration}
                alt="Imagen de la sección 4"
                width={240}
              />
            </div>
          </div>
          <div className="know-section-horizontal4-content">
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={conection}
                alt="Imagen de la sección 4"
              />
            </div>
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">Conexión Instantánea:</h1>
              <p className="text-know-section4">
                Configura tu cuenta en menos de 1 minuto y comienza a disfrutar
                de los beneficios de tener acceso a patrocinadores destacados.
              </p>
            </div>
          </div>
          <div className="know-section-horizontal4-content">
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={money}
                alt="Imagen de la sección 4"
              />
            </div>
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">
                Gana Dinero con Facilidad:
              </h1>
              <p className="text-know-section4">
                Selecciona las marcas con las que deseas trabajar y empieza a
                ganar dinero de manera rápida y sencilla. Monetiza tu pasión de
                forma efectiva.
              </p>
            </div>
          </div>
          <h1 className="start-know-Section">
            Publicidad en Streaming Simplificada
          </h1>
          <div className="know-section-horizontal4-content">
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">Diseño en 3 Clicks:</h1>
              <p className="text-know-section4">
                Crea y diseña tus campañas publicitarias en streaming en tan
                solo 3 clicks. Potencia el crecimiento de tu marca y llega a
                nuevas audiencias de habla hispana.
              </p>
            </div>
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={clicks}
                alt="Imagen de la sección 4"
              />
            </div>
          </div>
          <div className="know-section-horizontal4-content-orangered">
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={direct}
                alt="Imagen de la sección 4"
              />
            </div>
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">Directos Destacados:</h1>
              <p className="text-know-section4">
                Emite tus campañas en los directos más destacados en habla
                hispana, asegurándote de alcanzar a una audiencia amplia y
                comprometida.
              </p>
            </div>
          </div>
          <h1 className="start-know-Section">Cambia tu Vida</h1>
          <div className="know-section-horizontal4-content-white">
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">
                Patrocinadores Garantizados:
              </h1>
              <p className="text-know-section4">
                ¿Te preguntas si puedes ganarte la vida con tus streams? ¡La
                respuesta es sí! Obtén patrocinadores independientemente de
                cuántas personas vean tu stream. StreamCash está aquí para
                cambiar tu vida, brindándote oportunidades de crecimiento y
                monetización.
              </p>
            </div>
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={sponsors}
                alt="Imagen de la sección 4"
              />
            </div>
          </div>
          <h1 className="start-know-Section">¿Por Qué StreamCash?</h1>
          <div className="know-section-horizontal4-content-white">
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={audience}
                alt="Imagen de la sección 4"
              />
            </div>
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">
                Visualización y Audiencia al 100%:
              </h1>
              <p className="text-know-section4">
                Con StreamCash, tu mensaje se integra de manera natural con el
                stream, logrando una visualización y audiencia del 100%. Llega a
                los jugadores de forma nativa y maximiza el impacto de tus
                campañas publicitarias.
              </p>
            </div>
          </div>
          <div className="know-section-horizontal4-content-orangered">
            <div className="know-section-horizontal4-content-right">
              <h1 className="know-title-section4">¡Empezar Ahora es Fácil!</h1>
              <p className="text-know-section4">
                ¿Estás listo para dar el siguiente paso? Haz clic en "Empezar
                Ahora" y únete a la comunidad de streamers y marcas que están
                transformando sus experiencias en el mundo del streaming con
                StreamCash.
              </p>
            </div>
            <div className="know-section-horizontal4-content-left">
              <img
                className="know-image-section-4"
                src={start}
                alt="Imagen de la sección 4"
              />
            </div>
          </div>
          <div className="buttons-know-more">
            <div
              className="button-saber-mas-know"
              onClick={() => navigate("/")}
            >
              VOLVER
            </div>

            <div
              className="button-empezar-ahora"
              onClick={() => navigate("/registerStreamer")}
            >
              EMPEZAR AHORA
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default KnowMoreSection;
