import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import styles from "./css/aboutmovie.module.css";

const AboutMovie = (props) => {
  
  return (
  <>
    <Swiper
      style={{
        '--swiper-navigation-color': 'white',
        '--swiper-pagination-color': 'white',
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className={styles.swiper}
    >
      <div
        slot="container-start"
        className={styles.parallaxBg}
        style={{backgroundImage: `url(${props.image})`}}
                data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className={styles.title} data-swiper-parallax="-300">
          Slide 1
        </div>
        <div className={styles.subtitle} data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className={styles.text} data-swiper-parallax="-100">
          <p>
          description
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.title} data-swiper-parallax="-300">
          Slide 2
        </div>
        <div className={styles.subtitle} data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className={styles.text} data-swiper-parallax="-100">
          <p>
            description
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.title} data-swiper-parallax="-300">
          Slide 3
        </div>
        <div className={styles.subtitle} data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className={styles.text} data-swiper-parallax="-100">
          <p>
            description
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);
}
export default AboutMovie;