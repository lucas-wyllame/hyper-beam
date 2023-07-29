import HomeBanner from "src/components/Home/homeBanner";
import About from "src/components/About/about";
import LastEpisodes from "src/components/LastEpisodes";
import OurTeam from "src/components/OurTeam";
import AvailablePlats from "src/components/AvailablePlats";
import { GlobalStyles } from "@styles/globalStyles";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Hyper Beam Podcast</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>

      <HomeBanner />
      <GlobalStyles />
      <LastEpisodes />
      <About />
      <OurTeam />
      <AvailablePlats />
    </>
  );
}
