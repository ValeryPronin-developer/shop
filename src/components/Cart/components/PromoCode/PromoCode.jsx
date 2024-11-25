import React from 'react'
import Links from '../Links/Links'

import button from '../../../../assets/icons/button-arrow.svg';

const PromoCode = ({ setPromoCode, promoCode, handleApplyPromoCode }) =>
    <div className="promo-code-wrapper">
        <div className="info">
            <div className="title">You Have A Promo Code?</div>
            <div className="description">To receive up-to-date promotional codes, subscribe to us on social networks.</div>
        </div>
        <div className="promo-code">
            <input
                type="text"
                name="promo-code"
                className="input"
                id="promo-code-input"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
            />
            <div className="button-wrapper">
                <button
                    className="button"
                    id="apply-promo-code-btn"
                    onClick={handleApplyPromoCode}
                >
                    <img src={button} alt="arrow icon" />
                </button>
                <div className="vertical-line"></div>
            </div>
        </div>

        <Links />
    </div>

export default PromoCode 