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
        return "Formato de email no valido, 'email@dominio.xyz' ";
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
        return "Formato de telefono no valido";
      } else {
        return "";
      }

    case "password":
    case "password2":
    case "contraseña":
      if (value.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres";
      } else {
        if (!/^(?=.*[a-zA-Z])(?=.*\d).+/.test(value)) {
          return "Invalid password format";
        } else {
          return "";
        }
      }

    case "streamer_nif":
      if (!/^(?=.*[0-9]).+$/.test(value)) {
        return "Formato de NIF/NIE/CIF no valido";
      } else {
        return "";
      }

    case "brand_name":
      if (value.length > 50 || value.length < 3) {
        return "Escribe un nombre correcto[3-50 caracteres]";
      } else {
        return "";
      }

    case "brand_cif":
    case "brand_CIF":
      if (!/^(?=.*[0-9]).+$/.test(value)) {
        return "Formato de NIF/NIE/CIF no valido";
      } else {
        return "";
      }

    case "brand_description":
      if (value.length > 200 || value.length < 3) {
        return "Escribe un nombre correcto[3-50 caracteres]";
      } else {
        return "";
      }
  }
};
