import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import { Content, LeftImage, TextDiv } from "./styles";

export default function About() {
  return (
    <Content>
      <LeftImage></LeftImage>
      <TextDiv>
        <Title widthMobile={"294px"}>Somos o Hyper Beam</Title>
        <Desc maxWidth={"50%"} widthDescMobile={"276px"} maxWidthMobile={"276px"}>
          A fagulha de amor aos games em forma de podcast.
        </Desc>
        <MoreInfs fontsize={"14px"}>
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </TextDiv>
    </Content>
  );
}
