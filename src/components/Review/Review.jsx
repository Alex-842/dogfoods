import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons"
import Ctx from "../../Ctx";

export default ({author, rating, created_at}) => {
    const { api, PATH, user, setGoods } = useContext(Ctx);
    const [authorid, setAuthorid] = useState({});
    const setRating = (n) => {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<StarFill key={i}/>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Star key={i}/>);
        }
        return stars;
    }

    useEffect(() => {
        api.getUser(author)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setAuthorid(data.name);
                    console.log(data.name);
                    
                }
            })
    }, [])

    return <>
        <h3>{JSON.stringify(authorid) || ""}</h3>
        <div>{setRating(rating)}</div>
        <div>{new Date(created_at).toLocaleString()}</div>
    </>
}