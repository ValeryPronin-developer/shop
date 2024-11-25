import React, { useState } from 'react'
import { getInitialStateFromLs } from '../../../helpers/GetInitialStateFromLs'
import { setValueInLs } from '../../../helpers/setValueInLs'
import { FavoriteContext } from '../../../context/FavoriteContext'

const PRODUCT_IN_HEART = 'PRODUCT_IN_HEART'

const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState(getInitialStateFromLs(PRODUCT_IN_HEART))

  const favoriteCount = favoriteItems.length

  const toggleFavorite = (product) => {
    setFavoriteItems((prevFavoriteItems) => {
      const updatedFavorites = [...prevFavoriteItems]
      const isFavorite = updatedFavorites.some(item => item.id === product.id)

      if (isFavorite) {
        const newFavorites = updatedFavorites.filter(item => item.id !== product.id)
        setValueInLs(PRODUCT_IN_HEART, updatedFavorites)
        return newFavorites
      } else {
        updatedFavorites.push(product)
        setValueInLs(PRODUCT_IN_HEART, updatedFavorites)
        return updatedFavorites
      }
    })
  }

  return (
    <FavoriteContext.Provider value={{ favoriteItems, favoriteCount, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider