import Footer from "../layout/footer"
import React, {ComponentProps, ReactChildren} from "react";
import Config from "../../shared/interfaces/config-default.interface";

type LayoutProps = {
    children: React.ReactNode;
    config: Config;
}

export default function Layout({children, config}: LayoutProps) {
    return <>
        {children}
        <Footer config={config}/>
    </>
}