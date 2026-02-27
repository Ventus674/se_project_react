import "../ItemModal/ItemModal.css";
import "./DeleteModal.css";

function DeleteModal({ onClose, handleDeleteItem, isOpen, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_type_delete">
        <p className="modal__text modal__text_type_delete">
          Are you sure you want to delete this item?
        </p>
        <p className="modal__text modal__text_type_delete">
          This action is irreversible
        </p>
        <button
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        ></button>
        <button
          type="button"
          className="modal__delete-btn"
          onClick={() => handleDeleteItem(card._id)}
        >
          Yes, delete item
        </button>
        <button type="button" className="modal__cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteModal;
