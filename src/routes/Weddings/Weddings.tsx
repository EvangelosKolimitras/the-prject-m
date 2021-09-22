import Styles from './Wedding.module.css';
import GlobalStyles from '../../App.module.css';
import { useEffect, useState } from 'react';
import { pexels_key } from '../../config';

export const Weddings = () => {
    const [photos, setPhotos] = useState<{ src: Pexels.Src['landscape'], w: Pexels.Response['width'], h: Pexels.Response['height'] }[] | null>(null);

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.pexels.com/v1/photos/2014422`, {
                headers: {
                    authorization: `${pexels_key}`
                }
            });
            const data: Pexels.Response = await res.json();
            setPhotos([{ src: data.src.landscape, w: data.width, h: data.height }])
            console.log(data.src.landscape);
        }
        getData();
    }, [])
    return <div className={GlobalStyles.ModuleRouteContainer}>
        <h1 className={Styles.header_1}>
            Wedding
            {
                photos?.map((photo) => {
                    return <img width={'300vw'} height={'100vh'} src={photo.src} alt='s' />
                })
            }
        </h1>
    </div>
}