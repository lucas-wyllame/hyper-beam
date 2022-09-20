import React from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Home/header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/footer"

export default function Podcasts() {

    const router = useRouter();
    const parametro = router.query.id;

    return(
        <>
        <Header />
      
        {parametro === "podcasts"? <Carousel />
        :null
    }
    <Footer />
        </>
    )
}