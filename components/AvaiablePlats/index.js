import styled from "styled-components";
import { Title, Desc } from "../Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 836px;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px;
`;

const CardsPlats = styled.div`
  width: 274px;
  height: 274px;
  background: blue;
  margin: 70px 70px 0 70px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlatsLogo = styled.img`
  width: 136px;
  height: 136px;
  background: red;
`;

const TitleCards = styled.label`
  font-size: 28px;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 50px;
  font-weight: bold;
`;

const CardsButtons = styled.button`
  width: 247px;
  height: 49px;
  background: none;
  border: 1px solid #FFFFFF;
  border-radius: 44px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
`;

export default function AvaiablePlats() {
  return (
    <Content>
      <Title>Plataformas Disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <CardsPlats>
        <PlatsLogo></PlatsLogo>
      </CardsPlats>
      <TitleCards>Spotify</TitleCards>
      <CardsButtons>Podcast Addict</CardsButtons>
      <CardsButtons>Sugerir plataforma</CardsButtons>
    </Content>
  );
}
