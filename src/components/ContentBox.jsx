import React from 'react';

export default function ContentBox({
    title="Title goes here",
    icon,
    children
}) {

    const iconStyle = {
        paddingRight: "20px",
        fontSize: "50px"
    }
    const headerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        backgroundColor: "#146956",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        color: "#ededed",
        fontSize: "40px",
        fontWeight: "bold"
    }
    const bodyStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "25px",
        height: "70%",
        textAlign: "center",
        fontStyle: "inherit",
        fontWeight: "200"
    }
    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        backgroundColor: "#ededed",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px"
    }
    const hrStyle = {
        height: "3px",
        width: "50%",
        backgroundColor: "#146956",
        borderColor: "#146956",
    }

  return (
    <div className={'contentBox'}>
        <div style={headerStyle}>
            <i style={iconStyle}>{icon}</i> {title && <span>{title}</span>}
        </div>
        <div style={bodyStyle}>
            {children}
        </div>
        <div style={footerStyle}>
            <hr style={hrStyle}/>
        </div>
    </div>
  )
}
