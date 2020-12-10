import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  const nameRef = React.useRef();
  const linkRef = React.useRef();
  const inputs = [nameRef, linkRef];
  console.log(nameRef, linkRef);
  function isValid(item) {
    if (item.current !== undefined && item) {
      return item.current.validity.valid;
    }
    return false;
  }

  function setLinkValidationMessage(item) {
    if (item.current !== undefined && item) {
      return item.current.validationMessage;
    }
    return "";
  }

  function isFormInvalid(inputs) {
    const isInvalid = inputs.some((input) => !input.current.validity.valid);
    console.log("form is Invalid", isInvalid);
    return isInvalid;
  }

  React.useEffect(() => {
    isFormInvalid(inputs);
  }, [name, link]);

  // console.log(nameRef);

  // const [isNameInputValid, setIsNameInputValid] = React.useState(false);
  // const [isLinkInputValid, setIsLinkInputValid] = React.useState(false);
  // const [nameValidationMessage, setNameValidationMessage] = React.useState("");
  // const [linkValidationMessgae, setLinkValidationMessage] = React.useState("");
  // const [isFormValid, setIsFormValid] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit({ name, link });
    setName("");
    setLink("");
  }
  function handleNameChange(e) {
    // setIsNameInputValid(e.target.validity.valid);
    // setNameValidationMessage(e.target.validationMessage);
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    // setIsLinkInputValid(e.target.validity.valid);
    // setLinkValidationMessage(e.target.validationMessage);
    setLink(e.target.value);
  }

  // React.useEffect(() => {
  //   if (!isNameInputValid || !isLinkInputValid) {
  //     setIsFormValid(false);
  //   } else {
  //     setIsFormValid(true);
  //   }
  // }, [isNameInputValid, isLinkInputValid]);

  React.useEffect(() => {
    if (!props.isOpened) {
      setName("");
      setLink("");
      // setNameValidationMessage("");
      // setLinkValidationMessage("");
    }
  }, [props.isOpened]);
  // console.log(name ? 'trueeee' : "falseee")

  return (
    <PopupWithForm
      name="addPlace"
      title="Новое место"
      isOpened={props.isOpened}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="popup__input"
        id="form-title"
        name="title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={handleNameChange}
        ref={nameRef}
      />
      <span
        className={`popup__input-error form-title-error ${
          isValid(nameRef) ? `` : `popup__input-error_visible`
        }`}
      >
        {setLinkValidationMessage(nameRef)}
      </span>
      <input
        type="url"
        className="popup__input"
        id="form-url"
        name="url"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
        ref={linkRef}
      />
      <span
        className={`popup__input-error form-url-error ${
          isValid(linkRef) ? `` : `popup__input-error_visible`
        }`}
      >
        {setLinkValidationMessage(linkRef)}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
