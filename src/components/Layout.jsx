import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import bimag from './img/background-imag.jpg';

const Layout = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout;