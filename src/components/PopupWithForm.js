function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name}`}>
    <form
      className="popup__container form"
      name={props.name}
      noValidate
    >
      <button type="button" className="popup__close-icon"></button>
      <h3 className="popup__title">{props.title}</h3>
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
  )
}