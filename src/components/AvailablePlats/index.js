import { Title, Desc } from "@styles/globalStyles";
import { platsLinks } from "./platsLinks";
import {
  Content,
  Plats,
  PlatsGroup,
  PlatsCards,
  PlatsIcons,
  PlatsTitle,
  PlatsButton,
} from "./styles";

export default function AvailablePlats() {
  return (
    <Content>
      <Title textAlign="center" margin="0 0 10px 0">
        Plataformas disponíveis
      </Title>
      <Desc textAlignDesc="center">
        Onde encontrar nosso podcast para escutar
      </Desc>
      <Plats>
        {platsLinks.map((res, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PlatsGroup colorHoverText={res.colorHoverText} key={index}>
              <PlatsCards
                width={res.width}
                height={res.height}
                widthHover={res.widthHover}
                heightHover={res.heightHover}
                backColor={res.backColor}
                widthHoverDiv={res.widthHoverDiv}
                heightHoverDiv={res.heightHoverDiv}
                href={res.url}
                target="_blank"
                rel="noreferrer"
              >
                <PlatsIcons
                  widthIcon={res.widthIcon}
                  heightIcon={res.heightIcon}
                />
              </PlatsCards>
              <PlatsTitle
                href={res.url}
                target="_blank"
                rel="noreferrer"
                fontSize={res.fontSize}
                fontWeight={res.fontWeight}
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
