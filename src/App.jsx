import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('shop')

  const changeCurrentPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Header changePage={changeCurrentPage} currentPage={currentPage} />
      <Content changePage={changeCurrentPage} currentPage={currentPage} />
      {currentPage === 'shop' && <Shop />}
      {currentPage === 'cart' && <Cart />}
      <Footer />
    </>
  )
}

export default App