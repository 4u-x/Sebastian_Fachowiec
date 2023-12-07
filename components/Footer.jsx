import React from "react";




export default function Footer(){
    const currentYear = new Date().getFullYear();
    return <p className="footer">Tomo & Seb © {currentYear}</p>
}

