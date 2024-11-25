import React, { useState } from 'react'
import { getInitialStateFromLs } from '../../../helpers/GetInitialStateFromLs'
import { setValueInLs } from '../../../helpers/setValueInLs'
import { CartContext } from '../../../context/CartContext'

const PRODUCT_IN_BASKET = 'PRODUCT_IN_BASKET'

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialStateFromLs(PRODUCT_IN_BASKET))

  const cartCount = () => cartItems.reduce((total, item) => total + (item.quantity || 0), 0)

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems]
      const existingProduct = updatedCart.find((item) => item.id === product.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        updatedCart.push({ ...product, quantity: 1 })
      }

      setValueInLs(PRODUCT_IN_BASKET, updatedCart)
      return updatedCart
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter((item) => item.id !== productId)
      setValueInLs(PRODUCT_IN_BASKET, updatedCart)
      return updatedCart
    })
  }

  const updateQuantity = (productId, change) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change
            if (newQuantity <= 0) return null
            return { ...item, quantity: newQuantity }
          }
          return item
        })
        .filter((item) => item !== null)

      setValueInLs(PRODUCT_IN_BASKET, updatedCart)
      return updatedCart
    })
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount: cartCount(),
      addToCart,
      removeFromCart,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider