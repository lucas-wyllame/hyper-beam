import {
  Content,
  MainImage,
  Contacts,
  ContactTitle,
  IconsRow,
  Icon,
} from "./styles";

export default function Footer() {
  const listLinks = [
    { name: "E-mail", url: "https://linktr.ee/hyperbeamcast" },
    { name: "Twitter", url: "https://twitter.com/hyperbeamcast" },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCrB_y3PT-cLvv2WKB17B2lw",
    },
    { name: "Instagram", url: "https://www.instagram.com/davihayato/" },
  ];

  return (
    <Content>
      <MainImage></MainImage>
      <Contacts>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <IconsRow>
          {listLinks.map((res) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Icon>
                <a href={res.url} target="_blank" rel="noreferrer">
                  {res.name}
                </a>
              </Icon>
            );
          })}
        </IconsRow>
      </Contacts>
    </Content>
  );
}
