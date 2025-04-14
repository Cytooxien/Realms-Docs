import {useEffect, useState} from "react";
// @ts-ignore
import Image from '@theme/IdealImage';

export default function BackgroundImages() {
    const bgImageAmount:number = 31;
    const bgImages:number[] = [];

    for (let i = 0; i < bgImageAmount; i++) {
        bgImages.push(bgImageAmount);
    }

    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % bgImageAmount);

        }, 15000);

        return () => clearInterval(interval);
    }, [bgIndex]);

    return (
        <>
            {bgImages.map((item, index:number) => (
                    <Image key={index} img={`img/bg/${index}.png`} className={`background-img ${index === bgIndex ? 'visible' : 'hidden'}`}/>
            ))}
        </>
    )
}