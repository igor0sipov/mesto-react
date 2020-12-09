import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarInputRef = React.useRef();

  function handleClick(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarInputRef.current.value);
    avatarInputRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="updateAvatar"
      title="Обновить аватар"
      isOpened={props.isOpened}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleClick}
    >
      <input
        ref={avatarInputRef}
        type="url"
        className="popup__input"
        id="form-avatar"
        name="avatar"
        placeholder="Ссылка на аватар"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error form-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
