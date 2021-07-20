import { Logo } from "../../components"
import { EnterButton } from "../../components/EnterButton/EnterButton";
import Styles from './WelcomePage.module.css';

export const WelcomePage = () => {
    return <>
        <div className={Styles.Welcome}>
            <Logo />
            <EnterButton />
        </div>
    </>
};