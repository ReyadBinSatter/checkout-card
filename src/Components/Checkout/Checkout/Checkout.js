import React, { useReducer, useState, useEffect } from 'react';
import { Button, Col, Container, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { CardImage, Lock, Paypal } from 'react-bootstrap-icons';
import Course1 from './../Course/Course1';
import Cards from './Cards';
import MaskedInput from "react-text-mask";
import './Add.css';
import {
    AMERICANEXPRESS,
    OTHERCARDS,
    EXPIRYDATE,
    CVC,
    CARDARR,
    CARDICON
} from "./Constant";
import {
    stripeCardNumberValidation,
    stripeCardExpirValidation,
    textWithSpacesOnly,
    minLength
} from "./Validations";


const reducer = (state, action) => {
    console.log("action", action.data);
    switch (action.type) {
        case "card":
            return { ...state, card: action.data };
        case "expiry":
            return { ...state, expiry: action.data };
        case "securityCode":
            return { ...state, securityCode: action.data };
        case "cardHodler":
            return { ...state, cardHodler: action.data };
        case "cleanState":
            return { ...action.data };
        default:
            return state;
    }
};

function findDebitCardType(cardNumber) {
    const regexPattern = {
        MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
        VISA: /^4[0-9]{2,}$/,
        AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
        DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
        DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
        JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/
    };
    for (const card in regexPattern) {
        if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) return card;
    }
    return "";
}


const Checkout = () => {
    // const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [courses, setcourses] = useState([]);

    const [cardList, setCardList] = useState([]);
    const [addCard, setCard] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setcourses(data))

    }, [])




    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Enter OTP</Popover.Header>
            <Popover.Body>
                <Form className='px-3 py-5'>
                    <Form.Control className='mb-3 rounded-0 p-2' type="text" placeholder="OTP"></Form.Control>
                </Form>
            </Popover.Body>
        </Popover>
    );

    const [error, setError] = useState({});
    const [cardType, setCardType] = useState();
    const [state, dispatch] = useReducer(reducer, {
        card: "",
        expiry: "",
        securityCode: "",
        cardHodler: ""
    });

    const handleValidations = (type, value) => {
        let errorText;
        switch (type) {
            case "card":
                setCardType(findDebitCardType(value));
                errorText = stripeCardNumberValidation(value);
                setError({ ...error, cardError: errorText });
                break;
            case "cardHodler":
                errorText = value === "" ? "Required" : textWithSpacesOnly(value);
                setError({ ...error, cardHodlerError: errorText });
                break;
            case "expiry":
                errorText =
                    value === "" ? "Required" : stripeCardExpirValidation(value);
                setError({ ...error, expiryError: errorText });
                break;
            case "securityCode":
                errorText = value === "" ? "Required" : minLength(3)(value);
                setError({ ...error, securityCodeError: errorText });
                break;
            default:
                break;
        }
    };

    const handleInputData = (e) => {
        dispatch({ type: e.target.name, data: e.target.value });
    };
    const openCard = () => {
        setCard(!addCard);
    };

    const handleBlur = (e) => {
        handleValidations(e.target.name, e.target.value);
    };

    const checkErrorBeforeSave = () => {
        let errorValue = {};
        let isError = false;
        Object.keys(state).forEach(async (val) => {
            if (state[val] === "") {
                errorValue = { ...errorValue, [`${val + "Error"}`]: "Required" };
                isError = true;
            }
        });
        setError(errorValue);
        return isError;
    };

    const handleSave = (e) => {
        let errorCheck = checkErrorBeforeSave();
        if (!errorCheck) {
            setCardList([...cardList, { ...state, cardType }]);
            dispatch({
                type: "cleanState",
                data: {
                    card: "",
                    expiry: "",
                    securityCode: "",
                    cardHodler: ""
                }
            });
            setCardType("");
            setCard(false);
        }
    };
    return (
        <div className=''>
            <Container>
                <h1 className='my-5 d-flex align-items-center justify-content-start'>Checkout</h1>
                <Row>
                    <Col sm={7}>
                        <div className='mb-5'>

                            <h4 className='my-3 d-flex align-items-center justify-content-start'>Billing Address</h4>
                            <div className='w-50 '>
                                <div className='d-flex align-items-center justify-content-between mb-1'>
                                    <h6 className='m-0'>Country</h6>
                                    <small>Required</small>
                                </div>
                                <Form.Select aria-label="Default select example" className="outline-dark w-100 py-2 rounded-0 d-flex justify-content-between align-items-center">
                                    <option>Select Country</option>
                                    <option value="1">Italy</option>
                                    <option value="2">England</option>
                                    <option value="3">Bangladesh</option>
                                    <option value="4">Canada</option>
                                    <option value="5">USA</option>
                                </Form.Select>

                            </div>
                            <small className='w-100 d-flex align-items-center justify-content-start'>Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</small>

                        </div>
                        <div className='mb-5'>
                            <div className='d-flex align-items-center justify-content-between mb-1'>
                                <h4>Payment Method</h4>
                                <div className='d-flex align-items-center'>
                                    <small className='me-2'>Secured connection</small>
                                    <Lock></Lock>
                                </div>

                            </div>
                            <div>
                                
                                <div className='p-0 '>
                                    <div>
                                        <div className="add w-100" onClick={openCard}>

                                            <div className="text d-flex align-items-center border border-bottom-0 p-2">
                                                <CardImage></CardImage>
                                                <h5 className='m-0 ps-2'>Credit / Debit Card</h5>
                                            </div>
                                        </div>
                                        <form >
                                            {addCard && (
                                                <div className="wrapper border p-5">
                                                    <div className="inputs">
                                                        <MaskedInput
                                                            mask={
                                                                ["37", "34"].includes(
                                                                    state && state.card.split("").splice(0, 2).join("")
                                                                )
                                                                    ? AMERICANEXPRESS
                                                                    : OTHERCARDS
                                                            }
                                                            guide={false}
                                                            placeholderChar={"\u2000"}
                                                            placeholder="Card Number"
                                                            name="card"
                                                            required
                                                            value={state.card}
                                                            onChange={handleInputData}
                                                            onBlur={handleBlur}
                                                        />
                                                        {(!error || !error.cardError) && CARDARR.includes(cardType) && (
                                                            <img
                                                                style={{
                                                                    float: "right",
                                                                    position: "relative",
                                                                    top: "-35px"
                                                                }}
                                                                src={CARDICON[cardType]}
                                                                alt="card"
                                                                width="50px"
                                                                height="33px"
                                                            />
                                                        )}
                                                        {error && error.cardError && error.cardError.length > 1 && (
                                                            <span className="mb-3 d-flex align-items-center justify-content-start">{error.cardError}</span>
                                                        )}
                                                    </div    >
                                                    <div className="inputs">
                                                        <input
                                                            type="text"
                                                            name="cardHodler"
                                                            required
                                                            placeholder="CardHolder's Name"
                                                            value={state.cardHodler}
                                                            onChange={handleInputData}
                                                            onBlur={handleBlur}
                                                        />
                                                        {error &&
                                                            error.cardHodlerError &&
                                                            error.cardHodlerError.length > 1 && (
                                                                <span className="mb-3 d-flex align-items-center justify-content-start">{error.cardHodlerError}</span>
                                                            )}
                                                    </div    >
                                                    <div className="inputs" inputSize="small">
                                                        <div className="bottom-box ">
                                                            <div className="expiry">
                                                                <MaskedInput
                                                                    mask={EXPIRYDATE}
                                                                    guide={false}
                                                                    name="expiry"
                                                                    required
                                                                    placeholderChar={"\u2000"}
                                                                    placeholder="Expiry Date (MM/YY)"
                                                                    value={state.expiry}
                                                                    onChange={handleInputData}
                                                                    onBlur={handleBlur}
                                                                />
                                                                {error &&
                                                                    error.expiryError &&
                                                                    error.expiryError.length > 1 && (
                                                                        <span className="mb-3 d-flex align-items-center justify-content-start">{error.expiryError}</span>
                                                                    )}
                                                            </div>
                                                            <div className="cvc">
                                                                <MaskedInput
                                                                    mask={CVC}
                                                                    guide={false}
                                                                    name="securityCode"
                                                                    required
                                                                    placeholderChar={"\u2000"}
                                                                    placeholder="Secuirty Code"
                                                                    value={state.securityCode}
                                                                    onChange={handleInputData}
                                                                    onBlur={handleBlur}
                                                                />
                                                                {error &&
                                                                    error.securityCodeError &&
                                                                    error.securityCodeError.length > 1 && (
                                                                        <span className="mb-3 d-flex align-items-center justify-content-start">{error.securityCodeError}</span>
                                                                    )}
                                                            </div>
                                                        </div>
                                                    </div    >
                                                    
                                                    <Form>
                                                        {['checkbox'].map((type) => (
                                                            <div key={`default-${type}`} className="mb-3 d-flex align-items-center justify-content-start">
                                                                <Form.Check
                                                                    type={type}
                                                                    id={`default-${type}`}
                                                                    label='Securely save this card for my later purchase'
                                                                />

                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                    {!addCard &&
                                        cardList.map((card) => {
                                            return <Cards card={card} />;
                                        })}
                                </div>


                            </div>
                           


                            <div onClick={() => setShow1(!show1)} className='d-flex align-items-center border border-bottom-0 p-2'>
                                <Paypal></Paypal>
                                <h5 className='m-0 ps-2'>PayPal Payment</h5>
                            </div>
                            <div className='border'>
                                {show1 &&
                                    <p className='px-3 py-5'>In order to complete your transaction, we will transfer you over to PayPal's secure servers.</p>
                                }
                            </div>
                        </div>
                    
                    <div className='mb-5'>
                        <div className=' mb-1'>
                            <h4 className='d-flex align-items-center justify-content-start'>Order</h4>

                            <div>
                                {
                                    courses?.map(course => <Course1
                                        key={course.id}
                                        course={course}
                                    >
                                    </Course1>)
                                }
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={5}>
                    <div className='w-50'>
                        <h4 className='my-3'>Summary</h4>
                        <div className='border-bottom d-flex align-items-center justify-content-between mb-1'>
                            <p>Original Price:</p>
                            <p>$200.20</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between my-2'>
                            <h5>Total:</h5>
                            <h5>$200.20</h5>
                        </div>

                        <small className=''>By completing your purchase you agree to these Terms of Service.</small>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="dark rounded-0 w-100 py-3 my-2" onClick={handleSave}><h5>Proceed</h5></Button>
                        </OverlayTrigger>

                        <small className='d-flex justify-content-center'>30-Day Money-Back Guarantee</small>
                    </div>

                </Col>
            </Row>
        </Container>
        </div >
    );
};

export default Checkout;