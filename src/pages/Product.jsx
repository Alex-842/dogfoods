import React from "react";
import {useParams, Link} from "react-router-dom";

export default ({}) => {
    const {id} = useParams();
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    return <>
        <h1>Страница товара</h1>
        <p>{id}</p>
        <Link to="/catalog">Назад</Link>
    </>
}