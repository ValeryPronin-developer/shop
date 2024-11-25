import React, { useState, useEffect, useContext } from 'react'
import { FavoriteContext } from '../../../../../../context/FavoriteContext'
import { CartContext } from '../../../../../../context/CartContext'

import heart from '../../../../../../assets/icons/heart.svg'
import heartRed from '../../../../../../assets/icons/heart-red.svg'

import './Product.css'

const Product = ({ product }) => {
  const { id, name, price, oldPrice, image, isSale, isNew } = product

  const { toggleFavorite } = useContext(FavoriteContext)
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext)

  const [isFavorite, setIsFavorite] = useState(false)
  const quantity = cartItems.find(item => item.id === id)?.quantity || 0

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('PRODUCT_IN_HEART')) || []
    const favorite = favorites.some(item => item.id === id)
    setIsFavorite(favorite)
  }, [id])

  const handleFavoriteClick = () => {
    toggleFavorite(product)
    setIsFavorite(prev => !prev)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }
  
  const handleQuantityChange = (change) => {
    updateQuantity(id, change)
  }
  
  const getLabels = () => (
    <>
      {isSale && <div key="sale" className="label sale">Sale</div>}
      {isNew && <div key="new" className="label new">New</div>}
    </>
  )

  return (
    <div className="product">
      <div className="photo">
        <div className="top-bar">
          <div className="labels">{getLabels()}</div>
          <div className="favorites">
            <img
              className="favorite-icon"
              src={isFavorite ? heartRed : heart}
              alt="Favorite Icon"
              onClick={handleFavoriteClick}
            />
          </div>
        </div>
        <img src={image} className="product-image" alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">
          <div className="current-price">{`$${price}`}</div>
          {oldPrice && <div className="old-price">{`$${oldPrice}`}</div>}
        </div>
      </div>

      {quantity === 0 ? (
        <button className="buy-btn" onClick={handleAddToCart}>Buy</button>
      ) : (
        <div className="quantity">
          <div
            className="count-button"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </div>
          <div className="count">{quantity}</div>
          <div
            className="count-button"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </div>
        </div>
      )}
    </div>
  )
}

export default Product