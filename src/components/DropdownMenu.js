import { NavLink } from "react-router-dom";
import "./css/dropdownMenu.css";

function DropdownMenu(props) {
  return (
    <div>
      <div className="dropdownMenu">
        <img src={props.icon} alt="icon" />
        <p>{props.name}</p>
      </div>
      <div className="Categories">
        {props.list.map((link, idx) => (
          <NavLink
            key={idx}
            className={props.linkClassName}
            to={"category/" + link}
          >
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default DropdownMenu;
