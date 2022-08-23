import styled from "styled-components";
import { Title, Desc } from "../../components/Global/globalStyles";
import { PlatsButton } from "../../components/AvailablePlats/styles";

const Content = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PlaySpotify = styled.div`
  width: 30%;
  height: 256px;
  background: purple;
  display: flex;
`;

const TextPlats = styled.div`
  width: 50%;
  height: 285px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const OtherPlats = styled.div`
  width: 83%;
  height: 53%;
  display: flex;
  justify-content: space-between;
`;
const OtherPlatsMid = styled.div`
  width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Plats() {
  return (
    <Content>
      <PlaySpotify></PlaySpotify>
      <TextPlats>
        <Title>Quer escutar em outra plataforma?</Title>
        <Desc maxWidth={"100%"}>
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
