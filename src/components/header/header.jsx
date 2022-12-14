import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello We're</h5>
        <h1>Plansio Central</h1>
        <h5 className='text-light'>UX/UI, Programming Agency</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header