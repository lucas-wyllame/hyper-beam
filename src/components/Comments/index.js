import Disqus from "disqus-react";
import styled from "styled-components";
import { useState, useEffect } from "react";
const envUrl = require('../../envUrl.json')

const DisqusDiv = styled.div`
  width: 90%;
`;

export default function Comments() {
  const [disqusUrl, setDisquisUrl] = useState("");
  const [disqusId, setDisquisId] = useState("");

  useEffect(() => {
    setDisquisId(
      window.location.href.toString().replace(`${envUrl.link}/podcasts/`, "")
    );
    setDisquisUrl(window.location.href.toString());
  }, []);

  const disqusShortname = "hyper-beam";
  const disqusConfig = {
    url: disqusUrl,
    identifier: disqusId,
    title: disqusId,
  };
  return (
    <Content>
      <DisqusDiv>
        {disqusUrl && (
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
            theme="auto"
          />
        )}
      </DisqusDiv>
    </Content>
  );
}
