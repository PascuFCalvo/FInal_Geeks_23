import "./PopupDeleteUser.css";

// eslint-disable-next-line react/prop-types
const PopupDeleteUser = ({ onCancelDelete, onInactivateUser }) => {

    

   
  const handleCancel = () => {
    onCancelDelete();
  };

  const handleInactivateUser = () => {
    onInactivateUser();
  };

  return (
    <div className="pop-up-delete-user-container">
      <div className="pop-up-delete-user-background">
        <p>Quieres dar de baja tu cuenta?</p>
        <div className="buttons-pop-up-delete-user">
          <button
            className="button-pop-up-delete-user"
            onClick={handleInactivateUser}
          >
            Si, darme de baja.
          </button>
          <button className="button-pop-up-delete-user" onClick={handleCancel}>
            No, volver atras.
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDeleteUser;
