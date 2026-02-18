import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleOpenCard() {
    console.log("[ItemCard] clicked:", data);
    onCardClick(data);
  }

  return (
    <li className="itemCard">
      <h3 className="itemCard__title">{data.name}</h3>
      <img
        src={data.link}
        alt={data.name}
        className="itemCard__image"
        onClick={handleOpenCard}
      />
    </li>
  );
}

export default ItemCard;
