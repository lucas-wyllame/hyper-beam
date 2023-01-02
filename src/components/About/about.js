import { Desc, MoreInfs, Title } from "@styles/globalStyles";
import { useState, useEffect } from "react";
import { ConnectContent } from "src/ConfigContent";
import { Content, LeftImage, TextDiv } from "./styles";

export default function About() {
  const [all, setAll] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "apresentation"
      );
      setAll(allContent);
      setAboutContent(allContent?.map((res) => res?.fields));
    }
    FetchMyApi();
  }, []);
  return (
    <Content>
      <LeftImage
        image={
          `url(${aboutContent[0]?.apresentationImage?.fields?.file?.url})` || ""
        }
      />
      <TextDiv>
        <Title margin="0 0 5px 0">Somos o Hyper Beam</Title>
        <Desc margin="0 0 22px 0" marginTablet="0 0 38px 0">
          A fagulha de amor aos games em forma de podcast.
        </Desc>

        <MoreInfs
          fontSize={"1.4rem"}
          fontSizeTablet={"2.2rem"}
          fontSizeLaptopLarge="2.5rem"
        >
          {aboutContent[0]?.apresentationText}
        </MoreInfs>
      </TextDiv>
    </Content>
  );
}
