import "../styles/globals.css";
import "../components/LastEpisodes/teste.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/poppins";
import Header from "src/components/Header/header";
import Footer from "src/components/Footer/footer";
import { useEffect, useState } from "react";
import { ConnectContent } from "src/ConfigContent";

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
