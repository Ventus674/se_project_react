import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCardModal({ isOpen, card, onClose, onCardDelete }) {
  if (!card) return null;

  const currentUser = useContext(CurrentUserContext);

  const isLoggedIn = !!currentUser;
  const isOwn = isLoggedIn && card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "" : "modal__delete-button_hidden"
  }`;

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
            {isOwn && (
              <button
                className={itemDeleteButtonClassName}
                onClick={() => onCardDelete(card)}
              >
                Delete item
              </button>
            )}
          </div>

          <p className="modal__text">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCardModal;
