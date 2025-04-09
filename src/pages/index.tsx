import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/core/lib/client/exports/Translate";
import Layout from '@theme/Layout';
// @ts-ignore
import Image from '@theme/IdealImage';

import '../css/homepage.css';

const bgImages = [
    './img/bg/1.png',
    './img/bg/2.png',
    './img/bg/3.png',
    './img/bg/4.png',
    './img/bg/5.png',
    './img/bg/6.png',
    './img/bg/7.png',
    './img/bg/8.png',
    './img/bg/9.png',
    './img/bg/10.png'
];

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const [bgIndex, setBgIndex] = useState(0);
    const [prevBgIndex, setPrevBgIndex] = useState(null);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevBgIndex(bgIndex);
            setBgIndex(prev => (prev + 1) % bgImages.length);
            setFade(true);

            setTimeout(() => {
                setFade(false);
            }, 3000);
        }, 15000);

        return () => clearInterval(interval);
    }, [bgIndex]);

    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the official documentation for Cytooxien Realms">
            <main className={"main dark-theme"}>
                <div>
                    {prevBgIndex !== null && (
                        <Image
                            key={prevBgIndex}
                            img={bgImages[prevBgIndex]}
                            alt={"Previous Background"}
                            className={`background-img ${fade ? 'fade-out' : 'hidden'}`}
                        />
                    )}
                    <Image
                        key={bgIndex}
                        img={bgImages[bgIndex]}
                        alt={"Current Background"}
                        className={"background-img fade-in"}
                    />
                </div>

                <div className={"card"}>
                    <Image img={"/XLogo_3D_14x.png"} alt={"Cytooxien Logo"} className={"logo"}/>
                    <h1 className={"title red-text"}>Cytooxien-Realms Wiki</h1>
                    <p className={"subtitle"}>
                        Welcome to the official documentation for Cytooxien Realms!
                    </p>
                    <a href={"./docs/getting-started"} className={"btn"}>Get Started</a>
                </div>
            </main>
        </Layout>
    );
}
