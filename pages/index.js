import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Home/header'
import HomeBanner from '../components/Home/homeBanner'
import About from '../components/About/about'
import Footer from '../components/Footer/Footer'
import LastEpisodes from '../components/LastEpisodes'

export default function Home() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <About/>
    <LastEpisodes/>
    <Footer/>
    </>
  )
}
