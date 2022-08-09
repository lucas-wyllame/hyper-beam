import { Title, Desc } from "../Global/globalStyles";
import { Content, Plats, PlatsCards, PlatsIcons, PlatsGroup, PlatsTitle, PlatsButton} from "./styles";

export default function AvailablePlats() {
  const PlatsLinks = [
    {
      name: "Google Podcast",
      url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82ZmM3MWFjYy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAIQ9sEGahcKEwjY-_yB8bD5AhUAAAAAHQAAAAAQRQ",
      width: "196px",
      height: "196px",
      widthIcon: "98px",
      heightIcon: "98px",
      fontSize: "20px",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/5a9RaVxeNAn1zZezcY74b7?si=e2da5b48867145f2&nd=1",
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
      url: "https://anchor.fm/hyper-beam",
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
        {PlatsLinks.map((res) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PlatsGroup>
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
        href="https://podcastaddict.com/podcast/3670417"
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
