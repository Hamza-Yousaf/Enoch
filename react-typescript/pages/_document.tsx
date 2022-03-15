import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="twitter:creator"
            content="https://twitter.com/enoch"
            key="twhandle"
          />

          {/* Open Graph */}
          <meta property="og:url" content="https://enoch.app" key="ogurl" />
          <meta property="og:image" content="/enoch-prev.png" key="ogimage" />
          <meta property="og:site_name" content="Enoch" key="ogsitename" />
          <meta
            property="og:title"
            content="Enoch - Social Meta Commerce"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Social metaverse"
            key="ogdesc"
          />

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"
            integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link href="/path/to/three-dots.css" rel="stylesheet"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <script src="/public/js/jquery.min.js"></script>
          {/* <script src="/static/jquery.min1.js"></script> */}
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
