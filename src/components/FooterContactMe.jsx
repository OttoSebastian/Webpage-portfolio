import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function FooterContactMe() {

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

  return (
    <div className='footerBox'>
        <p style={headerStyle}>Contact me</p>
        <div className='footerItem'>
          <i style={iconStyle}>{<MdOutlineEmail/>}</i>
          <p style={textStyle}>ottoh2000@gmail.com</p>
        </div>
        <div className='footerItem'>
          <i style={iconStyle}>{<BsTelephone/>}</i>
          <p style={textStyle}>+358 458492988</p>
        </div>
    </div>
  )
}
