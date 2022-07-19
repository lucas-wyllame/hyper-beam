import styled from "styled-components";
import { Title, Desc } from "../Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 836px;
  background: #11122d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px;
`;

const PlatsCards = styled.div`
  width: 274px;
  height: 274px;
  background: #7c7da2;
  margin: 70px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  :hover{ 
    width: 288px;
    height: 335px;
    div{
      width: 146px;
      height: 146px;
      background: green;
    }
  }
`;



const PlatsIcons = styled.div`
  width: 136px;
  height: 136px;
  background: #fff;
`;

const PlatsTitle = styled.label`
  font-size: 28px;
  color: #ffffff;
  margin: 15px 0 50px 0;
  font-weight: bold;
`;

const PlatsButtons = styled.button`
  font-size: 20px;
  color: #fff;
  width: 247px;
  height: 49px;
  border-radius: 44px;
  background: none;
  border: 1px solid #ffffff;
  margin-bottom: 25px;
`;

export default function AvaiablePlats() {
  return (
    <Content>
      <Title>Plataformas disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <PlatsCards>
        <PlatsIcons></PlatsIcons>
      </PlatsCards>
      <PlatsTitle>Spotify</PlatsTitle>
      <PlatsButtons>
        <a
          href="https://podcastaddict.com/podcast/3670417" target="_blank" rel="noreferrer">
            Podcast Addict
        </a>
      </PlatsButtons>
      <PlatsButtons><a href="https://textoeditable.com.br/bloco-de-notas-online/" target="_blank" rel="noreferrer">
        Sugerir plataforma
        </a>
        </PlatsButtons>
    </Content>
  );
}
