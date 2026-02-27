import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function AddItemModal({ isOpen, onClose, handleAddItemSubmit }) {
  // onAddItem refers to the submit handler declared in App.jsx
  // const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  //   // ...
  const { values, handleChange, resetForm } = useForm({
    name: "",
    weather: "hot",
    imageUrl: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    handleAddItemSubmit(values, resetForm);
  }

  return (
    // Don't forget to pass appropriate props to ModalWithForm
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="New Garment"
      buttonText="Add garment"
      name="add-garment-form"
      handleSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <label className="modal__label" htmlFor="add-garment-name">
          Name
          <input
            className="modal__input"
            id="add-garment-name"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
        </label>

        <label className="modal__label" htmlFor="add-garment-url">
          Image
          <input
            className="modal__input"
            id="add-garment-url"
            type="url"
            placeholder="Image URL"
            name="imageUrl"
            onChange={handleChange}
            value={values.imageUrl}
          />
        </label>
      </fieldset>
      <fieldset className="modal__fieldset">
        <legend>Select the weather type:</legend>
        <div className="modal__radio-option">
          <input
            className="modal__radio-input"
            type="radio"
            id="Hot"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label className="modal__radio-label" htmlFor="Hot">
            Hot
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            className="modal__radio-input"
            type="radio"
            id="Warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label className="modal__radio-label" htmlFor="Warm">
            Warm
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            className="modal__radio-input"
            type="radio"
            id="Cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label className="modal__radio-label" htmlFor="Cold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
// }

export default AddItemModal;
