import logo from './logo.png';
import styles from './Logo.module.css';
export const Logo = () => {
    return (
        <img className={styles.Logo} src={logo} alt="The project M logo" />
    )
}