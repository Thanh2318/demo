import React from "react";
import Logo from "../img/logo.png"

const Footer = () =>{
    return(
        <footer>
            <img src={Logo} alt="" />
            <span>Made with ♥️ and <b>Reactjs</b></span>
        </footer>
    )
}

export default Footer;