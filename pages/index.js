import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Home/header";
import HomeBanner from "../components/Home/homeBanner";
import About from "../components/About/about";
/*import Footer from "../components/Footer/footer";*/
import LastEpisodes from "../components/LastEpisodes";
import AvailablePlats from "../components/AvailablePLats";
import FooterN from "../components/FooterN/footern";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <LastEpisodes />
      <AvailablePlats />
      <FooterN></FooterN>
    </>
  );
}


