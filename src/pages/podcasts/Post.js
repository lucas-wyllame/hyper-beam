import React, { useState, useEffect } from "react";
import PodcastHeader from "src/components/PodcastHeader";
import SpotifyAndOtherPlats from "src/components/SpotifyAndOtherPlats";
import Comments from "src/components/Comments";
import { ConnectContent } from "src/ConfigContent";

export default function Post() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    const url = window.location.href;
    async function FetchMyApi() {
      let items = await ConnectContent();
      console.log(items);
      console.log("url", url.replace("https://hyper-beam.vercel.app/podcasts/hyperbeam", ""))
      let numberUrl = url.replace("https://hyper-beam.vercel.app/podcasts/hyperbeam", "");
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast" && x.fields.number == numberUrl
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);

  return (
    <>
      {console.log("filtrado", all.map((res) => res.fields))}
      <PodcastHeader
        title={all.map((res) => res.fields.title)}
        number={all.map((res) => res.fields.number)}
        gameTags={all.map((res) => res.fields.gameTags)}
        desc={all.map((res) => res.fields.description)}
      />
      <SpotifyAndOtherPlats url={all.map((res) => res.fields.podcastUrl)} />
      <Comments />
    </>
  );
}
