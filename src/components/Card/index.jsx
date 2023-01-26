import React, {useContext, useState} from "react";
import "./index.css";
import Ctx from "../../Ctx";
// import { useState } from "react";

export default ({name, pictures, price, likes, _id}) => {
    const {user, setFavorites, api, setGoods} = useContext(Ctx);
    const [like, setLike] = useState(likes.includes(user._id));

    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setLike(!like);
        api.setLike(_id, like)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFavorites(prev => {
                    let arr = prev.filter(el => el._id === _id);
                    return arr.length > 0 ? 
                        prev.filter(el => el._id !== _id) : 
                        [...prev, data]
                })
                setGoods(prev => prev.map(el => el._id === _id 
                    && like ? 
                    el.likes.push(user._id) : 
                    el.likes.filter(l => l !== user._id)))
            })
    }
    return <div className="card">
        <img src={pictures} alt={name} style={{height: "100px"}}/>
        {name}
        <h6>{price} ₽</h6>
        <button className="btn">Купить</button>
        <span className="card__heart" onClick={update}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    </div>
}