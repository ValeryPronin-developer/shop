import React from 'react'
import { parseCategories } from '../../../../../../../../helpers/ParseData'
import productsData from '../../../../../../../../products.json'

const Categories = ({ category, onCategoryChange }) => {
  const categories = parseCategories(productsData.products)

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-content">
        <ul className="custom-list">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`item js-category ${category === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories