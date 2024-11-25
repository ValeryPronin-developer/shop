import React, { useContext } from 'react'
import { ShopContext } from '../../../../../../context/ShopContext'
import { modifyData } from '../../../../../../helpers/ShopFilters'
import productsData from '../../../../../../products.json'

const Sort = () => {
  const { setProductsInfo, currentPage, search, filters, sort, setSort } = useContext(ShopContext)

    const handleChange = (event) => {
        const newSort = event.target.value
        setSort(newSort)

        const { filteredProducts, totalFilteredProducts, totalPages } = modifyData(productsData.products, { search, filters, sort: newSort, currentPage })

        setProductsInfo({ filteredProducts, totalFilteredProducts, totalPages })
    }

    return (
        <div className="sort">
            <select
                className="input"
                value={sort}
                onChange={handleChange}
            >
                <option value="">Relevance</option>
                <option value="ASC">from A to Z</option>
                <option value="DESC">from Z to A</option>
                <option value="low">from low to high</option>
                <option value="high">from high to low</option>
            </select>
        </div>
    )
}

export default Sort