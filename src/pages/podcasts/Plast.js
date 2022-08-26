import styled from "styled-components";
import { Title, Desc } from "../../components/Global/globalStyles";
import { PlatsButton } from "../../components/AvailablePlats/styles";

const Content = styled.div`
  width: 100%;
  height: 725px;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    height: 700px;
    margin-bottom: -54px;
  }
`;

const PlaySpotify = styled.div`
  width: 30%;
  height: 256px;
  background: purple;
  display: flex;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 85%;
    height: 134px;
  }
`;

const TextPlats = styled.div`
  width: 50%;
  height: 285px;
  background: pink;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 85%;
    height: 70%;
  }
`;

const OtherPlats = styled.div`
  width: 83%;
  height: 53%;
  background: green;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    margin-top: 40px;
    flex-direction: column;
    height: 61%;
  }
`;
const OtherPlatsMid = styled.div`
  width: auto;
  height: 150px;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Plats() {
  return (
    <Content>
      <PlaySpotify></PlaySpotify>
      <TextPlats>
        <Title
          widthMobile={"256px"}
          textAlignMobile={"start"}
          margin={"0 38px 0 0"}
        >
          Quer escutar em outra plataforma?
        </Title>
        <Desc widthDescMobile={"294px"} maxWidth={"100%"}>
          Sem problema! Veja onde encontrar nosso podcast para escutar
        </Desc>
        <OtherPlats>
          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
          >
            Google Podcast
          </PlatsButton>

          <OtherPlatsMid>
            <PlatsButton
              href="https://bit.ly/3Qe9421"
              target="_blank"
              rel="noreferrer"
            >
              Pocket Casts
            </PlatsButton>
            <PlatsButton
              href="https://textoeditable.com.br/bloco-de-notas-online/"
              target="_blank"
              rel="noreferrer"
            >
              Sugerir Plataforma
            </PlatsButton>

          </OtherPlatsMid>

          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
          >
            Podcast Addict
          </PlatsButton>
        </OtherPlats>
      </TextPlats>
    </Content>
  );
}
