import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export default function LoginModal({
  onClose,
  isOpen,
  onLogin,
  switchToRegister,
}) {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ email: "", password: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <ModalWithForm
      title="Log In"
      name="login"
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
    >
      <label className="modal__label">
        Email
        <input
          name="email"
          type="email"
          className="modal__input"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          name="password"
          type="password"
          className="modal__input"
          required
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </label>

      <button
        type="button"
        className="modal__signup-button"
        onClick={switchToRegister}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}
