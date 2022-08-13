import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import '../Common.css';

const Course1 = ({ course }) => {
    const { picture, prize,course_name } = course;
    return (
        <div>
            <CardGroup>
                <Card className='w-100 border-0 rounded-0'>
                    <Card.Body className=''>
                        <Row>
                            <Col sm={2}><img className='pic1 d-flex align-items-center justify-content-start' src={picture} alt="" /></Col>
                            <Col sm={8}>
                                <h5 className='mb-1 d-flex align-items-center justify-content-start'>{course_name}</h5>
                            </Col>
                            
                            <Col sm={2}><h5 className='position-absolute  end-0 me-2'>{prize}</h5></Col>
                        </Row>


            </Card.Body>
        </Card>
            </CardGroup >
        </div >
    );
};

export default Course1;