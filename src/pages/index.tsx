import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from "@docusaurus/Link";
import Layout from '@theme/Layout';
// @ts-ignore
import Image from '@theme/IdealImage';

import BackgroundImages from "@site/src/components/bg-image";

import '../css/homepage.css';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the community-driven documentation for Cytooxien Realms">
            <main className={"main"}>
                <div className={"background-container"}>
                    <BackgroundImages/>
                </div>

                <div className={"card"}>
                    <Image img={"XLogo_3D_14x.png"} alt={"Cytooxien Logo"} className={"logo"}/>
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
