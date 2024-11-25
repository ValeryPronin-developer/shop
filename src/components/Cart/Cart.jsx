import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductsInCart from './components/ProductsInCart/ProductInCart';
import Order from './components/Order/Order';
import PromoCode from './components/PromoCode/PromoCode';

import './Cart.css';

const Cart = () => {
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useContext(CartContext)

  const handleApplyPromoCode = () => {
    if (promoCode === 'ilovereact') {
      setDiscount(0.1)
    } else {
      setDiscount(0)
    }
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
  }
  const totalPrice = calculateTotalPrice()
  const discountedPrice = totalPrice * (1 - discount)
  const deliveryPrice = 15
  const finalPrice = discountedPrice + deliveryPrice

  const handleCheckout = () => {
    const orderDetails = {
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        totalPrice: (item.price * (item.quantity || 1)).toFixed(2),
      })),
      promoCode: promoCode,
      discount: discount,
      deliveryPrice: deliveryPrice,
      finalPrice: finalPrice.toFixed(2),
    }
    console.log('Order details:', orderDetails)
  }

  return (

    <div className="container">
      <div className="cart">
        <div className="order-wrapper">
          <ProductsInCart cartCount={cartCount} cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
          <Order discountedPrice={discountedPrice} deliveryPrice={deliveryPrice} discount={discount} finalPrice={finalPrice} handleCheckout={handleCheckout} />
        </div>
        <PromoCode promoCode={promoCode} setPromoCode={setPromoCode} handleApplyPromoCode={handleApplyPromoCode} />
      </div>
    </div>
  )
}

export default Cart