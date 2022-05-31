import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Developed by <a href="https://guilhermeregis.com" target="_blank">Guilherme Regis</a>.</p>
      <p className="icons">
        <a href="https://github.com/gregisb" target="_blank"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/guilherme-regis/" target="_blank"><AiFillLinkedin /></a>
      </p>
    </div>
  )
}

export default Footer;