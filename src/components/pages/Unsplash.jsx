import React from "react";
import { useState, useEffect } from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import AboutCont from "../include/AboutCont";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashSlider from "../include/UnsplashSlider";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=7652_-lwdjcvatvgiypfNoF1mFrEDu3UT67N1mO9-0A&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results));
    //.then((result) => console.log(result))
    //.catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=7652_-lwdjcvatvgiypfNoF1mFrEDu3UT67N1mO9-0A&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result));
    //.then((result) => console.log(result))
    //.catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=7652_-lwdjcvatvgiypfNoF1mFrEDu3UT67N1mO9-0A&count=10"
    )
      .then((response) => response.json())
      .then((result) => setRandom(result));
    //.then((result) => console.log(result))
    //.catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn />
        <UnsplashCont images={images} />
        <AboutCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
