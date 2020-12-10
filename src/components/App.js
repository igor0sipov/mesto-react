import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  React.useEffect(() => {
    api.getUserInfo().then((userInfo) => setCurrentUser(userInfo));
  }, []);

  const [currentUser, setCurrentUser] = React.useState({
    name: "User Name",
    about: "User Bio",
  });
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpened, setImagePopupOpened] = React.useState(false);
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

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpened(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((newProfileInfo) => setCurrentUser(newProfileInfo));
    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateAvatar(avatar)
      .then((newProfileInfo) => setCurrentUser(newProfileInfo));
    closeAllPopups();
  }

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  function handleCardLike(card, isLiked) {
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((result) => {
      if (result.ok) {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      } else {
        console.log("Ошибка: ", result.status);
      }
    });
  }

  function handleAddCard({ name, link }) {
    api.addCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onLikeClick={handleCardLike}
          onDeleteClick={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        
        <AddPlacePopup
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleAddCard}
        />

        <EditAvatarPopup
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup
          card={selectedCard}
          isOpened={isImagePopupOpened}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
