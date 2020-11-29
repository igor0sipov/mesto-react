import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpened, setImagePopupOpened] = React.useState(false);
  const [isDeletePopupOpened, setDeletePopupOpened] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpened(true);
  }

  function handleDeleteButtonClick() {
    setDeletePopupOpened(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpened(false);
    setDeletePopupOpened(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onDeleteConfirm={handleDeleteButtonClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="editProfile"
        title="Редактировать профиль"
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
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
      </PopupWithForm>

      <PopupWithForm
        name="addPlace"
        title="Новое место"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
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
      </PopupWithForm>

      <PopupWithForm
        name="updateAvatar"
        title="Обновить аватар"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="confirmDelete"
        title="Вы уверены?"
        isOpened={isDeletePopupOpened}
        onClose={closeAllPopups}
        buttonText="Да"
      ></PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpened={isImagePopupOpened}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
