import React from "react";

function MovieItem(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.poster_path}
        ></img>

        <em>
          <span className="title">{props.movie.title}</span>
          <span className="star">{props.movie.vote_average}</span>
        </em>
      </a>
    </li>
  );
}

const MovieList = (props) => {
  console.log(props);
  return (
    <section className="list__movie">
      <div className="listainer">
        <div className="movie__inner">
          <ul>
            {props.movieList.map((movieList, index) =>
              index < 4 ? <MovieItem key={index} movie={movieList} /> : null
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
