import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import Ctx from "../../Ctx";
import {PlusCircle, HeartFill} from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";
import { ReactComponent as DogImg } from "./img/logo_min.svg";

export default () => {
    const {user, setUser, setModalActive, PATH, favorites} = useContext(Ctx);
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <div className="logoDog">
            <Link className="logo" to={PATH}><DogImg /></Link>
            <Link className="logo" to={PATH}>DogFood</Link>
        </div>
        <Search/>

        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "20px"}}/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontSize: "20px"}}/>
                {/* <Badge bg="danger" text="light">{favorites.length}</Badge> */}
                <Badge bg="light" text="dark">{favorites.length}</Badge>
            </Link>}
            {user && user.name && <Link to={PATH + "profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div