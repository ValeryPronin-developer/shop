import React, { useContext, useState } from 'react'
import { ShopContext } from '../../../../../../context/ShopContext'
import { modifyData } from '../../../../../../helpers/ShopFilters'
import productsData from '../../../../../../products.json'
import Categories from './components/Categories/Categories'
import Price from './components/Price/Price'
import Colors from './components/Colors/Colors'

const Filters = () => {
  const [category, setCategory] = useState('All')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectedColors, setSelectedColors] = useState([])

  const { setFilters, search, sort, currentPage, setProductsInfo } = useContext(ShopContext)

  const applyFilters = () => {
    const newFilters = { category, minPrice, maxPrice, selectedColors }
    setFilters(newFilters)

    const { filteredProducts, totalFilteredProducts, totalPages } = modifyData(productsData.products, { search, filters: newFilters, sort, currentPage })

    setProductsInfo({ filteredProducts, totalFilteredProducts, totalPages })
  }

  return (
    <>
      <Categories
        category={category}
        onCategoryChange={setCategory}
      />
      <Price
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <Colors
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
      />

      <div className="sidebar-item">
        <div className="button-wrapper">
          <button className="button" onClick={applyFilters}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
    </>
  )
}

export default Filters