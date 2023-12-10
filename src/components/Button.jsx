import React from 'react';

export default function Button({type, text, onClick, wantedClass, icon}) {

    const alertMissingHandler = () => window.alert("Add an event handler to the button!");

  return (
    <button 
        type={type}
        onClick={onClick ? onClick : alertMissingHandler}
        className={wantedClass}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  )
}
