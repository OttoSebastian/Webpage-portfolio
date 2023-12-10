import React from 'react';
import MyPic from '../pictures/omakuva.jpeg';

export default function FooterPersonal() {

    const imageStyle = {
        borderRadius: "25px",
        width: "30%",
        marginTop: "2%"
    }
    const divStyle = {
        position: "absolute",
        right: "4%",
        width: "20%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const textStyle = {
        fontWeight: "200", 
        fontSize: "25px",
        textAlign: "center"
    }

  return (
    <div style={divStyle}>
      <img src={MyPic} alt="myPic" style={imageStyle}/>
      <p style={textStyle}>Thank you for interacting! Feel free to contact me about potential internship positions or if you have any questions.</p>
    </div>
  )
}
