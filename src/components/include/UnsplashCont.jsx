import React from "react";

function UnsplashItem(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.image.id}`}>
        <img src={props.image.urls.regular} alt=""></img>
      </a>
    </li>
  );
}
const UnsplashCont = (props) => {
  //console.log(Movies);
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {props.images.map((images, index) => (
              <UnsplashItem key={index} image={images} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UnsplashCont;
