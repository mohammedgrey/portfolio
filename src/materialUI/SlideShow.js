import React from "react";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SlideShow({ images }) {
  return (
    <Carousel autoPlay={true} showStatus={false} showThumbs={false} centerMode={true}>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            style={
              {
                // paddingTop: "20px",
                // marginLeft: "15px",
              }
            }
          >
            <img src={image} alt="Not Found" style={{ width: "500px", maxWidth: "100%", maxHeight: "250px" }} />
          </div>
        );
      })}
    </Carousel>
  );
}
export default SlideShow;
