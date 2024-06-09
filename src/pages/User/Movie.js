import React, { useState } from "react";
import { useParams } from "react-router";
import Card from "./../../components/Card";
import "./css/movie.css";
import background from "../../asset/images/HomePageBackground.jpg";
import { FaPlay } from "react-icons/fa";
import { Rating } from "@mui/material";
import {
  useAddRateMutation,
  useGetRateQuery,
  useGetUserInfoQuery,
  useMovieQuery,
  useRelatedMoviesQuery,
  useVideoQuery,
} from "../../store/movieApiSlice";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import SliderSection from "../../components/SliderSection";
import GenresList from "../../components/GenresList";
import GenresSlider from "../../components/GenresSlider";
import { useSelector } from "react-redux";
import Overlay from "../../components/Overlay";

const Movie = () => {
  const [overlayToggler, setOverlayToggler] = useState(false);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const movieId = useParams().movie;
  const { data, isLoading } = useMovieQuery({ movieId });
  const { data: relatedMovies } = useRelatedMoviesQuery({ id: movieId });
  const { data: trailer } = useVideoQuery({ movieId });
  const { data: userInfo } = useGetUserInfoQuery({ userId: user.uid });
  let { data: rateData } = useGetRateQuery({
    movieId,
    userId: user?.uid,
  });
  const [prevValue, setPrevValue] = useState(rateData?.rate.rate);
  let [rate, { isSuccess: isRatedSuccessfully }] = useAddRateMutation();
  console.log("isRatedSuccessfully", isRatedSuccessfully);
  const RatingFun = (_, value) => {
    if (value) {
      setPrevValue(value);
    }
    const data = {
      userId: user?.uid,
      movieId: movieId,
      rate: value === null ? prevValue : value,
    };
    rate(data)
      .unwrap()
      .then(() => {
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOverlay = () => {
    setOverlayToggler(!overlayToggler);
  };
  return (
    <div
      className="movie"
      style={{
        backgroundImage:
          data?.backdrop_path == null
            ? `url(${background})`
            : `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
      }}
    >
      <div className="pageContent">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <GenresList />
            <div className="movieContent">
              <div className="movieInfo">
                <div className="movieDetails">
                  <div className="movieTitle">
                    <h2>{data?.original_title}</h2>
                    <p>[{data?.original_language}]</p>
                  </div>
                  <div className="categories">
                    {data?.genres?.map((g) => (
                      <Link key={g.id} to={"/category/" + g.id + "?page=1"}>
                        {g.name}
                      </Link>
                    ))}
                  </div>
                  <hr />
                  <div className="overview">
                    <h3>Overview</h3>
                    <p>
                      {data?.overview
                        ? data.overview
                        : "We don't have an overview translated in English. Help us expand our database by adding one."}
                    </p>
                  </div>
                  <p>{userInfo?.count}</p>
                  {trailer ? (
                    <>
                      <button onClick={handleOverlay} className="openButton">
                        <FaPlay />
                        <span>trailer</span>
                      </button>
                      <Overlay
                        handleOverlay={handleOverlay}
                        overlayToggler={overlayToggler}
                      >
                        {overlayToggler ? (
                          <iframe
                            width="90%"
                            height="90%"
                            src={
                              "https://www.youtube.com/embed/" +
                              trailer.results[0].key
                            }
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        ) : null}
                      </Overlay>
                    </>
                  ) : null}
                  {data?.status ? (
                    <p>
                      {data.status} : {data.release_date}
                    </p>
                  ) : null}
                  <div className="production">
                    {data?.production_companies ? (
                      <div className="companies">
                        <p>produced by : </p>
                        {data.production_companies.map((c) => (
                          <p key={c.id}>{c.name}</p>
                        ))}
                      </div>
                    ) : null}
                    {data?.production_countries ? (
                      <div className="countries">
                        <p>produced in : </p>
                        {data.production_countries.map((c, id) => (
                          <p key={id}>{c.name}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <>
                    {isAuthenticated ? (
                      <span className="rating">
                        Rating
                        <Rating
                          name="half-rating"
                          defaultValue={rateData?.rate.rate}
                          precision={0.5}
                          onChange={(e, value) => RatingFun(e, value)}
                        />
                      </span>
                    ) : null}
                  </>
                </div>
                <Card
                  className="movieCard"
                  image={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                  name={data?.title}
                  movieName={data?.title}
                  rating={data?.vote_average / 2}
                  situation={true}
                  categories={data?.genres}
                />
              </div>
              <hr />
              <div className="Recommendations">
                {relatedMovies?.results.length === 0 ? null : (
                  <SliderSection
                    slidesNum={5}
                    data={relatedMovies}
                    title="related movies"
                  />
                )}

                {data?.genres.map((genre) => (
                  <GenresSlider
                    key={genre.id}
                    slidesNum={5}
                    genreId={genre.id}
                    title={genre.name}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Movie;
