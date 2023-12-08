import React from 'react'
import './about.css'
import ME from '../../asset/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
          I am big fan of technology. During my time at college , i was class representative of my batch. I was also part of Inter NIT cricket team. I leaded my electrical branch badminton team in intramural tournament of college where we won that tournament.
          My coding journey started from the 1st semester of my college with C language. After that I learnt lot of languages like C++, java , Python e.t.c but C++ is more handy to me. Afterwards I also started participating in competetive coding on various platforms like codechef, codeforces, leetcode, hackerrank and hackerearth.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About