import {
  Content,
  PlaySpotify,
  TextPlats,
  OtherPlats,
  OtherPlatsMid,
  IframeSpotify,
} from "./styles";
import { Title, Desc } from "../../components/Global/globalStyles";
import { PlatsButton } from "../../components/AvailablePlats/styles";

export default function Plats() {
  return (
    <Content>
      {/* <PlaySpotify> */}
      <IframeSpotify
        src="https://open.spotify.com/embed/episode/1wO15cj7a7gtlIGcfEPbNw?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        fontSize="1px"
      ></IframeSpotify>
      {/* </PlaySpotify> */}
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
            gridColumn={"1/2"}
            gridRow={"1/2"}
            gridColumnMobile={"1/2"}
            gridRowMobile={"1/2"}
          >
            Google Podcast
          </PlatsButton>

          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
            gridColumn={"2/3"}
            gridRow={"1/2"}
            gridColumnMobile={"1/2"}
            gridRowMobile={"2/3"}
          >
            Pocket Casts
          </PlatsButton>
          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
            gridColumn={"3/4"}
            gridRow={"1/2"}
            gridColumnMobile={"1/2"}
            gridRowMobile={"3/4"}
          >
            Podcast Addict
          </PlatsButton>
          <PlatsButton
            href="https://textoeditable.com.br/bloco-de-notas-online/"
            target="_blank"
            rel="noreferrer"
            gridColumn={"2/3"}
            gridRow={"2/3"}
            gridColumnMobile={"1/2"}
            gridRowMobile={"4/5"}
          >
            Sugerir Plataforma
          </PlatsButton>
        </OtherPlats>
      </TextPlats>
    </Content>
  );
}
