import React from 'react'
import Search from './components/Search/Search'
import Filters from './components/Filters/Filters'
import ReviewedByYou from './components/ReviewedByYou/ReviewedByYou'
import Banner from './components/Banner/Banner'

const Sidebar = () =>
    <div className="sidebar">
        <Search />
        <Filters />

        <ReviewedByYou />
        <Banner />
    </div>

export default Sidebar