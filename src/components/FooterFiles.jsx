import React from 'react';
import { FaRegFileAlt, FaGithub } from "react-icons/fa";
import CV from "../personal_files/cv.pdf";

export default function FooterFiles() {

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

    const openGitHub = () => {
      window.open('https://github.com/OttoSebastian', '_blank');
    };
    const openCV = () => {
      window.open(CV, '_blank');
    };

  return (
    <div className='footerBox'>
        <p style={headerStyle}>Personal files</p>
        <div className='footerItemHover' onClick={openGitHub}>
          <i style={iconStyle}>{<FaGithub/>}</i>
          <p style={textStyle}>GitHub</p>
        </div>
        <div className='footerItemHover' onClick={openCV}>
          <i style={iconStyle}>{<FaRegFileAlt/>}</i>
          <p style={textStyle}>CV in finnish (.pdf)</p>
        </div>
        <div className='footerItem'>
          <i style={iconStyle}>{<FaRegFileAlt/>}</i>
          <p style={textStyle}>Thesis (Coming soon)</p>
        </div>
    </div>
  )
}
