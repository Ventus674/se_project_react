import "./Sidebar.css";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar() {
  const currentUser = useContext(CurrentUserContext);
  const userInitial = currentUser?.name?.charAt(0).toUpperCase();

  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt="Terrence Tegegne profile picture"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default Sidebar;
