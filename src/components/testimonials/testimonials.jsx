import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'KlimaCentar',
    review: 'The solutions this agency provides are cheap and incredibly fast paced. Our website was built quickly and was fully functional with no problems.'
  },
  {
    avatar: AVTR2,
    name: 'Best Mostar',
    review: 'The team that participated in the Bosnia Best Mostar Hackathon and won Second Place. Very creative and innovative minds full of talented people. Highly recommended for projects.'
  },
  {
    avatar: AVTR3,
    name: 'TELEMACH',
    review: 'Participants in the first ever Telemach organized Hackathon in Bosnia. Very creative ideas, phenomenal designs and confident in their skill.'
  },
  {
    avatar: AVTR4,
    name: 'UX/UI Instagram Community',
    review: 'A very respectable name in the Instagram designers world. Giving out daily tips on improving designs, giving regular feedback to the community and contributing regularly. These people are very bright with their age and ideas.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials