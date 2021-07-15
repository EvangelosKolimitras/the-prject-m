import { NavLink } from "react-router-dom";
import { createEntpoints, entpoints } from "./endpoints";
import Styles from './Nav.module.css';

const paths = createEntpoints(entpoints);

export const Nav = () => (
    <ul>
        {
            paths.map(path => {
                return (
                    <li key={path.id}>
                        <NavLink activeClassName={Styles.activeNavLink} to={path.path}>{path.endpoint}</NavLink>
                    </li>
                )
            })
        }
    </ul>
)