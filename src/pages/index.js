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
          <title>HYPER BEAM - Podcasts sobre vídeo games</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name='description' content='A fagulha de amor aos games em forma de podcast.' />
        </Head>
      </div>
      <HomeBanner />
      <About />
      <GlobalStyles />
      <LastEpisodes />
      <OurTeam />
      <AvailablePlats />
    </>
  );
}
