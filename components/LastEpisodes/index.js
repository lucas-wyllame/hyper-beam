import styled from "styled-components";
import { Title, Desc, MoreInfs } from "./../Global/globalStyles";
import HyperCard from "./../HyperCard/hyperCard";

const Content = styled.div`
  width: 100%;
  height: 1000px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  padding: 0 88px;
`;

const ListPodcasts = styled.div`
  width: 100%;
  height: 700px;
  margin: 20px 0;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 429px;
  border-radius: 44px 44px 0px 0px;
  background: purple;
  display: flex;
  justify-content: space-between;
`;

const TextsDivEp = styled.div`
  width: auto;
  height: auto;
 
  margin-right: 62px;
`;

const TitleInside = styled.div`
  font-size: 38px;
  margin: 10px 0;
  width: 43%;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #ffe747;
  }
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    opacity: 0.5;
    margin-top: 5px;
  }
`;

export default function LastEpisodes() {
  return (
    <Content>
      <Title>Episódios Recentes</Title>
      <Desc>Acompanhe nosso podcast e seus episódios</Desc>
      <ListPodcasts>
        <Background>
          <HyperCard
            position={"static"}
            width={"337px"}
            height={"337px"}
            margin={"-26px 0 0 60px"}
          ></HyperCard>
          <TextsDivEp>
            <TitleInside>
              Hyper Beam <div /> <span>03</span>
            </TitleInside>
            <MoreInfs width={"694px"}>
              Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
              rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu
              erat a cursus sodales. Fusce vel nulla aliquam, convallis odio
              semper, finibus purus. orci, non malesuada augue.
            </MoreInfs>
          </TextsDivEp>
        </Background>
      </ListPodcasts>
    </Content>
  );
}
