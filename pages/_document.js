import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
          <Script
            src="https://file.kollus.com/vgcontroller/vg-controller-client.latest.min.js"
            strategy="afterInteractive"
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              const config = [{
                'initDataTypes': ['cenc'],
                'audioCapabilities': [{
                'contentType': 'audio/mp4;codecs="mp4a.40.2"'
                }],
                'videoCapabilities': [{
                'contentType': 'video/mp4;codecs="avc1.42E01E"'
                }]
              }];

              const videoElement = document.createElement('video');

              try {
                navigator.requestMediaKeySystemAccess('com.widevine.alpha', config).then(function(mediaKeySystemAccess) {
                  localStorage.setItem('player_multidrm', 'Widevine Supported');
                }).catch(function(e) {
                });
              } catch (e) {
              }

              try {
                navigator.requestMediaKeySystemAccess('com.microsoft.playready', config).then(function(mediaKeySystemAccess) {
                  localStorage.setItem('player_multidrm', 'PlayReady Supported');
                }).catch(function(e) {
                });
              } catch (e) {
              }

              try {
                videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys('com.apple.fps.1_0'));
                localStorage.setItem('player_multidrm', 'Fairplay Supported');
              } catch (e) {
              }

              if (localStorage.getItem('player_multidrm')) {
                localStorage.setItem('player_multidrm', 'MultiDrm Not Supported');
              }

              try{
                const playType = videoElement.canPlayType('video/mp4');
                if(playType!='') {
                  localStorage.setItem('player_supported', 'mp4 video support');
                }
              } catch (e){
                localStorage.setItem('player_supported', 'mp4 video not supported this browser');
              }`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it"s compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
