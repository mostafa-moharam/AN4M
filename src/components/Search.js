import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

function Search(props) {
  let [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  const nav = useNavigate();
  return (
    <div className={props.className}>
      <input
        type="text"
        name="search"
        placeholder="search"
        value={filter}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (filter === "") nav("/");
            else nav("/?search=" + filter);
          }
        }}
        onChange={filterHandler}
      />
      <Link
        className="searchButton"
        to={filter ? "all movies/?search=" + filter : null}
      >
        <FiSearch />
      </Link>
    </div>
  );
}
export default Search;
