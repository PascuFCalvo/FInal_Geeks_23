import Logo from "../../common/Logo/logo";
import Register from "../../common/Register/Register";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div>
      <div className="footer-section-background">
        <div className="footer-section-content">
          <Logo />
          <div className="footer-section-sections">
            <ul>
              <li>Inicio</li>
              <li>Streamers</li>
              <li>Patrocinadores</li>
              <li>Preguntas frecuentes</li>
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
