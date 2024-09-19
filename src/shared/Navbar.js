import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuClipboardList } from "react-icons/lu";
import "./css/navbar.css";
import Search from "../components/Search";
import logo from "../asset/icons/logo.jpg";
import { setLogout } from "../store/authSlice";
import { PiSignOutBold } from "react-icons/pi";
import { GrDocumentTest } from "react-icons/gr";

const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [NavState, setNavState] = useState(false);
  const changeNavState = () => {
    if (window.scrollY >= 40) setNavState(true);
    else setNavState(false);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };
  window.addEventListener("scroll", changeNavState);

  return (
    <>
      <div className={NavState ? "scrolledNav nav" : "nav"}>
        <div className="navLabel">
          <NavLink to="/" className="title">
            <img src={logo} alt="" className="logo" />
            AN4M
          </NavLink>
          {}
          <Search className="navSearch" />
        </div>

        <div className="navButton d-none d-xl-flex">
          <NavLink className="Button" to="all movies">
            <LuClipboardList />
          </NavLink>
          {isAuthenticated ? (
            <NavLink className="favButton" to="favorites">
              <IoMdHeartEmpty />
            </NavLink>
          ) : null}
        </div>
        {isAuthenticated ? (
          <div className="logSection">
            <p>{user.sub}</p>
            <button onClick={handleLogout} className="logoutButton">
              <PiSignOutBold />
            </button>
          </div>
        ) : (
          <NavLink className="loginButton" to={"login"}>
            <FaRegUserCircle />
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navbar;
