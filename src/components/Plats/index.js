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
      <PlaySpotify>
        <iframe
          src="https://open.spotify.com/embed/episode/1wO15cj7a7gtlIGcfEPbNw?utm_source=generator"
          width="100%"
          height="232"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          
        ></iframe>
      </PlaySpotify>
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
