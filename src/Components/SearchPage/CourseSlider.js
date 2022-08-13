import React from 'react';
import Slider from "react-slick";
import { data } from './data/data';
// import { Card, Carousel, CarouselItem } from 'react-bootstrap';
// import { StarFill } from 'react-bootstrap-icons';
import ReactCardSlider from 'react-card-slider-component';
const settings = {
    dots: true,
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
const CourseSlider = ({ course }) => {
    
    // const { picture, name, description, prize, rateing, rate_given, course_name, length, lecture, level } = course;
    return (
        <div className='w-100 d-flex align-items-center justify-content-center text-dark'>
            {/* <Slider {...settings}>
                {data.map((item) => (
                    <div>
                        <div>
                            <img src={item.picture} alt="" srcset="" />
                            <h1>{item.name}</h1>
                        </div>
                    </div>
                ))}
            </Slider> */}
            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
            {/* <Card>
                <Card.Img variant="top" className='pic' src={picture} />
                <Card.Body>
                    <h5 className='mb-1'>{course_name}</h5>
                    <small className='mb-1'>{name}</small>
                    <div className='d-flex justify-content-start align-item-center'>
                        <p className='m-0 txt-color p-align'><strong>{rateing}</strong></p>
                        <div className='mx-1'>
                            <StarFill className='star-color' />
                            <StarFill className='star-color' />
                            <StarFill className='star-color' />
                            <StarFill className='star-color' />
                            <StarFill className='star-color' />
                        </div>
                        <p className='fw-lighter p-align'>({rate_given})</p>
                    </div>
                    <div className='mt-0'>
                        <small className='me-1'>{length}</small>.
                        <small className='mx-1'>{lecture}</small>.
                        <small className='mx-1'>{level}</small>
                    </div>
                    <h5 className=''>{prize}</h5>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default CourseSlider;