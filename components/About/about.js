import styled from "styled-components";
import { Title, Desc, MoreInfs } from "./../Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 476px;
  margin: 91px 0;
  display: flex;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const LeftImage = styled.div`
  width: 50%;
  height: 476px;
  background: red;
  border-radius: 0 50px 50px 0;
  @media (max-width: 480px) {
    width: 100%;
    height: 253px;
    border-radius: 0;
  }
`;

const TextDiv = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  padding-left: 48px;
  @media (max-width: 480px) {
    padding-left: 18px;
  }
`;

export default function About() {
  return (
    <Content>
      <LeftImage></LeftImage>
      <TextDiv>
        <Title
          widthMobile={"294px"}
        >Somos o Hyper Beam</Title>
        <Desc
          widthDescMobile={"276px"}
          maxWidthMobile={"276px"}
        >A fagulha de amor aos games em forma de podcast.</Desc>
        <MoreInfs>
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </TextDiv>
    </Content>
  );
}
