import React from 'react';
import { CARDICON, CARDARR } from "./Constant";
import './Card.css';

const Cards = (props) => {
    return (
        <div className='card-wrap border'>
            <div className='card border-0'>
                <div className="header">
                    {CARDARR.includes(props.card.cardType) && (
                        <img
                            style={{ marginLeft: "10px" }}
                            src={CARDICON[props.card.cardType]}
                            alt="card"
                            width="80px"
                            height="50px"
                        />
                    )}
                </div>
                <div className='card-number'>{props.card.card}</div>
                <div className='bottom'>
                    <div className='name'>
                        <div style={{ fontSize: "15px" }}>CardHodler</div>
                        <span style={{ fontSize: "14px" }}>{props.card.cardHodler}</span>
                    </div>
                    <div className='expiry'>
                        <div style={{ fontSize: "15px" }}>Expiry</div>
                        <span style={{ fontSize: "14px" }}>{props.card.expiry}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;