import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";
import api from "../utils/api";
import editAvatarIconPath from "../images/edit-avatar-icon.svg";

function Main(props) {
  const user = React.useContext(CurrentUserContext);
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

  return (
    <main className="main sizer">
      <section className="profile profile_spaced sizer">
        <div className="profile__avatar-wrapper">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="profile__avatar"
          />
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
          <h1 className="profile__name">{user.name}</h1>
          <p className="profile__bio">{user.about}</p>
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

      <ul className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteButton={props.onDeleteButton}
              onLikeButton={props.onLikeButtonClick}
              currentUser={user}
              handleCardLike={handleCardLike}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
