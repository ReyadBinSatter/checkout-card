import React, { Component } from "react";
import Slider from "react-slick";
import { StudentLearnData } from './data/StudentLearnData';
import "./Course.css";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      initialSlide: 0,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1
    };
    return (
      <div>
        <h2 className="py-3">Students also learn</h2>
        <div className="px-2">
          <Slider {...settings}>

            {StudentLearnData.map((item) => (
              
              <div className="mx-2">
                <div className="border border-dark topic mb-2 d-flex align-items-center justify-content-center">
                  <h5 className="">{item.topic}</h5>
                  
                </div>
              </div>

            ))}


          </Slider>
        </div>

      </div>
    );
  }
}