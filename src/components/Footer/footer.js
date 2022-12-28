import { EmailIcon } from "@icon/EmailIcon";
import { TwitterIcon } from "@icon/TwitterIcon";
import { YTIcon } from "@icon/YTIcon";
import { InstagramIcon } from "@icon/InstagramIcon";

import { Content, MainImage, Contacts, ContactTitle, IconsRow } from "./styles";

export default function Footer(props) {
  const listLinks = [
    {
      name: "E-mail",
      url: "mailto:hyperbeampodcast@gmail.com",
      icon: <EmailIcon />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/hyperbeamcast",
      icon: <TwitterIcon />,
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCrB_y3PT-cLvv2WKB17B2lw",
      icon: <YTIcon />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/davihayato/",
      icon: <InstagramIcon />,
    },
  ];

  return (
    <Content>
      <MainImage footerLogo={props.footerLogo} />
      <Contacts>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <IconsRow>
          {listLinks.map((res, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <a key={index} href={res.url} target="_blank" rel="noreferrer">
                {res.icon}
              </a>
            );
          })}
        </IconsRow>
      </Contacts>
    </Content>
  );
}
