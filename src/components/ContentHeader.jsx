import React from 'react'

export default function ContentHeader({text = "Enter the header or title here", wordHighlight, highlightColor, textAlign, marginLeft, marginRight}) {

    const modifiedStyle = {
        textAlign: textAlign,
        marginLeft: marginLeft,
        marginRight: marginRight
      };

  return (
    <h1 className='contentHeader' style={modifiedStyle}>
        {text} <span className="highlightedWord" style={{color: highlightColor}}>{wordHighlight}</span>
    </h1>
  )
}
