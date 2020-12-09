import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const user = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(user.name);
  const [description, setDescription] = React.useState(user.about);
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="editProfile"
      title="Редактировать профиль"
      isOpened={props.isOpened}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input"
        id="form-name"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__input-error form-name-error"></span>
      <input
        type="text"
        className="popup__input"
        id="form-bio"
        name="bio"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error form-bio-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
