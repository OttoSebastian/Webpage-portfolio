import React from 'react';
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";

export default function FooterSocials() {

  const iconStyle = {
    display: "flex",
    fontSize: "30px",
    alignItems: "center"
  }
  const headerStyle = {
    fontStyle: "italic", 
    fontWeight: "500", 
    fontSize: "35px", 
    paddingLeft: "2%",
    height: "10%",
    display: "flex",
    alignItems: "center"
  }
  const textStyle = {
    fontWeight: "200", 
    fontSize: "20px", 
    paddingLeft: "5%"
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/otto_sebastian/', '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/otto-hyyrynen-267692265', '_blank');
  };
  const openTwitter = () => {
    window.open('https://twitter.com/OttoHyyrynen', '_blank');
  };
  const openFacebook = () => {
    window.open('https://www.facebook.com/od.hyyrynen', '_blank');
  };

  return (
    <div className='footerBox'>
        <p style={headerStyle}>My socials</p>
        <div className='footerItemHover' onClick={openInstagram}>
          <i style={iconStyle}>{<BsInstagram/>}</i>
          <p style={textStyle}>Instagram</p>
        </div>
        <div className='footerItemHover' onClick={openLinkedIn}>
          <i style={iconStyle}>{<RiLinkedinLine/>}</i>
          <p style={textStyle}>LinkedIn</p>
        </div>
        <div className='footerItemHover' onClick={openTwitter}>
          <i style={iconStyle}>{<BsTwitterX/>}</i>
          <p style={textStyle}>Twitter/X</p>
        </div>
        <div className='footerItemHover' onClick={openFacebook}>
          <i style={iconStyle}>{<AiOutlineFacebook/>}</i>
          <p style={textStyle}>Facebook</p>
        </div>
    </div>
  )
}
