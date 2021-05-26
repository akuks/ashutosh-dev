import Document from "next/document";
import {Html, Head, Main, NextScript} from "next/document";

class AppDocument extends Document {
    render () {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Cache-control" content="public" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="keywords" content="Perl, Python, Mojolicious tutorial, Javascript, Next.js" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default AppDocument
