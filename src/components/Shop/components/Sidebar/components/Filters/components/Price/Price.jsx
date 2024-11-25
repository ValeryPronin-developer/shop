import React from 'react'
import { parsePrice } from '../../../../../../../../helpers/ParseData'
import productsData from '../../../../../../../../products.json'

const Price = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const { minPrice: minPriceDefault, maxPrice: maxPriceDefault } = parsePrice(productsData.products)

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Price</div>
      <div className="sidebar-content">
        <div className="price-bar">
          <input
            value={minPrice}
            type="text"
            placeholder={minPriceDefault}
            className="input"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            value={maxPrice}
            type="text"
            placeholder={maxPriceDefault}
            className="input"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Price