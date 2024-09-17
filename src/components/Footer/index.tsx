import React from "react";
import { FooterContainer } from "./styles.tsx";
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';



const Footer = ()=>{
    return(

        <FooterContainer>
      
            <h1>Séries Temporais e Aprendizado Dinâmico</h1>
            <h2>USP - São Carlos</h2>
                    
            <div>
                <a href="#"><FaFacebook className="svg"/></a>
                <a href="https://www.instagram.com/Jean_Cassiano_"><FaInstagram className="svg"/></a>
            </div>
        </FooterContainer>
    );
}

export default Footer;