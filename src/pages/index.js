import Header from "../components/Home/header";
import HomeBanner from "../components/Home/homeBanner";
import About from "../components/About/about";
import LastEpisodes from "../components/LastEpisodes";
import OurTeam from "../components/OurTeam";
import AvailablePlats from "../components/AvailablePLats";
import Footer from "../components/Footer/footer";


export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <LastEpisodes />
      <OurTeam />
      <AvailablePlats />
      <Footer /> 
    </>
  );
}
