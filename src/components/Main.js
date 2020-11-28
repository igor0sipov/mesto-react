function Main() {

  function handleEditProfileClick() {
    document.querySelector('.edit-profile').classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.update-avatar').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.add-place').classList.add('popup_opened');
  }

  return (
    <main className="main sizer">
      <section className="profile profile_spaced sizer">
        <div className="profile__avatar-wrapper">
          <img
            src="./images/user.png"
            alt="User Avatar"
            className="profile__avatar"
          />
          <button className="profile__edit-avatar-button" onClick={handleEditAvatarClick}>
            <img
              src="./images/edit-avatar-icon.svg"
              alt=""
              className="profile__edit-avatar-icon"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">Славик Сычёв</h1>
          <p className="profile__bio">Исследователь интернета</p>
          <button className="profile__edit-button" onClick={handleEditProfileClick}></button>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <ul className="elements">
        <template className="card-template">
          <li className="element">
            <button className="element__delete-button"></button>
            <img src="#" alt="#" className="element__picture" />
            <h2 className="element__name"></h2>
            <figure className="element__like">
              <button className="element__like-button"></button>
              <figcaption className="element__like-counter">0</figcaption>
            </figure>
          </li>
        </template>
      </ul>

      <section className="popup edit-profile">
        <form
          className="popup__container form"
          name="editProfileForm"
          noValidate
        >
          <button type="button" className="popup__close-icon"></button>
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
        </form>
      </section>

      <section className="popup add-place">
        <form className="popup__container form" name="addPlaceForm" noValidate>
          <button type="button" className="popup__close-icon"></button>
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
        </form>
      </section>

      <section className="popup confirm-delete">
        <form
          className="popup__container form"
          name="confirmCardDelete"
          noValidate
        >
          <button type="button" className="popup__close-icon"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__submit-button">
            Да
          </button>
        </form>
      </section>

      <section className="popup update-avatar">
        <form className="popup__container form" name="updateAvatar" noValidate>
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
          <button type="button" className="popup__close-icon"></button>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </form>
      </section>

      <section className="popup fullsize-picture">
        <figure className="popup__container">
          <button type="button" className="popup__close-icon"></button>
          <img src="#" alt="#" className="popup__picture" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Main;
