import logo from "../../assets/Logo.svg";
import avatar from "../../assets/Avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleOpenAddClothingModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

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
        <ToggleSwitch onToggle={(unit) => console.log("Switched to", unit)} />
        <button
          className="header__add-clothes-btn"
          onClick={handleOpenAddClothingModal}
        >
          + Add Clothes
        </button>
        <Link className="header__link" to="/profile">
          <p className="header__username">Terrence Tegegne</p>
          <img
            className="header__avatar"
            src={avatar}
            alt="Terrence Tegegne profile picture"
          />
        </Link>
      </div>
    </header>
  );
}
export default Header;
