import React from "react";
import { AppProps } from "next/app";
import "../styles/global.css";

export default function
MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    );
};




