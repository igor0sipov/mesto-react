function Card(props) {
  return (
    <li className="element" key={props.name}>
      <button className="element__delete-button"></button>
      <img src={props.link} alt="#" className="element__picture" />
      <h2 className="element__name">{props.cardName}</h2>
      <figure className="element__like">
        <button className="element__like-button"></button>
        <figcaption className="element__like-counter">{props.likes}</figcaption>
      </figure>
    </li>
  );
}


export default Card;