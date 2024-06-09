import "./css/allMovies.css";
import background from "../../asset/images/HomePageBackground.jpg";
import { useSearchQuery } from "../../store/movieApiSlice";
import MovieList from "../../components/MovieList";
import Loading from "../../components/Loading";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import GenresList from "../../components/GenresList";

const HomePage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page");
  let search = searchParams.get("search");
  if (!search) search = "";
  useEffect(() => {
    if (!page) {
      setSearchParams("?page=1&search=" + search);
    }
  }, [page, search, setSearchParams]);
  const handleNav = (p) => {
    if (p) setSearchParams("?page=" + p + "&search=" + search);
  };

  const { data, isLoading } = useSearchQuery({ page, search });
  if (page) page = parseInt(page);
  return (
    <div className="homePage" style={{ backgroundImage: `url(${background})` }}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pageContent">
          <GenresList />
          <div className="cardContainer">
            <MovieList data={data?.results} />{" "}
          </div>
        </div>
      )}

      <div className="pagination">
        {page ? (
          <Pagination
            count={search === "" ? 501 : data?.total_pages}
            color="primary"
            page={page}
            onChange={(e, p) => {
              handleNav(p);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
export default HomePage;
