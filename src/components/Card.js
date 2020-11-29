function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button
        className="element__delete-button"
        onClick={props.onDeleteButton}
      ></button>
      <img
        src={props.card.link}
        alt="#"
        className="element__picture"
        onClick={handleClick}
      />
      <h2 className="element__name">{props.card.name}</h2>
      <figure className="element__like">
        <button className="element__like-button"></button>
        <figcaption className="element__like-counter">
          {props.card.likes.length}
        </figcaption>
      </figure>
    </li>
  );
}

export default Card;
