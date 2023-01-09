import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";
import {ReactComponent as DogImg} from "./img/logo_min.svg";
import {Facebook, Telegram, Whatsapp } from "react-bootstrap-icons"

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <div className="Left">
            <div className="logoDog">
                <Link to="/"><DogImg/> </Link> 
                <Link className="logo" to="/">DogFood</Link>
            </div>
            <span className="footer__copy">©{year}</span>&nbsp;
        </div>
        <div className="Right">
            <h2>Мы на связи</h2>
            <a href="mailto:dogfood@gmail.com">dogfood@gmail.com</a>
            <a href="tel:8999000000">8 (999) 00-00-00</a>
            <div className="Chat">
                <Facebook/>
                <Telegram/>
                <Whatsapp/>
            </div>
            
        </div>
    </footer>
}
// © => &copy;
// &nbsp; - неразбиваемый пробел