import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Image, Button, ButtonGroup } from "react-bootstrap";
import { EmojiFrown } from "react-bootstrap-icons";

import Ctx from "../Ctx";
import Row from "../components/Row/row";

/*
    +1) Создать массив корзины как Ctx
    +2) сохранять корзину в localStorage
    +3) Создать страницу Cart и подключить к ней роутер
    +4) Создать ссылку на страницу с корзиной (header)
    +5) Научиться добавлять товары в корзину
    6) Отобразить информацию о корзине
    7) Изменять количество товаров в корзине и пересчитывать сумму
    [{
        id: "...",
        cnt: "..."
    }]
*/

export default () => {
    const [gds, setGds] = useState([]);
    const { basket, goods } = useContext(Ctx);
    useEffect(() => {
        let arr = [];
        if (goods.length) {
            basket.forEach(el => {
                arr.push(goods.filter(g => g._id === el.id)[0])
            })
        }
        setGds(arr);
    }, [basket, goods])
    return <>
        {basket.length > 0 && gds.length > 0 
            ? <>
                <h1>Корзина</h1>
                <Table>
                <thead>
                    <tr>
                        <th>Изображение</th>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((el, i) => <Row key={el.id} {...gds[i]} {...el} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} className="text-end fw-bold fs-3">ИТОГО:</td>
                        <td className="fw-bold fs-3">{basket.reduce((acc, el, i) => {
                            acc += el.cnt * gds[i].price;
                            return acc;
                        }, 0)}₽</td>
                    </tr>
                </tfoot>
                </Table>
            </>
        :
        <div className="empty-block">
            <EmojiFrown />
            <p>Вы еще не добавили ни одного товара в корзину!</p>
            <Link to={"/" + "catalog"} className="btn">В каталог</Link>
        </div>
        }
        
    </>
}