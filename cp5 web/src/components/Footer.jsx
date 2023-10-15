// Giovanna

import {} from 'react'
import './style.components.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer (){
  return(
    <section className='footer'>
      <ul>
        <li><a><FaFacebookF  className='fac'/></a></li>
        <li><a><FaInstagram  className='ins'/></a></li>
        <li><a><FaLinkedinIn  className='lin'/></a></li>
        <li><a><FaRegEnvelope  className='ema'/></a></li>
      </ul>
    </section>
  )
}
export default Footer