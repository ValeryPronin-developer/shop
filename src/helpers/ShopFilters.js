export const filterProducts = (products, filters) => {
    const { category, minPrice, maxPrice, selectedColors } = filters
    return products.filter(product => {
        const matchesCategory = category === 'All' || product.categories.includes(category)
        const matchesPrice = (!minPrice || product.price >= parseFloat(minPrice)) &&
            (!maxPrice || product.price <= parseFloat(maxPrice))
        const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)

        return matchesCategory && matchesPrice && matchesColor
    })
}

export const searchProducts = (products, searchQuery) => {
    const query = typeof searchQuery === 'string' ? searchQuery.toLowerCase() : ''
    return products.filter(product =>
        product.name.toLowerCase().includes(query)
    )
}

export const sortProducts = (products, sortOrder) => {
    return [...products].sort((a, b) => {
        switch (sortOrder) {
            case 'ASC':
                return a.name.localeCompare(b.name)
            case 'DESC':
                return b.name.localeCompare(a.name)
            case 'low':
                return a.price - b.price
            case 'high':
                return b.price - a.price
            default:
                return 0
        }
    })
}

export const getProductsToDisplay = (products, currentPage, productsPerPage = 12) => {
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    return products.slice(startIndex, endIndex)
}

export const calculateTotalPages = (totalProducts, productsPerPage = 12) => {
    return Math.ceil(totalProducts / productsPerPage)
}

// export const handleLocalStorageUpdate = (key, updateFunction) => {
//     let data = JSON.parse(localStorage.getItem(key)) || []
//     updateFunction(data)
//     localStorage.setItem(key, JSON.stringify(data))
// }

export const modifyData = (products, { search, filters, sort, currentPage }) => {
    const filteredProducts = filterProducts(products, filters)
    const searchedProducts = searchProducts(filteredProducts, search)
    const sortedProducts = sortProducts(searchedProducts, sort)
    const totalFilteredProducts = sortedProducts.length
    const productsToDisplay = getProductsToDisplay(sortedProducts, currentPage)

    return {
        filteredProducts: productsToDisplay,
        totalPages: calculateTotalPages(totalFilteredProducts),
        totalFilteredProducts
    }
}