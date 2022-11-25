import { Desc, MoreInfs, Title } from "@styles/globalStyles";
import { Content, LeftImage, TextDiv } from "./styles";

export default function About() {
  return (
    <Content>
      <LeftImage></LeftImage>
      <TextDiv>
        <Title>Somos o Hyper Beam</Title>
        <Desc
        // maxWidth={"72%"}
        // widthDescMobile={"276px"}
        // maxWidthMobile={"276px"}
        >
          A fagulha de amor aos games em forma de podcast.
        </Desc>
        <MoreInfs
          // widthMobile={"324px"}
          // heightMobile={"99px"}
          fontSizeMobile={"1.4rem"}
        >
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </TextDiv>
    </Content>
  );
}
