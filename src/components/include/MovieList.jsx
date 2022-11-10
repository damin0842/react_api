import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
function MoviePopular(props) {
  return (
    <li className="movielank">
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <span className="rank">{props.rank + 1}</span>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <em>
          <span className="title">{props.movie.title}</span>
          {/* <span className="star">{props.movie.vote_average}</span> */}
        </em>
      </a>
    </li>
  );
}
const MovieList = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">  
        <div className="movie__inner">
          <div className="movie__slider"> 
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={"3"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {props.lists.map((movies, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <MoviePopular key={index} rank={index} movie={movies} />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieList;