import React, { useState } from 'react'
import { ShopContext } from '../../../context/ShopContext'
import productsData from '../../../products.json'

const ShopProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState({
        category: 'All',
        minPrice: '',
        maxPrice: '',
        selectedColors: []
    })
    const [sort, setSort] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const [productsInfo, setProductsInfo] = useState({
        filteredProducts: productsData.products,
        totalFilteredProducts: 24,
        totalPages: 2
    })

    return (
        <ShopContext.Provider value={{search, setSearch, filters, setFilters, sort, setSort, currentPage, setCurrentPage, productsInfo, setProductsInfo}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider