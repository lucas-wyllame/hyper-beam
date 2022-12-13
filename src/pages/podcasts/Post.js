import React, { useState, useEffect } from "react";
import PodcastHeader from "src/components/PodcastHeader";
import SpotifyAndOtherPlats from "src/components/SpotifyAndOtherPlats";
import Comments from "src/components/Comments";
import { ConnectContent } from "src/ConfigContent";
const envUrl = require('../../envUrl.json')

export default function Post() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    const url = window.location.href;
    async function FetchMyApi() {
      let items = await ConnectContent();
      let numberUrl = url.replace(`${envUrl.link}/podcasts/hyperbeam`, "");
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast" && x.fields.number == numberUrl
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);

  return (
    <>
      <PodcastHeader
        title={all.map((res) => {return(res.fields.title)})}
        backgroundImg={`url(${all.map((res) => {return(res.fields?.bigImage?.fields.file.url)})})`}
        hyperCardImage={`url(${all.map((res) => {return(res.fields?.littleImage?.fields.file.url)})})`}
        number={all.map((res) => {return(res.fields.number)})}
        gameTags={all.map((res) => {return(res.fields.gameTags)})}
        desc={all.map((res) => {return(res.fields.description)})}
      />
      <SpotifyAndOtherPlats url={all.map((res) => res.fields.podcastUrl)} />
      <Comments />
    </>
  );
}
