import React, { useContext } from 'react'
import { ShopContext } from '../../../../context/ShopContext'
import Sort from './components/Sort/Sort'
import Product from './components/Product/Product'
import Pagination from './components/Pagination/Pagination'

const ProductList = () => {

  const { productsInfo } = useContext(ShopContext)

  return (
    <div className="products-wrapper">
      <div className="sort-and-count">
        <div className="product-count">
          There are <span id="products-count" className="bold">
            {productsInfo.totalFilteredProducts}
          </span> products in this category
        </div>
         <Sort /> 
      </div>

      <div className="products js-products">
        {productsInfo.filteredProducts.length > 0 ? (
          productsInfo.filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : <div>No products found</div> }
      </div>

        <Pagination />
    </div>
  )
}

export default ProductList