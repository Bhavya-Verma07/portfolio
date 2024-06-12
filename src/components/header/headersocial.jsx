import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from "react-icons/fa";
// import {FiDribbble} from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Headersocial = () => {
  return (
 <div className='header__socials'>
      <a href='linkedin.com/in/bhavyaverma07' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/Bhavya-Verma07' target="_blank"><FaGithub/></a>
      <a href='mailto:me.bhavyaverma111@gmail.com' target="_blank"> <MdOutlineMail /></a>
 </div>
  )
}




export default Headersocial;