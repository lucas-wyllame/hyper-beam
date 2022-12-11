import { Desc, MoreInfs, Title } from "@styles/globalStyles";
import { useState, useEffect } from "react";
import { ConnectContent } from "src/ConfigContent";
import { Content, LeftImage, TextDiv } from "./styles";

export default function About() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "apresentation"
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);
  return (
    <Content>
      {console.log("About(apresentation) all", all)}
      <LeftImage />
      <TextDiv>
        <Title margin="0 0 5px 0">Somos o Hyper Beam</Title>
        <Desc margin="0 0 22px 0">
          A fagulha de amor aos games em forma de podcast.
        </Desc>
        {all.map((res, index) => {
          return (
            <MoreInfs key={index} fontSize={"1.4rem"}>
              {res.fields.apresentationText}
            </MoreInfs>
          );
        })}
      </TextDiv>
    </Content>
  );
}
