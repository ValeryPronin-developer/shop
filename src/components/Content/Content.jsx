import React from "react";
import vectorObject from '../../assets/images/vector.object.svg';

import './Content.css';

const Content = ({ changePage, currentPage }) =>
    <div className="content-container">
        <div className="content">
            <div className="content-menu">
                <div className="title">
                    {currentPage === 'cart' ? "Cart" : "Shop"}
                </div>
                <div className="bread-crumbs">
                    <div
                        className={`item ${currentPage === 'cart' ? 'active' : ''}`}
                        onClick={() => changePage('cart')}>
                        Cart
                    </div>
                    <div
                        className={`item ${currentPage === 'shop' ? 'active' : ''}`}
                        onClick={() => changePage('shop')}>
                        Shop
                    </div>
                </div>
            </div>
            <div className="bottom-line"></div>
            <div className="vector-object">
                <img src={vectorObject} alt="vector object" />
            </div>
        </div>
        <div className="background"></div>
    </div>

export default Content