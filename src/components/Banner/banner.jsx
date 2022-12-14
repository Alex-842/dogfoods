import React from "react"; 
import "./banner.css";
import {ReactComponent as DogImg} from "../../pages/img/logo_min.svg";
import pic from "./img/i.png"
import pic1 from "./img/1.png"

export default ({data}) => {
    return <>
<div className="banner">
    <div className="bannerFirst">
    <div className="bannerOne">
        <h1>Подарок за<br/> первый заказ!</h1>
        <p>Легкое говяжье - пластины</p>
    </div >
    <img src={pic} alt="Собачки" />
    {/* <DogImg/> */}
    </div>

    <div className="hit">
        <h1>Хиты</h1>
    </div>

<div className="bannerSecond">
<div className="bannerTwo">
    <div>
    <h2>Наборы</h2>
    <p>для дрессировки</p>
    <h2>от 840 рублей</h2> 
    </div>
    <img src={pic1} alt="Собачки" />
</div>

<div className="bannerThree">
    <div>
    <h2>Микс масел</h2>
    <p>пищевая здоровая<br/> натуральная добавка</p>
    </div>
    <DogImg/>
</div>
</div>

<div className="like">
    <h1>Лакомства</h1>
</div>

<div className="bannerThird">
<div className="bannerFour">
    <div>
    <h2>Рога<br/>северного<br/> оленя</h2>
    <p>от 10 до 30 кг.</p>
    </div>
    <DogImg/>
</div>

<div className="bannerFive">
    <div>
    <h2>Слипы из<br/> шеи индейки</h2>
    <p>100 % натуральное</p>
    </div>
    <DogImg/>
</div>
</div>
    </div>
    </>
}