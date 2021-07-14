import { NavLink } from "react-router-dom";
import Styles from './Nav.module.css';

export const Nav = () => <ul>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/weddings">weddings</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/christening">christening</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/portraits">portraits</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/food-photography">food-photography</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/interior-photography">interior-photography</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/events">events</NavLink>
    </li>
    <li>
        <NavLink activeClassName={Styles.activeNavLink} to="/landscapes">landscapes</NavLink>
    </li>
</ul>