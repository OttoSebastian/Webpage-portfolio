import React from 'react';

export default function Header({text = "Enter the header or title here", wordHighlight, highlightColor}) {

  const headerStyle = {
    width: "1800px",
    height: "280px",
    fontStyle: "italic",
    fontVariant: "small-caps",
    fontWeight: "lighter",
    fontSize: "150px",
    color: "white",
    textAlign: "center",
    paddingBottom: "20px",
    webkitAnimation: "text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
	  animation: "text-focus-in 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
  }

  return (
      <h1 style={headerStyle}>
        {text} <span className="highlightedWord" style={{color: highlightColor}}>{wordHighlight}</span>
      </h1>
  )
}
