import React from "react";




export default function Footer(){
    const currentYear = new Date().getFullYear();
    return <p className="footer">Thewoland666 © {currentYear}</p>
}

