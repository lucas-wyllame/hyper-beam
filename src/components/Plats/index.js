import {
  Content,
  PlaySpotify,
  TextPlats,
  OtherPlats,
  OtherPlatsMid,
} from "./styles";
import { Title, Desc } from "../../components/Global/globalStyles";
import { PlatsButton } from "../../components/AvailablePlats/styles";

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
