import type {NextPage} from 'next'


import Skills from "../components/index/skills";

import RecentProjects from "../components/index/recent-projects";
import Contact from "../components/index/contact";
import {CustomPageProps} from "../shared/types/custom-page-props.type";
import Head from "next/head"
import Header from "../components/index/header";


const Home: NextPage<CustomPageProps> = ({config}) => {
    return (
        <>
            <Head>
                <title>Defjt - Richard&apos;s Portfolio</title>
                <meta name="description" content="software developer portfolio"/>

            </Head>

            <main className={" text-gray-300 p-4 md:p-10"}>
                <Header config={config}/>
                <Skills config={config}/>
                <RecentProjects config={config}/>
                <Contact config={config}/>

            </main>
        </>
    )
}

export default Home
