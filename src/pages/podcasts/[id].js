import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Post from "./Post";

export default function Podcasts() {
  const router = useRouter();
  const parametro = router.query.id;
  const [name, setName] = useState();
  useEffect(() => {
      async function fetchUrl() {
        const url = window.location.href;
        setName(url.replace("http://localhost:3000/podcasts/", ""));
    }
    fetchUrl();
}, []);


  return <>{parametro === name ? <Post /> : null}</>;
}
