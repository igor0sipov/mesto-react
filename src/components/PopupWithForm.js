function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpened && `popup_opened`
      }`}
    >
      <form className="popup__container form" name={props.name} noValidate>
        {props.children}
      </form>
    </section>
  );
}

export default PopupWithForm;