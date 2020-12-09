import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    props.onSubmit({ name, link });
    setName("");
    setLink("");
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="addPlace"
      title="Новое место"
      isOpened={props.isOpened}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        type="text"
        className="popup__input"
        id="form-title"
        name="title"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__input-error form-title-error"></span>
      <input
        type="url"
        className="popup__input"
        id="form-url"
        name="url"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <span className="popup__input-error form-url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
