import React from "react";
import "./css/recommendations.css";
import background from "../../asset/images/HomePageBackground.jpg";
import Trending from "../../components/Trending";
import GenresList from "../../components/GenresList";
import {
  useGetUserInfoQuery,
  usePopularQuery,
  useTopRatedQuery,
} from "../../store/movieApiSlice";
import SliderSection from "../../components/SliderSection";
import { useSelector } from "react-redux";

const Recommendations = () => {
  const { data: topRated, isLoading: topRatedLoading } = useTopRatedQuery();
  const { data: popular, isLoading: popularLoading } = usePopularQuery();
  const user = useSelector((state) => state.auth.user);
  const { data: userInfo } = useGetUserInfoQuery({ userId: user.uid });
  console.log(userInfo);
  return (
    <div
      className="recommendations"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pageContent">
        <GenresList />
        <div className="mainContainer">
          <Trending />
          <SliderSection
            data={topRated}
            isLoading={topRatedLoading}
            slidesNum={5}
            title="Top Rated"
          />
          <SliderSection
            data={popular}
            isLoading={popularLoading}
            slidesNum={5}
            title="Popular"
          />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
