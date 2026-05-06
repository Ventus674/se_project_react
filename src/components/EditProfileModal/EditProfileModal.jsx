import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import { useForm } from "../../hooks/useForm";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues } = useForm({
    name: "",
    avatar: "",
  });

  useEffect(() => {
    if (currentUser && isOpen) {
      setValues({ name: "", avatar: "" });
    }
  }, [currentUser, isOpen]);

  const isFormValid = values.name.trim() !== "" && values.avatar.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      buttonText="Save changes"
      isSubmitDisabled={!isFormValid}
    >
      <label className="modal__label">
        Name:
        <input
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="modal__input"
          placeholder="Name"
          required
        />
      </label>
      <label className="modal__label">
        Avatar URL:
        <input
          type="url"
          value={values.avatar}
          onChange={(e) => setValues({ ...values, avatar: e.target.value })}
          className="modal__input"
          placeholder="Avatar URL"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
