import React from "react";

import Card from "./Card";
import api from "../utils/api";
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
      setCards(cards);
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

      <ul className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteButton={props.onDeleteConfirm}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
