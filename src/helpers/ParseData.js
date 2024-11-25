export const parseCategories = (products) => {
    const categories = new Set(['All'])
    products.forEach((product) => {
        if (product.categories && Array.isArray(product.categories)) {
            product.categories.forEach((category) => categories.add(category))
        }
    })
    return Array.from(categories)
}

export const parseColors = (products) => {
    const colors = new Set()
    products.forEach((product) => {
        if (product.color) {
            colors.add(product.color)
        }
    })
    return Array.from(colors)
}

export const parsePrice = (products) => {
    let minPrice = Number.POSITIVE_INFINITY
    let maxPrice = Number.NEGATIVE_INFINITY

    products.forEach((product) => {
        if (product.price) {
            if (product.price < minPrice) {
                minPrice = product.price
            }
            if (product.price > maxPrice) {
                maxPrice = product.price
            }
        }
    })

    return { minPrice, maxPrice }
}

export const parseData = (products) => {
    const categories = parseCategories(products)
    const colors = parseColors(products)
    const { minPrice, maxPrice } = parsePrice(products)

    return {
        categories,
        colors,
        minPrice,
        maxPrice,
    }
}