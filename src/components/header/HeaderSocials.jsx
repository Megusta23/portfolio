import React from 'react'
import {FaTiktok} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://tiktok.com/@plansio" target="_blank" rel="noreferrer"><FaTiktok/></a>
        <a href="https://instagram.com/plansio_central" target="_blank" rel="noreferrer"><FaInstagram/></a>
        <a href="https://dribbble.com/plansio" target="_blank" rel="noreferrer"><FaDribbble/></a>
        
    </div>
  )
}

export default HeaderSocials