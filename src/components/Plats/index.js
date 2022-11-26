import {
  Content,
  TextPlats,
  OtherPlats,
  IframeSpotify,
} from "./styles";
import { Title, Desc } from "../../styles/globalStyles";
import { PlatsButton } from "../../components/AvailablePlats/styles";
import { buttons } from "./buttons";

export default function Plats() {
  return (
    <Content>
      <IframeSpotify
        src="https://open.spotify.com/embed/episode/1wO15cj7a7gtlIGcfEPbNw?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        fontSize="1px"
      />
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
          {buttons.map((res, index) => {
            return (
              <PlatsButton
                key={index}
                href="https://bit.ly/3Qe9421"
                target="_blank"
                rel="noreferrer"
                gridColumn={res.gridColumn}
                gridRow={res.gridRow}
                gridColumnLaptop={res.gridColumnLaptop}
                gridRowLaptop={res.gridRowLaptop}
              >
                {res.title}
              </PlatsButton>
            );
          })}
        </OtherPlats>
      </TextPlats>
    </Content>
  );
}
