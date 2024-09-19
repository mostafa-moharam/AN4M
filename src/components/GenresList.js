import { Link } from "react-router-dom";
import { useListGenresQuery } from "../store/movieApiSlice";
import LinkComponent from "./LinkComponent";
import "./css/genresList.css";

const GenresList = () => {
  const { data, isLoading } = useListGenresQuery();
  return (
    <div className="genresList">
      {isLoading ? null : (
        <aside className="genres">
          <h1>Genres</h1>
          <nav>
            <ul>
              {data?.genres?.map((link) => (
                <Link
                  className="genresLink"
                  key={link.id}
                  to={"/category/" + link.id + "?page=1"}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
};

export default GenresList;
