import { EmailIcon } from "../../../public/icon/EmailIcon";
import { TwitterIcon } from "../../../public/icon/TwitterIcon";
import { InstagramIcon } from "../../../public/icon/InstagramIcon";
import { YTIcon } from "../../../public/icon/YTIcon";

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
      icon: <InstagramIcon />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/davihayato/",
      icon: <YTIcon />,
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
