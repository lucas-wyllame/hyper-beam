import { EmailIcon } from "@icon/EmailIcon";
import { TwitterIcon } from "@icon/TwitterIcon";
import { YTIcon } from "@icon/YTIcon";
import { InstagramIcon } from "@icon/InstagramIcon";

import {
  Content,
  MainImage,
  Contacts,
  ContactTitle,
  IconsRow,
} from "./styles";
import { Icon } from "@styles/globalStyles";

export default function Footer() {
  const listLinks = [
    {
      name: "E-mail",
      url: "https://linktr.ee/hyperbeamcast",
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
      <MainImage />
      <Contacts>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <IconsRow>
          {listLinks.map((res, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Icon key={index}>
                <a href={res.url} target="_blank" rel="noreferrer">
                  {res.icon}
                </a>
              </Icon>
            );
          })}
        </IconsRow>
      </Contacts>
    </Content>
  );
}
