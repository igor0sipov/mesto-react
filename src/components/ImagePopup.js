function ImagePopup() {
  return (
    <section className="popup fullsize-picture">
      <figure className="popup__container">
        <button type="button" className="popup__close-icon"></button>
        <img src="#" alt="#" className="popup__picture" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
