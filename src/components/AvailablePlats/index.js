import { Title, Desc } from "../Global/globalStyles";
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
  const PlatsLinks = [
    {
      name: "Google Podcast",
      url: "https://bit.ly/3QiAwf6",
      width: "196px",
      height: "196px",
      widthIcon: "98px",
      heightIcon: "98px",
      fontSize: "20px",
    },
    {
      name: "Spotify",
      url: "https://spoti.fi/3QbrMHI",
      width: "274px",
      height: "274px",
      widthHover: "288px",
      heightHover: "288px",
      widthHoverDiv: "146px",
      heightHoverDiv: "146px",
      widthIcon: "136px",
      heightIcon: "136px",
      backColor: "green",
      fontSize: "28px",
    },
    {
      name: "Pocket Casts",
      url: "https://bit.ly/3PgAZ0e",
      width: "196px",
      height: "196px",
      widthIcon: "98px",
      heightIcon: "98px",
      fontSize: "20px",
    },
  ];
  return (
    <Content>
      <Title>Plataformas disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <Plats>
        {PlatsLinks.map((res, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PlatsGroup key={index}>
              <PlatsCards
                width={res.width}
                height={res.height}
                backColor={res.backColor}
                widthHover={res.widthHover}
                heightHover={res.heightHover}
                widthHoverDiv={res.widthHoverDiv}
                heightHoverDiv={res.heightHoverDiv}
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
