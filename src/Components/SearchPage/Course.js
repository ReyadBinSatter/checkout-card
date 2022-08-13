import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import "./Course.css";

const Course = ({ course }) => {
    const { picture, name, description, prize, rateing, rate_given, course_name, length, lecture, level } = course;

    return (
        <div>
            <CardGroup>
                <Card className='w-100 border-0'>
                    <Card.Body className='border-bottom'>
                        <Row>
                            <Col sm={4}><img className='pic' src={picture} alt="" /></Col>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={10}>
                                        <h5 className='mb-1'>{course_name}</h5>
                                        <p className='mb-1'>{description}</p>
                                        <small className='mb-1'>{name}</small>
                                        <div className='d-flex justify-content-start align-item-center'>
                                            <p className='m-0 txt-color p-align'><strong>{rateing}</strong></p>
                                            <div className='mx-1'>
                                            <StarFill className='star-color'/>
                                            <StarFill className='star-color'/>
                                            <StarFill className='star-color'/>
                                            <StarFill className='star-color'/>
                                            <StarFill className='star-color'/>
                                            </div>
                                            <p className='fw-lighter p-align'>({rate_given})</p>
                                        </div>
                                        <div>
                                            <small className='me-1'>{length}</small>.
                                            <small className='mx-1'>{lecture}</small>.
                                            <small className='mx-1'>{level}</small>
                                        </div>
                                    </Col>
                                    <Col sm={2}><h5 className='position-absolute  end-0'>{prize}</h5></Col>
                                </Row>



                            </Col>
                        </Row>


                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Course;