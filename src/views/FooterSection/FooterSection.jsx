import Logo from "../../common/Logo/logo";
import Register from "../../common/Register/Register";
import "./FooterSection.css";
import { useNavigate } from "react-router-dom";

const FooterSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="footer-section-background">
        <div className="footer-section-content">
          <Logo />
          <div className="footer-section-sections">
            <ul>
              <li onClick={() => navigate("/")}>Inicio</li>
              <li onClick={() => navigate("/streamers")}>Streamers</li>
              <li onClick={() => navigate("/brands")}>Patrocinadores</li>
              <li onClick={() => navigate("/knowMore")}>
                Preguntas frecuentes
              </li>
            </ul>
          </div>
          <div className="footer-section-contact">
            <ul>
              <li>Contáctanos</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="register-footer">
            <Register />
          </div>
        </div>
        <div className="footer-section-terms">
          <p>© 2021 StreamCash. Todos los derechos reservados.</p>
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
          <p>Política de cookies</p>
          <p>Términos y condiciones de contratación con StreamCash</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
