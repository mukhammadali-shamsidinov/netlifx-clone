import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function SimpleSimpleSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
      <div className="slider">
        <h1 style={{color: "white"}}>Trending Now</h1>
        <Slider {...settings}>
         <Card />
         <Card/>
         <Card />
         <Card/>
         <Card />
         <Card/>
        </Slider>
      </div>
    );
  }
  
  
