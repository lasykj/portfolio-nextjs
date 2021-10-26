import {AppProps} from "next/app";
import {CustomPageProps} from "../types/custom-page-props.type";

export default interface CustomAppProps<P = CustomPageProps> extends AppProps<P> {
    config: string
    pageProps: CustomPageProps
}