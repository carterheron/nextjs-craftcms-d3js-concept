import Head from 'next/head';

export default function HeadData(props) {

    return (
        <Head>
            {/* {ReactHtmlParser(props.seoData.metaTitleContainer)} */}
            <meta charSet="utf-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* {ReactHtmlParser(props.seoData.metaTagContainer)}
            {ReactHtmlParser(props.seoData.metaJsonLdContainer)}
            {ReactHtmlParser(props.seoData.metaLinkContainer)} */}
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
            {/*<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>*/}
            {/*<link rel="preload" href="/_next/static/css/9b75255b7bb4e7138676.css" as="style" />*/}
        </Head>
    );
}