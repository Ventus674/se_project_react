import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleOpenAddClothingModal,
  weatherData,
  onLoginClick,
  onRegisterClick,
}) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  const userInitial = currentUser?.name?.charAt(0).toUpperCase();
  return (
    <header className="header">
      <div className="header_side_left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="wtwr logo" />
        </Link>

        <p className="header__date">
          <time className="header__datetime" dateTime="now">
            {dateStr}
          </time>
          , {weatherData.city}
        </p>
      </div>
      <div className="header_side_right">
        <ToggleSwitch />
        {currentUser && (
          <button
            onClick={handleOpenAddClothingModal}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
        )}

        {!currentUser ? (
          <>
            <button onClick={onLoginClick} className="header__auth-btn">
              Login
            </button>
            <button onClick={onRegisterClick} className="header__auth-btn">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar-placeholder">
                    {userInitial}
                  </div>
                )}
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
