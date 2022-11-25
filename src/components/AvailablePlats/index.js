import { Desc, Title } from "@styles/globalStyles";
import { platsLinks } from "./platsLinks";
import {
  Content,
  Plats,
  PlatsCards,
  PlatsIcons,
  PlatsGroup,
  PlatsTitle,
  PlatsButton,
} from "./styles";

export default function AvailablePlats() {
  return (
    <Content>
      <Title>Plataformas disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <Plats>
        {platsLinks.map((res, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PlatsGroup key={index}>
              <PlatsCards
                width={res.width}
                height={res.height}
                widthCardsMobile={res.widthCardsMobile}
                heightCardsMobile={res.heightCardsMobile}
                backColor={res.backColor}
                widthHover={res.widthHover}
                heightHover={res.heightHover}
                widthHoverDiv={res.widthHoverDiv}
                heightHoverDiv={res.heightHoverDiv}
                widthCards1290={res.widthCards1290}
                heightCards1050={res.heightCards1050}
                href={res.url}
                target="_blank"
                rel="noreferrer"
              >
                <PlatsIcons
                  widthIcon={res.widthIcon}
                  heightIcon={res.heightIcon}
                ></PlatsIcons>
              </PlatsCards>
              <PlatsTitle
                href={res.url}
                target="_blank"
                rel="noreferrer"
                fontSize={res.fontSize}
                margin={"15px 0 0 0"}
              >
                {res.name}
              </PlatsTitle>
            </PlatsGroup>
          );
        })}
      </Plats>
      <PlatsButton
        href="https://bit.ly/3Qe9421"
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
