import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './Navbar/Navbar'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <Outlet>{children}</Outlet>
    </div>
  )
}

export default Layout