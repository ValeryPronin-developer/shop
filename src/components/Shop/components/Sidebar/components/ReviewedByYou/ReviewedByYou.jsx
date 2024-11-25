import React from 'react'
import productsData from '../../../../../../products.json'

const ReviewedByYou = () => {
  const randomProducts = [...productsData.products].sort(() => 0.5 - Math.random()).slice(0, 3)

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Reviewed by you</div>
      <div className="sidebar-content">
        <div className="reviewed-products js-reviewed-products">
          {randomProducts.map((product) => (
            <div className="product" key={product.id}>
              <div className="image">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                  <div className="current-price">${product.price}</div>
                  {product.oldPrice && (
                    <div className="old-price">${product.oldPrice}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewedByYou