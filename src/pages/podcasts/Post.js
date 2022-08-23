import React from "react";
import Header from "../../components/Home/header";
import Podcast from "./Podcast"
import Plats from "./Plast";
import Comments from "./Comments";
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
