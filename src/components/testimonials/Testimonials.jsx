import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio totam, tempore aspernatur, maxime quasi a quae neque voluptates error, minus corrupti ipsam inventore vitae consectetur libero? Amet sunt veniam at?'
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio totam, tempore aspernatur, maxime quasi a quae neque voluptates error, minus corrupti ipsam inventore vitae consectetur libero? Amet sunt veniam at?'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio totam, tempore aspernatur, maxime quasi a quae neque voluptates error, minus corrupti ipsam inventore vitae consectetur libero? Amet sunt veniam at?'
  },
  {
    avatar:AVTR4,
    name:'Nana Ama Mcbrown',
    review:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio totam, tempore aspernatur, maxime quasi a quae neque voluptates error, minus corrupti ipsam inventore vitae consectetur libero? Amet sunt veniam at?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials


