import React from "react";
import "./css/favpage.css";
import { useGetFavouriteQuery } from "../../store/movieApiSlice";
import CardById from "../../components/CardById";
import { useSelector } from "react-redux";
import background from "../../asset/images/HomePageBackground.jpg";
import Loading from "./../../components/Loading";

const FavPage = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetFavouriteQuery({ userId: user.uid });
  console.log(data?.listFavorite);
  return (
    <div className="favPage" style={{ backgroundImage: `url(${background})` }}>
      <div className="pageContent">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.listFavorite.length === 0 ? (
              <h1>please choose your favourite</h1>
            ) : (
              <>
                <div className="cardContainer">
                  {data?.listFavorite.map((e) => (
                    <CardById key={e} movieId={e} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default FavPage;
