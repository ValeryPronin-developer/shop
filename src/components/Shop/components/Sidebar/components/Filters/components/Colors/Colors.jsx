import React from 'react'
import { parseColors } from '../../../../../../../../helpers/ParseData'
import productsData from '../../../../../../../../products.json'

const Colors = ({ selectedColors, setSelectedColors }) => {
  const colors = parseColors(productsData.products)

  const handleColorChange = (e) => {
    const { value, checked } = e.target
    setSelectedColors((prevColors) =>
      checked ? [...prevColors, value] : prevColors.filter((color) => color !== value)
    )
  }

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-content">
        <div className="colors">
          {colors.map((color) => (
            <div className="color" key={color}>
              <input
                type="checkbox"
                className="color-checkbox"
                id={color.toLowerCase()}
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleColorChange}
              />
              <label htmlFor={color.toLowerCase()} className="color-name">
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Colors