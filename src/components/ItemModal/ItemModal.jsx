import "./itemModal.css";

function ItemCardModal({ isOpen, card, onClose }) {
  if (!card) return null;

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <img src={card.link} alt={card.name} className="modal__image" />
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
        <div>
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCardModal;
