import React, { useCallback } from "react";
import Rating from "@mui/material/Rating";
import "./css/card.css";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useAddFavoriteMutation } from "../store/movieApiSlice";
import { useSelector } from "react-redux";

const Card = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [addFavorite] = useAddFavoriteMutation();
  const handleAddFav = useCallback(() => {
    addFavorite({ movieId: props.id, userId: user.uid });
  }, [addFavorite, props.id, user.uid]);
  return (
    <div className={props.movieName ? "card movieCard" : "card"}>
      {props.movieName ? (
        <div>
          <img src={props.image} alt="img" className="image" />
          <div className="cardTitle">
            <p>{props.name}</p>
            <Rating
              name="half-rating-read"
              value={props.rating}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      ) : (
        <Link to={"/movie/" + props.id}>
          <img src={props.image} alt="img" className="image" />
          <div className="cardTitle">
            <p>{props.name}</p>
            <div>
              <Rating value={props.rating} precision={0.1} readOnly />
            </div>
          </div>
        </Link>
      )}
      <div className="cardButtons">
        <button className="addFavouriteButton" onClick={handleAddFav}>
          <MdFavoriteBorder />
        </button>
      </div>
    </div>
  );
};
export default Card;
