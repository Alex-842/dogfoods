import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { Trash3 } from "react-bootstrap-icons";
import Review from "../components/Review/Review";
import Ctx from "../Ctx";
import "./style.css"

export default ({}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    const { api, PATH, user, setGoods, setBasket } = useContext(Ctx);
    const navigate = useNavigate();
    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);
    const btnSt = {
        position: "absolute",
        right: "20px",
        top: "120px",
        cursor: "pointer",
        height: "auto"
    }
    const remove = () => {
        api.delProduct(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setGoods(prev => prev.filter(g => g._id !== data._id))
                    navigate(`${PATH}catalog`);
                }
            })
    }

    

    const buy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev => {
            const test = prev.filter(el => el.id === id)
            console.log(test);
            if (test.length) {
                return prev;
            } else {
                return [...prev, {id: id, cnt: 1}]
            }
        })
    }

    return <>
        {product && product.author && product.author._id === user._id && <button
            onClick={remove}
            className="btn"
            style={btnSt}
        >
            <Trash3 />
        </button>}
        <h1>{product.name || "Страница товара"}</h1>
        <p>Артикул товара: {id}</p>
        <Link to={PATH + "catalog"}><button className="batn" type="button" >Назад</button></Link>

        <div className="productPage">

            <img className="productImg" src={product.pictures} alt="Изображение товара"></img>

            <div className="productRight">

                <div className="productPrice">
                    <h2>Стоимость</h2>
                    <h3>{`${product.price} ₽`}</h3>
                    {/* <p>{product.wight} грамм</p> */}
                </div>
                <button className="yellow"  type="button" onClick={buy}><b>В корзину</b></button> 
            </div>

        </div>

        <div className="productDescriptions">
            <h2>Описание</h2>
            <p>{product.description}</p>
        </div>

        <h2>Отывы</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i} />)}
        </div>
    </>
}