import {useEffect, useState} from 'react';

export default function BackgroundImages() {
    const bgImageAmount: number = 31;
    const bgImages:number[] = [];

    for (let i = 0; i < bgImageAmount; i++) {
        bgImages.push(bgImageAmount);
    }

    const [bgIndex, setBgIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadImages = async () => {
        let j: number = 0;

        for (let i = 0; i < bgImageAmount; i++) {
            const img = new Image();

            img.src = `./img/bg/${i}.png`;
            img.onload = () => {
                j += 1;
                if (j >= bgImageAmount) {
                    setIsLoaded(true);
                }
            };
        }
    }

    useEffect(() => {
        if (!isLoaded) return;

        const interval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % bgImageAmount);

        }, 15000);

        return () => clearInterval(interval);
    }, [isLoaded]);

    return (
        <>
            {
                isLoading ?
                    (
                        bgImages.map((item, index: number) => (
                            <img key={index} src={`./img/bg/${index}.png`} className={`background-img ${index === bgIndex ? 'visible' : 'hidden'}`} alt={"Background image"}/>
                        ))
                    )
                    : (
                        <img key={0} src={"./img/bg/0.png"} className={`background-img visible`} alt="background image" onLoad={() => {
                            setTimeout(() => {
                                loadImages();
                                setIsLoading(true);
                            }, 5000)
                        }}/>
                    )
            }
        </>
    )
}