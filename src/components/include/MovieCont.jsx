import React from "react";

const MovieBox = ({ id, name }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{id}</span>
        <span className="name">{name}</span>
      </a>
    </li>
  );
};
const MovieCont = ({ movies }) => {
  //console.log(movies);
  return (
    <section className="cont__Movie">
      <div className="container">
        <div className="Movie__inner">
          <h2>movie</h2>
          <ul className="Movie__list">
            {movies.map((mov, idx) => (
              <MovieBox key={idx} id={mov.id} name={mov.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieCont;
