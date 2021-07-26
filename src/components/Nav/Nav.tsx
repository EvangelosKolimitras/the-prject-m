import { useState } from "react";
import { useEffect } from "react";
import { Entpoint, getEntpoints } from "../../data/endpoints";
import { NavItem } from "../NavItem/NavItem";
import Styles from './Nav.module.css';

export const Nav = () => {
    const [paths, setPaths] = useState<Entpoint[]>([]);
    useEffect(() => {
        getEntpoints().then(data => {
            setPaths(data);
        });
    }, []);

    return (
        <ul className={Styles.Nav}>
            {
                paths.map(path => <NavItem key={path.id} path={path} />)
            }
        </ul>
    )
};
