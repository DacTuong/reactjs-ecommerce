import React from "react";

const CarouselDetail = ({ images }) => {
  return (
    <div className="slider-detail white-bg">
      <div className="bgfullscreen-gallery"></div>
      <div className="feature-img">
        <div className="thubmail-slide full">
          <div className="prev"></div>
          <div className="next"></div>
          <div className="slide-image">
            {images.map((img, index) => (
              <div className="item-img" key={index}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselDetail;
