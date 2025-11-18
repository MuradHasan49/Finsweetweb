import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FooterCopy from './components/Footer/FooterCopy'

const Layout  = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <FooterCopy/>
    </>
  )
}

export default Layout 
