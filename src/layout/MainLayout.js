import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        <div>{children}</div>
        <div>Here is sidebar</div>
    </div>
  )
}

export default MainLayout
