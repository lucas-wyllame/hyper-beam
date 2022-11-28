import React from "react";
import { useRouter } from "next/dist/client/router";
import Carousel from "../components/Carousel";

export default function Podcasts() {
  const router = useRouter();
  const parametro = router.query.id;

  return (
    <>
      {parametro === "podcasts" ? <Carousel /> : null}
    </>
  );
}
