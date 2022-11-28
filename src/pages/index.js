import Header from "src/components/Header.js/header";
import HomeBanner from "src/components/Home/homeBanner";
import About from "src/components/About/about";
import LastEpisodes from "src/components/LastEpisodes";
import OurTeam from "src/components/OurTeam";
import AvailablePlats from "src/components/AvailablePlats";
import Footer from "src/components/Footer/footer";
import { GlobalStyles } from "@styles/globalStyles";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HomeBanner />
      <About />
      <GlobalStyles />
      <LastEpisodes />
      <OurTeam />
      <AvailablePlats />
      {/* <Footer /> */}
    </>
  );
}
