import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import Layout from '@theme/Layout';
// @ts-ignore
import Image from '@theme/IdealImage';

import '../css/homepage.css';

const bgImages:number = 31;

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const [bgIndex, setBgIndex] = useState(0);
    const [prevBgIndex, setPrevBgIndex] = useState(null);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevBgIndex(bgIndex);
            setBgIndex(prev => (prev + 1) % bgImages);
            setFade(true);

            setTimeout(() => {
                setFade(false);
            }, 3000);
        }, 15000);

        return () => clearInterval(interval);
    }, [bgIndex]);

    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the community-driven documentation for Cytooxien Realms">
            <main className={"main"}>
                <div className={"background-container"}>
                    {prevBgIndex !== null && (
                        <Image
                            key={prevBgIndex}
                            img={`img/bg/${prevBgIndex}.png`}
                            alt={"Previous Background"}
                            className={`background-img ${fade ? 'fade-out' : 'hidden'}`}
                        />
                    )}
                    <Image
                        key={bgIndex}
                        img={`img/bg/${bgIndex}.png`}
                        alt={"Current Background"}
                        className={"background-img fade-in"}
                    />
                </div>

                <div className={"card"}>
                    <Image img={"/XLogo_3D_14x.png"} alt={"Cytooxien Logo"} className={"logo"}/>
                    <h1 className={"title red-text"}>Cytooxien-Realms Wiki</h1>
                    <p className={"subtitle"}>
                        Welcome to the community-driven documentation for Cytooxien Realms!
                    </p>
                    <Link to={"./docs/getting-started"} className={"btn"}>Get Started</Link>
                </div>
            </main>
        </Layout>
    );
}
