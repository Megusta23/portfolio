import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Local Businesses, Satisfied Customers</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>Over 50+ Completed</small>
            </article>
            </div>
            <p>UX/UI, Web Development, Social Media Marketing Agenncy from Bosnia and Herzegovina. Started working in 2020 on various local business projects. We usually connect with you, create deeper connections and relationships with our clients. Our main goal is to fully satisfy your needs, and to make your business prosper.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
        
      </div> 
    </section>
  )
}

export default about