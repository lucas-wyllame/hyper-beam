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

const Plats = styled.div`
  width: 60%;
  height: 50%;
  background: crimson;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlatsCards = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #7c7da2;
  margin: 0px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  :hover {
    width: ${(props) => props.widthHover};
    height: ${(props) => props.heightHover};
    div {
      width: ${(props) => props.widthHoverDiv};
      height: ${(props) => props.heightHoverDiv};
      background: ${(props) => props.backColor};
    }
  }
`;

const PlatsIcons = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #fff;
`;

const PlatsTitle = styled.label`
  font-size: 28px;
  color: #ffffff;
  margin: 15px 0 50px 0;
  font-weight: bold;
`;

const PlatsButton = styled.a`
  font-size: 20px;
  color: #fff;
  width: 247px;
  height: 49px;
  border-radius: 44px;
  background: none;
  border: 1px solid #ffffff;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AvailablePlats() {
  return (
    <Content>
      <Title>Plataformas disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <Plats>
        <PlatsCards
          width={"196px"}
          height={"196px"}
          backColor={"#fff"}
          widthHover={"196px"}
          heightHover={"196px"}
          widthHoverDiv={"98px"}
          heightHoverDiv={"98px"}
        >
          <PlatsIcons widthIcon={"98px"} heightIcon={"98px"}></PlatsIcons>
        </PlatsCards>
        <PlatsCards
          width={"274px"}
          height={"274px"}
          backColor={"green"}
          widthHover={"288px"}
          heightHover={"288px"}
          widthHoverDiv={"146px"}
          heightHoverDiv={"146px"}
        >
          <PlatsIcons widthIcon={"136px"} heightIcon={"136px"}></PlatsIcons>
        </PlatsCards>
        <PlatsCards
          width={"196px"}
          height={"196px"}
          backColor={"#fff"}
          widthHover={"196px"}
          heightHover={"196px"}
          widthHoverDiv={"98px"}
          heightHoverDiv={"98px"}
        >
          <PlatsIcons widthIcon={"98px"} heightIcon={"98px"}></PlatsIcons>
        </PlatsCards>
      </Plats>
      <PlatsTitle>Spotify</PlatsTitle>
      <PlatsButton
        href="https://podcastaddict.com/podcast/3670417"
        target="_blank"
        rel="noreferrer"
      >
        Podcast Addict
      </PlatsButton>
      <PlatsButton
        href="https://textoeditable.com.br/bloco-de-notas-online/"
        target="_blank"
        rel="noreferrer"
      >
        Sugerir Plataforma
      </PlatsButton>
    </Content>
  );
}
