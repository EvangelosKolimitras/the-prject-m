import signature from './signature.png';
import logo from './logo.png';
import Styles from './Logo.module.css';

export const Logo = () => {
    return <div className={Styles.logoWrapper}>
        <img className={Styles.logo} src={logo} alt="The project M logo" />
        <img className={Styles.signature} src={signature} alt="The project M signaure" />
    </div>
}