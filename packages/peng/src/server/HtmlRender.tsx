// @ts-ignore
import {useContext, FunctionComponent, ReactNode} from "react";
import { ServerStyleContext } from "./ServerStyleContext";

export const HtmlRender: FunctionComponent<{
    content: string,
    styles?: ReactNode,
}> = ({content, styles}) => {
    const serverSyleData = useContext(ServerStyleContext);

    return (<html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/live/assets/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/live/assets/favicon-16x16.png"/>
        <link rel="manifest" href="/live/assets/site.webmanifest"/>
        <link rel="mask-icon" href="/live/assets/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        {serverSyleData?.map(({ key, ids, css }) => (
            <style
                key={key}
                data-emotion={`${key} ${ids.join(' ')}`}
                dangerouslySetInnerHTML={{ __html: css }}
            />
        ))}
        <meta name="theme-color" content="#ffffff"/>
        {styles}
        <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"/>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"/>
    </head>
    <body>
    <div id="react-view" dangerouslySetInnerHTML={{__html: content}}/>
    </body>
    </html>)
}
