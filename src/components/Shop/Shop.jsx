import React from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import ProductList from "./components/ProductList/ProductList"
import Newsletter from "../Newsletter/Newsletter"

import './Shop.css'
import '../../style/Commons.css'
import '../../style/Reset.css'

const Shop = () =>
    <>
        <div className="container">
            <div className="shop">
                <Sidebar />
                <ProductList />
            </div>
        </div>

        <Newsletter />
    </>

export default Shop