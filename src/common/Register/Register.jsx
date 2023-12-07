import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="body-register">
      <div onMouseEnter={() => setShow(!show)} className="register">
       Regístrate 
      </div>

      {show && (
        <div className="body-register-hover">
          <div className="register-hover">Regístrarme como STREAMER</div>
          
          <div className="register-hover-2">Regístrarme como MARCA</div>
        </div>
      )}
    </div>
  );
};

export default Register;
