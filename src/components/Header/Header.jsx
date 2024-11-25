import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext';

import logo from '../../assets/icons/logo.svg';
import arrowBlack from '../../assets/icons/arrow-black.svg';
import arrowPink from '../../assets/icons/arrow-pink.svg'
import search from '../../assets/icons/search.svg';
import profile from '../../assets/icons/profile.svg';
import heart from '../../assets/icons/heart.svg';
import cart from '../../assets/icons/cart.svg';

import './Header.css';

const Header = ({ changePage, currentPage }) => {
    const { cartCount } = useContext(CartContext)
    const { favoriteCount } = useContext(FavoriteContext)

    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label htmlFor="burger-checkbox" className="burger"></label>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="menu">
                    <div className="menu-item"><span>Home</span></div>
                    <div className="menu-item"><span>Pages</span>
                        <img src={arrowBlack} alt="arrow" className="arrow-default" />
                    </div>
                    <div
                        className={`menu-item ${currentPage === 'shop' ? 'active' : ''}`}
                        onClick={() => changePage('shop')}
                    >
                        <span>Shop</span>
                        <img
                            src={currentPage === 'cart' ? arrowBlack : arrowPink}
                            alt="arrow"
                            className='arrow-default'
                        />
                    </div>
                    <div className="menu-item"><span>Blog</span></div>
                    <div className="menu-item"><span>Contact</span></div>
                </div>
            </div>

            <div className="right-side">
                <div className="header-icon"><img src={search} alt="search" /></div>
                <div className="header-icon"><img src={profile} alt="profile" /></div>
                <div className="header-icon">
                    <img src={heart} alt="heart" />
                    <div className="counter js-heart-counter">{favoriteCount}</div>
                </div>
                <div className="header-icon" onClick={() => changePage('cart')}>
                    <img src={cart} alt="cart" />
                    <div className="counter js-basket-counter">{cartCount}</div>
                </div>
            </div>
        </header>
    )
}

export default Header