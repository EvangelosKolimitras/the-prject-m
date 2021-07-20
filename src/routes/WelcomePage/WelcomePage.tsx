import { Logo } from "../../components"
import Styles from './WelcomePage.module.css';

export const WelcomePage = () => {
    return <>
        <div className={Styles.Welcome}>
            <Logo />
        </div>
    </>
};