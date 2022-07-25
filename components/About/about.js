import styled from "styled-components";
import { Title, Desc } from './../Global/globalStyles';

const Content = styled.div`
  width: 100%;
  height: 476px;
  margin: 91px 0;
  display: flex;
`;

const LeftImage = styled.div`
  width: 50%;
  height: 476px;
  background: brown;
  border-radius: 0 50px 50px 0;
`;

const TextDiv = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  padding-left: 48px;
`;



const MoreInfs = styled.h2`
  font-size: 25px;
  color: #ffffff;
`;

export default function About() {
  return (
    <Content>
      <LeftImage></LeftImage>
      <TextDiv>
        <Title
        >Somos o Hyper Beam</Title>
        <Desc
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
