import React, { Component } from "react";
import Slider from "react-slick";
import { data } from './data/data';
import "./Course.css";
import { StarFill } from 'react-bootstrap-icons';



export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
    };

    return (

      <div className="border-bottom py-3">
        <h2 className="pb-3">Hot and Fresh Courses</h2>
        <div className="px-4">
          <Slider {...settings} className="">
            {data.map((item) => (
              <div className="w-100">
                <div className="me-2">
                  <img src={item.picture} className='pic-slide' />
                  <h5 className='mb-1'>{item.course_name}</h5>

                  <small className='mb-1'>[{item.name}]</small>
                  <div className='d-flex justify-content-start align-item-center'>
                    <p className='m-0 txt-color p-align'><strong>{item.rateing}</strong></p>
                    <div className='mx-1'>
                      <StarFill className='star-color' />
                      <StarFill className='star-color' />
                      <StarFill className='star-color' />
                      <StarFill className='star-color' />
                      <StarFill className='star-color' />
                    </div>
                    <p className='fw-lighter p-align'>({item.rate_given})</p>
                  </div>
                  <div>
                    <small className='me-1'>{item.length}</small>.
                    <small className='mx-1'>{item.lecture}</small>.
                    <small className='mx-1'>{item.level}</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </div>
    );
  }
}