import React from "react";
import { useRouter } from "next/dist/client/router";
import AllPodcasts from "../components/AllPodcasts";

export default function Podcasts() {
  const router = useRouter();
  const parametro = router.query.id;

  return (
    <>
      {parametro === "podcasts" ? <AllPodcasts /> : null}
    </>
  );
}
