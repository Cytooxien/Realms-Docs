import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Layout from '@theme/Layout';
// @ts-ignore
import Image from '@theme/IdealImage';

import '../css/homepage.css';
import React, {useState, useEffect} from "react";

import BackgroundImages, {loadImages} from "@site/src/components/bg-image";
import FallbackImage from "@site/src/components/fallback-image";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            loadImages().then(() => {
                setTimeout(() => setIsLoaded(true), 2500);
            });
        }, 5000);

        return () => clearTimeout(timeout);
    }, [isLoaded]);

    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the community-driven documentation for Cytooxien Realms">
            <main className={"main"}>
                <div className={"background-container"}>
                    {
                        isLoaded ? (<BackgroundImages/>) : null
                    }
                    <div className={"background-img__svg"} style={{opacity: `${isLoaded ? 0 : 0.75}`}}>
                        <FallbackImage whenLoaded={() => setIsLoaded(true)}/>
                    </div>
                </div>

                <div className={"main__card"}>
                    <Image img={"XLogo_3D_14x.webp"} alt={"Cytooxien Logo"} className={"logo"} />
                    <h1 className={"title red-text"}>Cytooxien-Realms Wiki</h1>
                    <p className={"subtitle"}>
                        <Translate>home.subtitle</Translate>
                    </p>
                    <Link to={"./docs/getting-started"} className={"btn"}>
                        <Translate>home.getStarted</Translate>
                    </Link>
                </div>
            </main>
        </Layout>
    );
}
