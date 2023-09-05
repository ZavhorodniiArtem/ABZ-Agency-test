import React, {useEffect} from "react";
import "./styles.scss";
// @ts-ignore
import logo from "./../../assets/images/logo.png";
import {Anchor} from 'antd';
import {useLocation, useNavigate} from "react-router-dom";

export const Nav: React.FC = () => {

    let location = useLocation()
    let navigate = useNavigate();

    useEffect(() => {
        if (location.hash === "#users" || "#form") {
            navigate("/", {replace: true});
        }
    }, [location.hash])


    const {Link} = Anchor;

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="nav__btn">
                    <Anchor affix={false} targetOffset={-10}  className="nav__btn">
                        <Link href="#users" title="Users" className="nav__users buttons"/>
                        <Link href="#form" title="Sing up" className="nav__signup buttons"/>
                    </Anchor>
                </div>
            </div>
        </div>
    )
}