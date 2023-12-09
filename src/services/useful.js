export const validator = (type, value) => {
  switch (type) {
    case "email":
    case "correo":
    case "mail":
    case "user_email":
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        )
      ) {
        return "Formato de email no valido, email@dominio.xyz";
      } else {
        return "";
      }

    case "name":
    case "user_name":
    case "streamer_nick":
    case "streamer_platform":
      if (value.length > 50 || value.length < 3) {
        return "Escribe un nombre correcto[3-50 caracteres]";
      } else {
        return "";
      }

    case "phone":
    case "user_phone":
    case "telefono":
      if (!/(?=.*?[0-9])/.test(value)) {
        return "Incorrect phone number";
      } else {
        return "";
      }

    case "password":
    case "password2":
    case "contraseña":
      if (value.length < 6) {
        return "Write 8 characters at least";
      } else {
        if (!/^(?=.*[a-zA-Z])(?=.*\d).+/.test(value)) {
          return "Invalid password format";
        } else {
          return "";
        }
      }

    case "streamer_nif":
      if (!/^(?=.*[0-9]).+$/.test(value)) {
        return "Invalid NIF/NIE/CIF format";
      } else {
        return "";
      }
  }
};
