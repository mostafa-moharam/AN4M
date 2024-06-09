import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/bundle";
import styles from "./css/slider.module.css";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useAddFavoriteMutation } from "../store/movieApiSlice";
import { useSelector } from "react-redux";

const Slider = (props) => {
  const { user } = useSelector((state) => state.auth);
  const [addFavorite] = useAddFavoriteMutation();
  const handleAddFav = (movieId) => {
    addFavorite({ movieId: movieId, userId: user.uid });
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={props.slidesNum}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className={"mySwiper " + props.className}
      >
        {props.data?.results.map((el, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <Link to={"/movie/" + el.id} className="sliderLink">
              <p className={styles.title}>
                {el.title}
                <Rating value={el.vote_average / 2} precision={0.1} readOnly />
              </p>
              <img
                alt={el.name}
                src={"https://image.tmdb.org/t/p/original" + el.poster_path}
                className={styles.sliderImg}
              />
            </Link>
            <div className={styles.slideButtons}>
              <button
                className={styles.addFavouriteButton}
                onClick={() => handleAddFav(el.id)}
              >
                <MdFavoriteBorder />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
