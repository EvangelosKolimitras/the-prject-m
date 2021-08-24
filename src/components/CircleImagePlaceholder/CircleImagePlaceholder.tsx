import { useState } from 'react';
import { info } from '../../bio';
import Styles from './CircleImagePlaceholder.module.css';

export const CircleImagePlaceholder = () => {
    const { name: n, lastname: l, avatarURL: a } = info;
    const [name] = useState(n);
    const [lastname] = useState(l);
    const [altMsg] = useState(`An image of ${name} ${lastname}`);
    const [avatar] = useState(a);
    return <img className={Styles.CircleImagePlaceholder} src={avatar} alt={altMsg} />
}