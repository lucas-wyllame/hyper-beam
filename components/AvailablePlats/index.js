import styled from "styled-components";
import { Title, Desc } from "../Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 836px;
  background: #11122d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px;
  @media (max-width: 480px) {
    height: 1401px;
    padding: 0;
    margin-top: 40px;
  }
`;

const Plats = styled.div`
  width: 45%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 480px) {
    width: 100%;
    height: 65%;
    flex-direction: column;
    margin-bottom: 56px;
    margin-top: 45px;
  }
`;

const PlatsCards = styled.a`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #7c7da2;
  margin: 0px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  :hover {
    width: ${(props) => props.widthHover};
    height: ${(props) => props.heightHover};
    div {
      width: ${(props) => props.widthHoverDiv};
      height: ${(props) => props.heightHoverDiv};
      background: ${(props) => props.backColor};
    }
  }
`;

const PlatsIcons = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #fff;
  border-radius: 50%;
`;

const PlatsGroup = styled.div`
  width: auto;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    height: auto;
  }
`;

const PlatsTitle = styled.a`
  width: auto;
  font-size: ${(props) => props.fontSize};
  color: #ffffff;
  margin: ${(props) => props.margin};
  font-weight: bold;
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
`;

const PlatsButton = styled.a`
  font-size: 20px;
  color: #fff;
  width: 247px;
  height: 49px;
  border-radius: 44px;
  background: none;
  border: 1px solid #ffffff;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AvailablePlats() {
  const PlatsLinks = [
    { name: "Google Podcast", url: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82ZmM3MWFjYy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAIQ9sEGahcKEwjY-_yB8bD5AhUAAAAAHQAAAAAQRQ", width: "196px", height: "196px" },
    { name: "Spotify", url: "https://open.spotify.com/show/5a9RaVxeNAn1zZezcY74b7?si=e2da5b48867145f2&nd=1", width: "274px", height: "274px" },
    { name: "Pocket Casts", url: "https://anchor.fm/hyper-beam", width: "196px", height: "196px" },
  ];
  return (
    <Content>
      <Title>Plataformas disponíveis</Title>
      <Desc>Onde encontrar nosso podcast para escutar</Desc>
      <Plats>
    {PlatsLinks.map((res) => {
      return(
      // eslint-disable-next-line react/jsx-key
      <PlatsGroup>
          <PlatsCards
            width={res.width}
            height={res.height}
            backColor={"#fff"}
            widthHover={"196px"}
            heightHover={"196px"}
            widthHoverDiv={"98px"}
            heightHoverDiv={"98px"}
            href={res.url}
            target="_blank"
            rel="noreferrer"
          >
            <PlatsIcons widthIcon={"98px"} heightIcon={"98px"}></PlatsIcons>
          </PlatsCards>
          <PlatsTitle
            href={res.url}
            target="_blank"
            rel="noreferrer"
            fontSize={"20px"}
            margin={"15px 0 0 0"}
          >
           {res.name}
          </PlatsTitle>
        </PlatsGroup>
      )
    })}
        {/* <PlatsGroup>
          <PlatsCards
            width={"196px"}
            height={"196px"}
            backColor={"#fff"}
            widthHover={"196px"}
            heightHover={"196px"}
            widthHoverDiv={"98px"}
            heightHoverDiv={"98px"}
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82ZmM3MWFjYy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAIQ9sEGahcKEwjY-_yB8bD5AhUAAAAAHQAAAAAQRQ"
            target="_blank"
            rel="noreferrer"
          >
            <PlatsIcons widthIcon={"98px"} heightIcon={"98px"}></PlatsIcons>
          </PlatsCards>
          <PlatsTitle
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82ZmM3MWFjYy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAIQ9sEGahcKEwjY-_yB8bD5AhUAAAAAHQAAAAAQRQ"
            target="_blank"
            rel="noreferrer"
            fontSize={"20px"}
            margin={"15px 0 0 0"}
          >
            Google Podcast
          </PlatsTitle>
        </PlatsGroup>

        <PlatsGroup>
          <PlatsCards
            width={"274px"}
            height={"274px"}
            backColor={"green"}
            widthHover={"288px"}
            heightHover={"288px"}
            widthHoverDiv={"146px"}
            heightHoverDiv={"146px"}
            href="https://open.spotify.com/show/5a9RaVxeNAn1zZezcY74b7?si=e2da5b48867145f2&nd=1"
            target="_blank"
            rel="noreferrer"
          >
            <PlatsIcons widthIcon={"136px"} heightIcon={"136px"}></PlatsIcons>
          </PlatsCards>
          <PlatsTitle
            fontSize={"28px"}
            margin={"15px 0 0 0"}
            href="https://open.spotify.com/show/5a9RaVxeNAn1zZezcY74b7?si=e2da5b48867145f2&nd=1"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </PlatsTitle>
        </PlatsGroup>
        <PlatsGroup>
          <PlatsCards
            width={"196px"}
            height={"196px"}
            backColor={"#fff"}
            widthHover={"196px"}
            heightHover={"196px"}
            widthHoverDiv={"98px"}
            heightHoverDiv={"98px"}
            href="https://anchor.fm/hyper-beam"
            target="_blank"
            rel="noreferrer"
          >
            <PlatsIcons widthIcon={"98px"} heightIcon={"98px"}></PlatsIcons>
          </PlatsCards>
          <PlatsTitle
            href="https://anchor.fm/hyper-beam"
            target="_blank"
            rel="noreferrer"
            fontSize={"20px"}
            margin={"15px 0 0 0"}
          >
            Pocket Casts
          </PlatsTitle>
        </PlatsGroup> */}
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
