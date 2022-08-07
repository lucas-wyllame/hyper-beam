import styled from "styled-components";
import { Title, Desc, MoreInfs } from "./../Global/globalStyles";
import HyperCard from "./../HyperCard/hyperCard";
import { Icon } from "../Footer/footer";

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
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 429px;
  border-radius: 44px 44px 0px 0px;
  background: purple;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardAndText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  border-radius: 44px 44px 0px 0px;
`;

const TextsDivEp = styled.div`
  width: auto;
  height: auto;
  margin-left: 62px;
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
    opacity: 1;
    margin-top: 5px;
  }
`;

const IconAndButtons = styled.div`
  width: 35%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-bottom: 41px;
`;

const ButtonsEp = styled.div`
  width: ${(props) => props.widthButton};
  height: 49px;
  background: rgba(17, 18, 45, 0.6);
  border-radius: 44px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThinBarsGroup = styled.div`
  width: 100%;
  height: 20px;
  background: #11122D;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThinBars = styled.button`
  width: 330px;
  height: 10px;
  background: #fff;
  border: none;
  border-radius: 44px;
  opacity: 0.12;
  cursor: pointer;
`;

const ButtonSeeAll = styled.button`
  width: 160px;
  height: 49px;
  background: #ffe747;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  font-size: 20px;
  margin-top: 19px;
  cursor: pointer;
`;

export default function LastEpisodes() {
  return (
    <Content>
      <Title>Episódios Recentes</Title>
      <Desc>Acompanhe nosso podcast e seus episódios</Desc>
      <ListPodcasts>
        <Background>
          <CardAndText>
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
                Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum
                sodales rutrum. Praesent eget lobortis purus. Donec a finibus
                neque. Nu erat a cursus sodales. Fusce vel nulla aliquam,
                convallis odio semper, finibus purus. orci, non malesuada augue.
              </MoreInfs>
            </TextsDivEp>
          </CardAndText>
          <IconAndButtons>
            <Icon>Control</Icon>
            <ButtonsEp widthButton={"202px"}>Pokémon Unite</ButtonsEp>
            <ButtonsEp widthButton={"293px"}>The World Ends with You</ButtonsEp>
          </IconAndButtons>
        </Background>
        <ThinBarsGroup>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
        </ThinBarsGroup>
        <ButtonSeeAll>Ver todos</ButtonSeeAll>
      </ListPodcasts>
    </Content>
  );
}
