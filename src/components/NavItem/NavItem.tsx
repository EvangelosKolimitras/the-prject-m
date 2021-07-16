import React from "react";
import { NavLink } from "react-router-dom";
import { Entpoint } from "../Nav/endpoints";
import Styles from './NavItem.module.css';

export const NavItem = (props: { path: Entpoint }) => {
    const { path: { endpoint, path } } = props;
    return <li className={Styles.NavItem}> <NavLink activeClassName={Styles.activeItem} to={path}>{endpoint}</NavLink> </li>
}