import React from 'react';

export default function SkillBox({
    icon,
    skill="Add your skill here",
    start="Started",
    end="Ended"
}) {

    const iconStyle = {
        display: "flex",
        fontSize: "150px",
        alignItems: "center",
    }

  return (
    <div className='skillBox'>
        <div style={{width: "40%"}}>
            <i style={iconStyle}>{icon}</i>
        </div>
        <div>
            {skill && <span>{skill}</span>} <br/> {start && <span>{start}</span>} - {end && <span>{end}</span>}
        </div>
    </div>
  )
}