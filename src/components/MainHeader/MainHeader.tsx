import { Nav } from "../Nav/Nav";
import Styles from "./Header.module.css";

export const MainHeader = () => {
    return <header className={Styles.Header}> <Nav /> </header>
}