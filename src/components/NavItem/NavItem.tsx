import React from "react";
import { NavLink } from "react-router-dom";
import { Entpoint } from "../../data/endpoints";
import Styles from './NavItem.module.css';

export const NavItem = (props: { path: Entpoint }) => {
    const { path, endpoint } = props.path;
    return <NavLink className={Styles.NavItem} activeClassName={Styles.activeNavItem} to={path}>{endpoint}</NavLink>
}