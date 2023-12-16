import "./KnowMorePage.css";
import s1mple from "../../assets/images/WEBIMAGES/s1mple.jpg";
import twitch from "../../assets/images/WEBICONS/twitch.png";
import { useNavigate } from "react-router-dom";

const KnowMoreSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Know-section-horizontal4-background">
        <h1>Descubre Más sobre StreamCash</h1>
        <p>
          Bienvenido a StreamCash, la plataforma que conecta de manera única a
          streamers y marcas para potenciar tu presencia en el mundo del
          streaming. Aquí, en la sección de "Saber Más", te ofrecemos
          información detallada sobre cómo nuestra plataforma puede cambiar tu
          experiencia como streamer o marca.
        </p>
        <h1>¿Cómo Funciona?</h1>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Conexión Instantánea:</h1>
            <p className="Paragraf-section-4">
              Configura tu cuenta en menos de 1 minuto y comienza a disfrutar de
              los beneficios de tener acceso a patrocinadores destacados.
            </p>
          </div>
        </div>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Integración Sencilla:</h1>
            <p className="Paragraf-section-4">
              Añadir StreamCash a tus plataformas de streaming es fácil y
              rápido. Te proporcionamos herramientas simples para que puedas
              centrarte en lo que más te gusta: crear contenido.
            </p>
          </div>
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Gana Dinero con Facilidad:</h1>
            <p className="Paragraf-section-4">
              Selecciona las marcas con las que deseas trabajar y empieza a
              ganar dinero de manera rápida y sencilla. Monetiza tu pasión de
              forma efectiva.
            </p>
          </div>
        </div>
        <h1>Publicidad en Streaming Simplificada</h1>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Diseño en 3 Clicks:</h1>
            <p className="Paragraf-section-4">
              Crea y diseña tus campañas publicitarias en streaming en tan solo
              3 clicks. Potencia el crecimiento de tu marca y llega a nuevas
              audiencias de habla hispana.
            </p>
          </div>
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Directos Destacados:</h1>
            <p className="Paragraf-section-4">
              Emite tus campañas en los directos más destacados en habla
              hispana, asegurándote de alcanzar a una audiencia amplia y
              comprometida.
            </p>
          </div>
        </div>
        <h1>Cambia tu Vida</h1>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">Patrocinadores Garantizados:</h1>
            <p className="Paragraf-section-4">
              ¿Te preguntas si puedes ganarte la vida con tus streams? ¡La
              respuesta es sí! Obtén patrocinadores independientemente de
              cuántas personas vean tu stream. StreamCash está aquí para cambiar
              tu vida, brindándote oportunidades de crecimiento y monetización.
            </p>
          </div>
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>
        <h1>¿Por Qué StreamCash?</h1>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">
              Visualización y Audiencia al 100%:
            </h1>
            <p className="Paragraf-section-4">
              Con StreamCash, tu mensaje se integra de manera natural con el
              stream, logrando una visualización y audiencia del 100%. Llega a
              los jugadores de forma nativa y maximiza el impacto de tus
              campañas publicitarias.
            </p>
          </div>
        </div>
        <div className="Main-section-horizontal4-content">
          <div className="Main-section-horizontal2-content-right">
            <h1 className="Title-section-4">¡Empezar Ahora es Fácil!</h1>
            <p className="Paragraf-section-4">
              ¿Estás listo para dar el siguiente paso? Haz clic en "Empezar
              Ahora" y únete a la comunidad de streamers y marcas que están
              transformando sus experiencias en el mundo del streaming con
              StreamCash.
            </p>
          </div>
          <div className="Main-section-horizontal4-content-left">
            <img
              className="Image-section-4"
              src={s1mple}
              alt="Imagen de la sección 4"
            />
          </div>
        </div>

        <div
          className="button-empezar-ahora"
          onClick={() => navigate("/registerStreamer")}
        >
          EMPEZAR AHORA
        </div>
      </div>
    </div>
  );
};

export default KnowMoreSection;
