import React from "react"

const ProductsInCart = ({ cartCount, cartItems, updateQuantity, removeFromCart }) =>
    <>
        {cartCount > 0 && (
            <div className="product-list" id="js-product-list">
                {cartItems.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="photo">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <div className="title">{product.name}</div>
                            <div className="price-wrapper">
                                <div className="price-and-quantity">
                                    <div className="price">
                                        {product.oldPrice && <div className="old-price">${product.oldPrice}</div>}
                                        <div className="current-price">${product.price}</div>
                                    </div>
                                    <div className="quantity">
                                        <div
                                            className="count-button"
                                            onClick={() => updateQuantity(product.id, -1)}
                                        >
                                            -
                                        </div>
                                        <div className="count">{product.quantity || 1}</div>
                                        <div
                                            className="count-button"
                                            onClick={() => updateQuantity(product.id, 1)}
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div className="total-price">${(product.price * (product.quantity || 1)).toFixed(2)}</div>
                            </div>
                            <div
                                className="close"
                                onClick={() => removeFromCart(product.id)}
                            >
                                X
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </>


export default ProductsInCart