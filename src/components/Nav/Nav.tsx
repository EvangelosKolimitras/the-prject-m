import React from "react";
import { map } from "../../utils/fp";
import { NavItem } from "../NavItem/NavItem";
import { createEntpoints, entpoints } from "./endpoints";
import Styles from './Nav.module.css';

const paths = createEntpoints(entpoints);

export const Nav = () => <ul className={Styles.Nav}> {map(path => <NavItem key={path.id} path={path} />)(paths)} </ul>;
