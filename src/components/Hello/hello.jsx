import React from "react";
import "./hello.css";
import {Link} from "react-router-dom";

export default ({data}) => {
    return <>
    <div className="hello">
        <div>
        <h1>Крафтовые<br/> лакомства для<br/> собак</h1>
        <p>Всегда свежие лакомства ручной<br/> работы с доставкой по России и Миру</p>
        <Link to="/catalog"><button className="batn" type="button" >Каталог</button></Link>
        </div>
        
        </div>
    </>
}