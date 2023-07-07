import "../styles/globals.css";
import "../components/LastEpisodes/teste.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/poppins";
import Header from "src/components/Header/header";
import Footer from "src/components/Footer/footer";
import { useEffect, useState } from "react";
import { ConnectContent } from "src/ConfigContent";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [all, setAll] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "logos"
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);

  return (
    <>
    <div>
        <Head>
          <title>HYPER BEAM - Podcasts sobre vídeo games</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name='description' content='A fagulha de amor aos games em forma de podcast.' />
          <meta property="og:description" content="A fagulha de amor aos games em forma de podcast."/>
          <meta property="og:url" content="https://hyperbeampodcast.com/"/>
          <meta property="og:type" content="website"/>
          <link rel="icon" href="/hyperbeamLogo.svg" />
        </Head>
      </div>
      <Header
        headerLogo={`url(${all.map((res) => {
          return res.fields?.headerLogo?.fields.file.url;
        })})`}
      />

      <Component {...pageProps} />
      <Footer
        footerLogo={`url(${all.map((res) => {
          return res.fields?.footerLogo?.fields.file.url;
        })})`}
      />
    </>
  );
}

export default MyApp;
