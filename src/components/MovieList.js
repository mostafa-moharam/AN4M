import React from "react";
import "./css/movieList.css";
import Card from "./Card";

const MovieList = ({ data }) => {
  return (
    <div className="movieList">
      {data?.map((card) => (
        <Card
          key={card.id}
          image={
            "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/" +
            card.poster_path
          }
          name={card.title}
          rating={card.vote_average / 2}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
