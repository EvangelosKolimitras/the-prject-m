import { useHistory } from 'react-router';
import Styles from './EnterButton.module.css';
export const EnterButton = (props: any) => {
    const history = useHistory();
    return <button className={Styles.EnterButton} onClick={() => history.push('/weddings')} id={Math.random().toString()}>Enter</button>
}