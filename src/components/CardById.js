import React from "react";
import { useMovieQuery } from "../store/movieApiSlice";
import Card from "./Card";

const CardById = (props) => {
  const { data, isSuccess } = useMovieQuery({ movieId: props.movieId });
  return (
    <div>
      {isSuccess ? (
        <Card
          key={data.id}
          image={
            "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/" +
            data.poster_path
          }
          name={data.title}
          rating={data.vote_average / 2}
          id={data.id}
        />
      ) : null}
      <p></p>
    </div>
  );
};

export default CardById;
