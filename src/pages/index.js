import HomeBanner from "src/components/Home/homeBanner";
import About from "src/components/About/about";
import LastEpisodes from "src/components/LastEpisodes";
import OurTeam from "src/components/OurTeam";
import AvailablePlats from "src/components/AvailablePlats";
import { GlobalStyles } from "@styles/globalStyles";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <GlobalStyles />
      <LastEpisodes />
      <About />
      <OurTeam />
      <AvailablePlats />
    </>
  );
}
