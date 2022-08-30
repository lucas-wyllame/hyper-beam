import React from "react";
import Header from "../../components/Home/header";
import Podcast from "../../components/Podcast"
import Plats from "../../components/Plats";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer/footer"

export function Post() {
  return (
    <>
      <Header />
      <Podcast />
      <Plats />
      <Comments />
      <Footer />
    </>
  );
}