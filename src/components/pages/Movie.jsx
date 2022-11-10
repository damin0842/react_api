import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [lists, setlists] = useState([]);

  const search = async (query) => {
   
   await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f97a45e0661e5a39f4bebca0df9e45fe&language=ko-KOR&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=f97a45e0661e5a39f4bebca0df9e45fe&language=ko-KOR&page=1&include_adult=false&query=마블"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f97a45e0661e5a39f4bebca0df9e45fe&language=ko-kor&page=1"
    )
      .then((response) => response.json())
      .then((result) => setlists(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "reference api"]} />
        <MovieList lists={lists} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Movie;

