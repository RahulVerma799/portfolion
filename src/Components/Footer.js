import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Rahul Verma</h4>
      <h4>Copyright &copy; 2025 RV</h4>
      <div className='footerLinks'>
        <a href="https://github.com/RahulVerma799" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/vermarahul799" target='_blank'><FaLinkedin/></a>
        <a href='rahul27102710@gmail.com' target='_blank'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer