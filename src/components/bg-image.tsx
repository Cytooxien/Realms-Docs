import {ReactElement, ReactNode, useEffect, useState} from 'react';

const bgImageAmount: number = 31;

export default function BackgroundImages() {
    const bgImages = Array.from({ length: bgImageAmount }, (_, i) => i);

    const [bgIndex, setBgIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        if (!isLoaded) return;

        const interval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % bgImageAmount);

        }, 15000);

        return () => clearInterval(interval);
    }, [isLoaded]);

    useEffect(() => {
        if (loadedCount >= bgImageAmount) {
            setIsLoaded(true);
        }
    }, [loadedCount]);

    return (
        <>
            {
                bgImages.map((item, index: number) => (
                    <img key={index} src={`./img/bg/${index}.webp`}
                         className={`background-img ${index === bgIndex ? 'visible' : 'hidden'}`}
                         alt={"Background image"}
                         onLoad={() => setLoadedCount((prev) => prev + 1)}/>
                ))
            }
        </>
    )
}

export async function loadImages() {
    let j: number = 0;

    for (let i = 0; i < bgImageAmount; i++) {
        const img = new Image();

        img.src = `./img/bg/${i}.webp`;
    }
}