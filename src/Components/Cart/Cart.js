import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { Container, Row, Col, Button, InputGroup, Form, Card, CardGroup } from 'react-bootstrap';
import { Trash, X } from 'react-bootstrap-icons';
import { StarFill, TagFill } from 'react-bootstrap-icons';

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + curr.prize, 0)
        );
    }, [cart]);

    // console.log(total);
    const navigate = useNavigate();
    const gotoCheckout = event => {
        navigate('/checkout')
    }
    return (
        <div>
            <Container>
                <h1 className='my-5  d-flex align-items-center justify-content-start'>Shopping Cart</h1>
                <Row>
                    <Col sm={8}>
                        <div className='mb-5'>
                            <span className='fs-4 d-flex align-items-center justify-content-start'>{cart.length} Courses in Cart</span>
                            {
                                cart?.map(course => <div>
                                    <CardGroup>
                                        <Card className='w-100 border-1 rounded-0'>
                                            <Card.Body className=''>
                                                <Row>
                                                    <Col sm={2}><img className='pic' src={course.picture} alt="" /></Col>
                                                    <Col sm={10}>
                                                        <Row>
                                                            <Col sm={7}>
                                                                <h5 className='mb-1'>{course.course_name}</h5>
                                                                <small className='mb-1'>{course.name}</small>
                                                                <div className='d-flex justify-content-start align-item-center'>
                                                                    <p className='m-0 txt-color p-align'><strong>{course.rating}</strong></p>
                                                                    <div className='mx-1'>
                                                                        <StarFill className='star-color' />
                                                                        <StarFill className='star-color' />
                                                                        <StarFill className='star-color' />
                                                                        <StarFill className='star-color' />
                                                                        <StarFill className='star-color' />
                                                                    </div>
                                                                    <p className='fw-lighter p-align'>({course.rate_given})</p>
                                                                </div>
                                                                <div>
                                                                    <small className='me-1'>{course.length}</small>.
                                                                    <small className='mx-1'>{course.lecture}</small>.
                                                                    <small className='mx-1'>{course.level}</small>
                                                                </div>
                                                            </Col>
                                                            <Col sm={3}>
                                                                <div className='position-relative  h-100'>
                                                                    <Button
                                                                        type="button"
                                                                        variant="light"
                                                                        onClick={() =>
                                                                            dispatch({
                                                                                type: "REMOVE_FROM_CART",
                                                                                payload: course,
                                                                            })
                                                                        }
                                                                    >
                                                                        <Trash></Trash>
                                                                    </Button>
                                                                </div>

                                                            </Col>
                                                            <Col sm={2}><h5 className='position-absolute  end-0 me-2'>{course.prize}<TagFill></TagFill></h5></Col>
                                                        </Row>



                                                    </Col>
                                                </Row>


                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                </div>)
                            }
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='border-bottom pb-3'>
                            <span className='fs-4'>Total:</span>
                            <h1>${total}</h1>
                            {/* <Button variant='dark rounded-0 w-75 py-3 m-0'><h5>Checkout</h5></Button> */}
                            <Link to="/checkout" className='text-info text-decoration-none' onClick={gotoCheckout}><Button variant='dark rounded-0 w-75 py-3 m-0'><h5>Checkout</h5></Button></Link>

                        </div>
                        <div>
                            <h5 className='my-2'>Promotions</h5>
                            <div className='d-flex align-items-center mb-1'>
                                <Button variant="link p-1"><X></X></Button>
                                <span><strong>KEEPLEARNING</strong> is applied</span>
                            </div>
                            <InputGroup className="mb-3 ">
                                <Form.Control
                                    className='rounded-0'
                                    placeholder="Enter Coupon"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary rounded-0" id="button-addon2">
                                    Apply
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;