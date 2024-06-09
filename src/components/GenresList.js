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
                <LinkComponent key={link.id} id={link.id} name={link.name} />
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  );
};

export default GenresList;
