import React from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import api from "./utils/Api";
import editAvatarIconPath from "../images/edit-avatar-icon.svg";

function Main(props) {
  const [userName, setUserName] = React.useState("User Name");
  const [userDescription, setUserDescription] = React.useState("User Bio");
  const [userAvatar, setUserAvatar] = React.useState(
    "http://cdn.onlinewebfonts.com/svg/img_258083.png"
  );
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getUserInfo().then((info) => {
      setUserName(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    });
    api.getCards().then((cards) => {
      const initialCards = cards.map((card) => {
        return (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        );
      });
      setCards(initialCards);
    });
  }, []);
  return (
    <main className="main sizer">
      <section className="profile profile_spaced sizer">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} alt="User Avatar" className="profile__avatar" />
          <button
            className="profile__edit-avatar-button"
            onClick={props.onEditAvatar}
          >
            <img
              src={editAvatarIconPath}
              alt=""
              className="profile__edit-avatar-icon"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__bio">{userDescription}</p>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <ul className="elements">{cards}</ul>

      <PopupWithForm
        name="editProfile"
        title="Редактировать профиль"
        isOpened={props.isEditProfilePopupOpen}
      >
        <button
          type="button"
          className="popup__close-icon"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title">Редактировать профиль</h3>
        <input
          type="text"
          className="popup__input"
          id="form-name"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
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
        />
        <span className="popup__input-error form-bio-error"></span>
        <button type="submit" className="popup__submit-button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="addPlace"
        title="Новое место"
        isOpened={props.isAddPlacePopupOpen}
      >
        <button
          type="button"
          className="popup__close-icon"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title">Новое место</h3>
        <input
          type="text"
          className="popup__input"
          id="form-title"
          name="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error form-title-error"></span>
        <input
          type="url"
          className="popup__input"
          id="form-url"
          name="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error form-url-error"></span>
        <button type="submit" className="popup__submit-button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="updateAvatar"
        title="Обновить аватар"
        isOpened={props.isEditAvatarPopupOpen}
      >
        <h3 className="popup__title">Обновить аватар</h3>
        <input
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
        <button
          type="button"
          className="popup__close-icon"
          onClick={props.onClose}
        ></button>
        <button type="submit" className="popup__submit-button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="confirmDelete" title="Вы уверены?">
        <button
          type="button"
          className="popup__close-icon"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="submit" className="popup__submit-button">
          Да
        </button>
      </PopupWithForm>
      <ImagePopup card={props.selectedCard} isOpened={props.isImagePopupOpened} onClose={props.onClose} />
    </main>
  );
}

export default Main;
