import logo from './logo_light.png';
import Styles from './Logo.module.css';

export const Logo = () => {
    return <div className={Styles.logoWrapper}>
        <img className={Styles.logo} src={logo} alt="The project M logo" />
    </div>
}