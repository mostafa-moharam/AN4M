import React, { useState } from "react";
import { useParams } from "react-router";
import styles from "./css/categories.module.css";
import {
  useListGenresQuery,
  useSearchWithQuery,
} from "../../store/movieApiSlice";
import background from "../../asset/images/HomePageBackground.jpg";
import MovieList from "../../components/MovieList";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Loading from "./../../components/Loading";

const Categories = () => {
  const category = useParams().category;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page"));
  const { data: listGenres } = useListGenresQuery();
  const genre = listGenres?.genres.filter(
    (genre) => genre.id === parseInt(category)
  )[0].name;
  const { data, isLoading } = useSearchWithQuery({
    GenreId: category,
    page: searchParams.get("page"),
  });
  console.log(data, isLoading);

  return (
    <div
      className={styles.categories}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>{genre}</h1>
      <div className={styles.cardContainer}>
        {isLoading ? <Loading /> : <MovieList data={data?.results} />}
      </div>
      <div className="pagination">
        {page ? (
          <Pagination
            count={500}
            color="primary"
            page={parseInt(page)}
            onChange={(_, p) => {
              searchParams.set("page", p);
              setSearchParams(searchParams);
              setPage(p);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Categories;
