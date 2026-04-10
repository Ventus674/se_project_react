import "../ItemModal/ItemModal.css";

function ModalWithForm({
  isOpen,
  onClose,
  children,
  title,
  buttonText,
  name,
  handleSubmit,
  isSubmitDisabled = false,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal__container modal__container_type_form"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        ></button>
        <form className="modal__form" name={name} onSubmit={handleSubmit}>
          {children}
          <button
            className={`modal__submit ${
              !isSubmitDisabled ? "modal__submit_active" : ""
            }`}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
