import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title="Cytooxien-Realms Wiki" description="This is the official documentation for Cytooxien Realms">
            <h1>Cytooxien-Realms Wiki</h1>
            <h2>Coming soon™</h2>
        </Layout>
    );
}
