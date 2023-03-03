import React from 'react'

import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'

export default function WebsiteLayout(props) {
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}
