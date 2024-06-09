import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/sideMenu.css";

const SideMenu = ({ categories }) => {
  const [menuStatus, setMenuStatus] = useState(true);

  return (
    <div className="sideMenu">
      <ul className="menu" onClick={() => setMenuStatus(!menuStatus)}>
        <span></span>
        {categories?.genres.map((genre) => (
          <Link
            key={genre.id}
            className={menuStatus ? "menuContent" : "h-menuContent"}
            to={"/category/" + genre.name}
          >
            {genre.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
