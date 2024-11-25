import React, { useContext } from 'react'
import { ShopContext } from '../../../../../../context/ShopContext'
import { modifyData } from '../../../../../../helpers/ShopFilters'
import productsData from '../../../../../../products.json'

import searchIcon from '../../../../../../assets/icons/search.svg'

const Search = () => {
  const { search, setSearch, filters, sort, currentPage, setProductsInfo } = useContext(ShopContext)

      const handleSearchChange = (e) => {
        const newSearch = e.target.value
        setSearch(newSearch)

        const { filteredProducts, totalFilteredProducts, totalPages } = modifyData(productsData.products, { search: newSearch, filters, sort, currentPage })

        setProductsInfo({ filteredProducts, totalFilteredProducts, totalPages })
    }

  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search"
          className="input search-row"
          value={search}
          onChange={handleSearchChange}
        />
        <img src={searchIcon} alt="Search icon" className="search-icon" />
      </label>
    </div>
  )
}

export default Search