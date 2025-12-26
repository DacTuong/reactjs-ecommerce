import React, { useState } from "react";

const CarouselDetail = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((pre) => {
      if (pre >= images.length - 1) return pre;
      return pre + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((pre) => {
      if (pre <= 0) return pre;
      return pre - 1;
    });
  };

  const [show, setShow] = useState(false);

  return (
    <div className="slider-detail white-bg">
      {show && (
        <div>
          <div
            className="bgfullscreen-gallery"
            onClick={() => setShow(false)}
          ></div>
          <div className="wrap fullscreen-gallery white-bg">
            <div className="thumbnail-slide full">
              <div className="gallery-controls">
                <button className="slider-btn btn-prev" onClick={prev}>
                  <span>&lt;</span>
                </button>
                <button className="slider-btn btn-next" onClick={next}>
                  <span>&gt;</span>
                </button>
              </div>
              <div className="slide-image">
                <div
                  className="slide-track"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <div className="item-img">
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="count-gallery">
                <span>
                  {currentIndex + 1}/ {images.length}
                </span>
              </div>
            </div>

            <div className="thumbnail-nav">
              <div className="thumbnail-list">
                {images.map((img, index) => (
                  <div
                    className={`thumbnail-item ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="closefullScreen-gallery"
            onClick={() => setShow(false)}
          >
            X Đóng
          </div>
        </div>
      )}
      <div className="feature-img">
        <div className="thumbnail-slide">
          <div className="gallery-controls">
            <button className="slider-btn btn-prev" onClick={prev}>
              <span>&lt;</span>
            </button>
            <button className="slider-btn btn-next" onClick={next}>
              <span>&gt;</span>
            </button>
          </div>

          <div className="slide-image">
            <div
              className="slide-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <div
                  className="item-img"
                  key={index}
                  onClick={() => {
                    setShow(true);
                    setCurrentIndex(index);
                  }}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail-nav">
        <div className="thumbnail-list">
          {images.map((img, index) => (
            <div
              className={`thumbnail-item ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselDetail;
