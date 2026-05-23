import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function RegisterModal({
  onClose,
  isOpen,
  onRegister,
  switchToLogin,
}) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      buttonText="Sign Up"
    >
      <label className="modal__label">
        Email
        <input
          name="email"
          type="email"
          placeholder="Email"
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
          placeholder="Password"
          className="modal__input"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          required
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          required
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        className="modal__login-button"
        onClick={switchToLogin}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
}
