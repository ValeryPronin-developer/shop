import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ShopProvider from './components/Providers/ShopProvider/ShopProvider';
import CartProvider from './components/Providers/CartProvider/CartProvider'
import FavoriteProvider from './components/Providers/FavoriteProvider/FavoriteProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ShopProvider>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
  </ShopProvider>
)