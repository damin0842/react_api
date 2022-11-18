import React from "react";
import { useState, useEffect } from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeBtn from "../include/YoutubeBtn";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyB39TEfiNf9XIwyFL_F0JtUVyOixriKt5s&maxResults=30&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyB39TEfiNf9XIwyFL_F0JtUVyOixriKt5s&maxResults=30&type=video"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      //.then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=webstoryboy&key=AIzaSyB39TEfiNf9XIwyFL_F0JtUVyOixriKt5s&maxResults=10&type=video"
    )
      .then((response) => response.json())
      .then((result) => setRandom(result.items))
      //.then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "reference api"]} />
        <YoutubeSlider random={random} />
        <YoutubeSearch onSearch={search} />
        <YoutubeBtn onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
