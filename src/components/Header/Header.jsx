import logo from "../../assets/Logo.svg";
import avatar from "../../assets/Avatar.svg";
import "./Header.css";

function Header({ handleOpenAddClothingModal }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="wtwr logo" />
      <p className="header__date">
        <time className="header__datetime" dateTime="now">
          {dateStr}
        </time>
        , New York
      </p>
      <button
        className="header__add-clothes-btn"
        onClick={handleOpenAddClothingModal}
      >
        + Add Clothes
      </button>
      <p className="header__username">Terrence Tegegne</p>
      <img
        className="header__avatar"
        src={avatar}
        alt="Terrence Tegegne profile picture"
      />
    </header>
  );
}
export default Header;
