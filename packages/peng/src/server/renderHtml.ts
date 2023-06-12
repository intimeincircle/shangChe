import serialize from "serialize-javascript";
import {minify} from 'html-minifier-terser';

const key = 'css';

export const reactPoduction = `
    <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    `
export const reactDevelopment = `
    <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js" crossorigin></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js" crossorigin></script>
`

const hotjar = `
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2867450,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
`

export default async (
    // eslint-disable-next-line @typescript-eslint/ban-types
    dehydratedState: {},
    head: Record<string, any>,
    extractor: Record<string, any>,
    htmlContent: string,
    initialState: Record<string, unknown>,
    css: string,
    ids: string[],
): Promise<string> => {
    const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" sizes="32x32" href="/live/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/live/assets/favicon-16x16.png">
<link rel="manifest" href="/live/assets/site.webmanifest">
<link rel="mask-icon" href="/live/assets/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
        <style data-emotion="${key} ${ids.join(' ')}">${css}</style>
        <script>
           window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)};
         </script>
     ${__DEV__ ? reactDevelopment : reactPoduction}
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>
        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>
        <!-- Insert bundled scripts into <script> tag -->
        ${extractor.getScriptTags()}
        ${head.script.toString()}
      </body>
    </html>
  `;

    // Minify HTML in production
    // @ts-ignore
    const result = await minify(html, {
        removeAttributeQuotes: true
    });
    return result
};
