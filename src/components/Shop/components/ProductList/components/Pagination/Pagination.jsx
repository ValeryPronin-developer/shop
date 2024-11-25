import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../../../../../context/ShopContext'
import { modifyData } from '../../../../../../helpers/ShopFilters'
import productsData from '../../../../../../products.json'

import leftArrow from '../../../../../../assets/icons/left-pagin-arrow.svg'
import rightArrow from '../../../../../../assets/icons/right-pagin-arrow.svg'

const Pagination = () => {
  const { productsInfo, setProductsInfo, currentPage, setCurrentPage, search, filters, sort } = useContext(ShopContext)

  // const handlePageChange = (page) => {
  //   if (page >= 1 && page <= productsInfo.totalPages) {
  //     setCurrentPage(page)
  //   }

  //   const { filteredProducts, totalFilteredProducts, totalPages } = modifyData(productsData.products, { search, filters, sort, currentPage: page })

  //   setProductsInfo({ filteredProducts, totalFilteredProducts, totalPages })
  // }

  useEffect(() => {
    const { filteredProducts, totalFilteredProducts, totalPages } = modifyData(productsData.products, { search, filters, sort, currentPage })

    if (totalFilteredProducts <= 12 && currentPage !== 1) {
      setCurrentPage(1)
    }

    setProductsInfo({ filteredProducts, totalFilteredProducts, totalPages })
  }, [currentPage, search, filters, sort, setProductsInfo, setCurrentPage])

  const handlePageChange = (page) => {
    if (page >= 1 && page <= productsInfo.totalPages) {
      setCurrentPage(page)

      setTimeout(() => {
        const productsContainer = document.querySelector('.products-wrapper')
        if (productsContainer) {

          const displayedProducts = productsContainer.querySelectorAll('.product')
          if (displayedProducts.length <= 9) {
            productsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }, 1)
    }
  }

  return (
    <div className="pagination" id="pagination">
      <div
        className={`button left ${currentPage === 1 ? 'disabled' : ''}`}
        id="arrow-left"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img src={leftArrow} alt="left pagin arrow" />
      </div>

      <div className="pages js-pages">
        {Array.from({ length: productsInfo.totalPages }, (_, index) => (
          <div
            key={index}
            className={`page ${currentPage === index + 1 ? 'active' : ''}`}
            data-index={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div
        className={`button right ${currentPage === productsInfo.totalPages ? 'disabled' : ''}`}
        id="arrow-right"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img src={rightArrow} alt="right pagin arrow" />
      </div>
    </div>
  )
}

export default Pagination