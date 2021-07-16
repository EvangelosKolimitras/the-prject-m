import React from "react";
import { map } from "../../utils/fp";
import { NavItem } from "../NavItem/NavItem";
import { createEntpoints, entpoints } from "./endpoints";

const paths = createEntpoints(entpoints);

export const Nav = () => <ul> {map(path => <NavItem key={path.id} path={path} />)(paths)} </ul>;
