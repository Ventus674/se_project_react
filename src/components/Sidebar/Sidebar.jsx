import "./Sidebar.css";
import avatar from "../../assets/Avatar.svg";

function Sidebar() {
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
