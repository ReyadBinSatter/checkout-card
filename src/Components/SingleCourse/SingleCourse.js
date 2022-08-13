import React from 'react';
import './SingleCourse.css';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
// import { StarFill } from 'react-bootstrap-icons';
import { CartState } from '../../Context/Context';
import Rating from './Rating';

const SingleCourse = ({ course }) => {

    const {
        state: { cart },
        dispatch,
    } = CartState();
    const { picture, name, description, prize, rating, rate_given, course_name, length, lecture, level } = course;
    return (
        <div>
            <CardGroup>
                <Card className='w-100 border-0'>
                    <Card.Body className='border-bottom'>
                        <Row>
                            <Col sm={4}><img className='pic' src={picture} alt="" /></Col>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={8}>
                                        <h5 className='mb-1 d-flex justify-content-start'>{course_name}</h5>
                                        <p className='mb-1 d-flex justify-content-start align-items-center'>{description}</p>
                                        <small className='mb-1 d-flex justify-content-start'>{name}</small>
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <p className='m-0 txt-color p-align'><strong>{rating}</strong></p>
                                            <div className='mx-1'>
                                                <Rating rating={rating}></Rating>

                                            </div>
                                            <p className='fw-lighter p-align'>({rate_given})</p>
                                        </div>
                                        <div className='d-flex justify-content-start'>
                                            <small className='me-1'>{length}</small>.
                                            <small className='mx-1'>{lecture}</small>.
                                            <small className='mx-1'>{level}</small>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className=''>
                                            <h5 className='position-absolute  end-0'>{prize}$</h5>
                                            {cart.some((p) => p.id === course.id) ? (
                                                <span className='position-absolute  end-0 bottom-0 mb-4'>already added</span>
                                            ) : (
                                                <Button
                                                    className='position-absolute  end-0 bottom-0 mb-4'
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "ADD_TO_CART",
                                                            payload: course,
                                                        })
                                                    }

                                                >
                                                    Add to Cart
                                                </Button>
                                            )}
                                        </div>
                                    </Col>
                                </Row>



                            </Col>
                        </Row>


                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default SingleCourse;