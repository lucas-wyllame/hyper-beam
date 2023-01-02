import { Content, IframeSpotify, OtherPlats, DivForGroupingPlatsButton } from "./styles";
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
      <OtherPlats>
        <Title
          // margin={"0 38px 0 0"}
          fontSizeTablet="3.5rem"
          margin="0"
          marginTablet="0"
        >
          Quer escutar em outra plataforma?
        </Title>
        <Desc margin="10px 0 0 0" marginTablet="19px 0 0 0" fontSizeTablet="2.1rem" widthDescMobile={"294px"} maxWidth={"100%"}>
          Sem problema! Veja onde encontrar nosso podcast para escutar
        </Desc>
        <DivForGroupingPlatsButton>
          {buttons.map((res, index) => {
            return (
              <PlatsButton
                key={index}
                width="247px"
                height="49px"
                widthLaptop="247px"
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
        </DivForGroupingPlatsButton>
      </OtherPlats>
    </Content>
  );
}
