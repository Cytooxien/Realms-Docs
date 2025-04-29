import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import Layout from '@theme/Layout';
// @ts-ignore
import Image from '@theme/IdealImage';

import BackgroundImages from "@site/src/components/bg-image";

import '../css/homepage.css';
import {useState} from "react";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    const [background, setBackground] = useState(false);

    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the community-driven documentation for Cytooxien Realms">
            <main className={"main"}>
                {
                    background ?
                        <div className={"background-container"}>
                            <BackgroundImages/>
                        </div>
                        :
                        <></>
                }

                <div className={"main__card"}>
                    <Image img={"XLogo_3D_14x.png"} alt={"Cytooxien Logo"} className={"logo"} onLoad={() => setBackground(true)} />
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
