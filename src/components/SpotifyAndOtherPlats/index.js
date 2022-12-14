import { Content, IframeSpotify, TextPlats, OtherPlats } from "./styles";
import { Title, Desc } from "@styles/globalStyles";
import { PlatsButton } from "../AvailablePlats/styles";
import { buttons } from "./buttons";

export default function SpotifyAndOtherPlats(props) {
  return (
    <Content>
      <IframeSpotify
        src={props.url}
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
                width="247px"
                height="49px"
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
