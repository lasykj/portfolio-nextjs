import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Layout from "../components/layout/layout"
import CustomAppProps from "../shared/interfaces/custom-app-props.interface";
import Config from "../shared/interfaces/config-default.interface";


MyApp.getInitialProps = async ({ctx}: any) => {
    const config: Config = await import("../config/default.json")
    return {
        config: JSON.stringify(config)
    };
}

function MyApp({Component, pageProps, config}: CustomAppProps) {
    const parsedConfig = JSON.parse(config)

    return <Layout config={parsedConfig}>
        <Component {...pageProps} config={parsedConfig}/>
    </Layout>

}

export default MyApp
