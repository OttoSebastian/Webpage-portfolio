import React from 'react';
import Button from '../components/Button';

export default function ProjectBox({icon1, icon2, children}) {

    const iconStyle = {
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "60px"
    }
    const openCode = () => {
        window.open('https://github.com/OttoSebastian/Webpage-portfolio', '_blank');
      };

  return (
    <div className={'projectBox'}>
        <div className='projectBoxHeader'>
        <i style={iconStyle}>{icon1}</i>
        <i style={iconStyle}>{icon2}</i>
        </div>
        <div className='projectBoxBody'>
            {children}
        </div>
        <div className='projectBoxFooter'>
            <Button type={"button"} text={"See code"} wantedClass={"btnSecondary"} onClick={openCode}/>
        </div>
    </div>
  )
}
