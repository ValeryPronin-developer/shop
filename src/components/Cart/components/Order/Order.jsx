import React from "react"

const Order = ({ discountedPrice, discount, deliveryPrice, finalPrice, handleCheckout }) =>
    <div className="order">
        <div className="title">Your Order</div>
        <div className="order-price-wrapper">
            <div className="price-row">
                <div className="name">Order price</div>
                <div className="price" id="order-price">${discountedPrice.toFixed(2)}</div>
            </div>
            <div className="price-row">
                <div className="name">Discount for promo code</div>
                <div id="promo-discount">{discount > 0 ? `${(discount * 100).toFixed(0)}%` : 'No'}</div>
            </div>
            <div className="price-row delimiter">
                <div className="name">Delivery <span className="additional">(Aug 02 at 16:00)</span></div>
                <div className="price" id="delivery-price">${deliveryPrice}</div>
            </div>
            <div className="price-row total">
                <div className="name">Total</div>
                <div className="price" id="total-price">${finalPrice.toFixed(2)}</div>
            </div>
        </div>
        <div className="button-wrapper">
            <button className="button" onClick={handleCheckout}>Checkout</button>
            <div className="vertical-line"></div>
        </div>
    </div>

export default Order