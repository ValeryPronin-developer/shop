import React from "react"

import vectorObjectMini from '../../assets/images/vector-object-mini.svg'

import './Newsletter.css';

const Newsletter = () =>
    <div className="subscribe">
        <div className="container">
            <div className="info">
                <div className="title">Newsletter</div>
                <div className="description">Be the first to hear about deals, offers and upcoming collections.</div>
            </div>
            <div className="news-letter">
                <input type="text" name="Newsletter" className="input" placeholder="Enter your email" />
                <div className="button-wrapper">
                    <button className="button">Subscribe</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="vector-object">
                <img src={vectorObjectMini} alt="vector-object-mini" />
            </div>
        </div>
    </div>

export default Newsletter