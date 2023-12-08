import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vikas-singh-12717a1b4" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/vikasbeginofera" target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials