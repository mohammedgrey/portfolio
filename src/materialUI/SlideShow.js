import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SlideShow({ images }) {
  return (
    <Carousel autoPlay={true} centerMode={true}>
      {images.map((image) => {
        return (
          <div
            style={{
              paddingTop: "20px",
              marginLeft: "15px",
            }}
          >
            <img src={image} alt="Not Found" style={{ width: "300px", maxWidth: "90%", maxHeight: "150px" }} />
          </div>
        );
      })}
    </Carousel>
  );
}
export default SlideShow;
