import React, { useState } from 'react';
import { Button, ButtonGroup, Carousel, CarouselItem, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import Course from './Course';
import Filter from './Filter/Filter';
import { ExclamationCircleFill } from 'react-bootstrap-icons';
import { FilterLeft } from 'react-bootstrap-icons';
// import CourseSlider from './CourseSlider';
import SimpleSlider from './SimpleSlider';
import StudentLearn from './StudentLearn';
import SingleCourse from './../SingleCourse/SingleCourse';
import { CartState } from '../../Context/Context';
const SearchPage = () => {
    // const [courses, setcourses] = useState([]);
    
    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => setcourses(data))

    // }, [])

    const [show, setShow] = useState(true);
    const {state:{courses}} = CartState();
    return (

        <div>
            <Container>
                <h1 className='fs-3 fw-bold mt-5 d-flex align-items-center justify-content-start'>10,000 results for “Graphic Design”</h1>
                <div className='my-4'>
                    <h3 className='d-flex  align-items-center justify-content-start'>
                        Explore <a href="#" className='text-decoration-none'> Graphic Design courses</a>
                    </h3>
                    <h4 className='d-flex align-items-center justify-content-start'>
                        <span className=' text-dark'>Students also learn </span>
                        <span className='related-topics text-dark'><a href="#" className='text-decoration-none'>Adobe Illustrator</a></span>
                        <span className='related-topics text-dark'><a href="#" className='text-decoration-none'>Photoshop</a> </span>
                        <span className='related-topics text-dark'><a href="#" className='text-decoration-none'>Logo Design</a></span>
                        <span className='related-topics text-dark'><a href="#" className='text-decoration-none'>Canva</a> </span>
                        <span className='related-topics text-dark'><a href="#" className='text-decoration-none'>Illustration</a> </span>
                    </h4>
                </div>
                <div className='my-4 d-flex align-items-center justify-content-between'>
                    <div>
                        <Button variant='border border-dark rounded-0 p-3 me-3' onClick={() => setShow(!show)}><FilterLeft className='pb-1 fs-5' />Filter</Button>
                        <DropdownButton variant='border border-dark rounded-0 p-3' as={ButtonGroup} title="Sort by" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Newest</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Most Relevent</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Most Reviewed</Dropdown.Item>
                            <Dropdown.Item eventKey="4">High Rated</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <h5>10,000 results</h5>
                </div>
                <div>
                    <div>
                        <div>
                            <Row>
                                {show && <Col>
                                    <Filter></Filter>


                                </Col>}
                                <Col xs={9}>
                                    {
                                        courses.map((course) => {
                                            return <SingleCourse key={course.id} course={course}></SingleCourse>

                                        })
                                    }



                                    {/* <SimpleSlider>

                                    </SimpleSlider> */}




                                    <div className='my-3'>
                                        <div className='d-flex align-items-center'>
                                            <h4 className='pt-1 me-2'>Related Search</h4>
                                            <ExclamationCircleFill className='fs-5' />
                                        </div>
                                        <div className='d-flex flex-wrap'>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>Indesign</Button>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>Lindsay Marsh</Button>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>Adobe Indesign</Button>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>graphic design masterclass”</Button>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>graphic design bootcamp</Button>
                                            <Button variant="dark" className='rounded-pill my-2 me-2'>adobe illustrator cc</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>

                    <div className="m-2 d-flex justify-content-center">
                        <ButtonGroup className="me-3" aria-label="Second group">
                            <Button variant="outline-primary" className="me-2 rounded-circle">&#60;</Button>
                            <Button variant="link" className="me-2 text-decoration-none rounded-circle">5</Button>
                            <Button variant="link" className="me-2 text-decoration-none rounded-circle">6</Button>
                            <Button variant="link" className="me-2 text-decoration-none rounded-circle">7</Button>
                            <span className='me-3 fs-6 mt-2'> ... 500</span>
                            <Button variant="outline-primary" className="me-2 rounded-circle">&#62;</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SearchPage;