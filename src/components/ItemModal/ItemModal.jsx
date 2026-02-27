import "./ItemModal.css";

function ItemCardModal({ isOpen, card, onClose, handleOpenDeleteModal }) {
  if (!card) return null;

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
        <div>
          <div className="modal__description">
            <h2 className="modal__text">{card.name}</h2>
            <button
              type="button"
              className="modal__open-delete-btn"
              onClick={() => handleOpenDeleteModal(card)}
            >
              Delete Item
            </button>
          </div>

          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCardModal;
