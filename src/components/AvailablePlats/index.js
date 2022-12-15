import { Title, Desc, MoreInfs } from "@styles/globalStyles";
import {
  Content,
  Plats,
  PlatsCards,
  PlatsIcons,
  Divider,
  PlatsButton,
} from "./styles";
import { useState, useEffect } from "react";
import { ConnectContent } from "src/ConfigContent";

export default function AvailablePlats(props) {
  const [all, setAll] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "availablePlats"
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);

  return (
    <Content>
      {console.log("AvailablePlats all", all)}
      <Title textAlign="center" margin="0 0 22px 0">
        Plataformas disponíveis
      </Title>
      <Desc margin="0" textAlignDesc="center">
        Onde encontrar nosso podcast para escutar
      </Desc>
      <Plats>
        {all.slice(0, 3).map((res, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <a href={res.fields.url} target="_blank" rel="noreferrer">
              <PlatsCards>
                <PlatsIcons
                  image={`url(${res.fields.icon?.fields.file.url})` || ""}
                />
                <Divider />
                <MoreInfs
                  fontSize="1.4rem"
                  fontSizeTablet="1.9rem"
                  fontSizeLaptopLarge="2.3rem"
                >
                  Escute o Hyper Beam no <br />
                  <span> {res.fields.platformName}</span>
                </MoreInfs>
              </PlatsCards>
            </a>
          );
        })}
      </Plats>
      {all.slice(3).map((res, index) => {
        return (
          <a target="_blank" rel="noreferrer" href={res.fields.url}>
            <PlatsButton key={index} width="332px" height="54px">
              {res.fields.platformName}
            </PlatsButton>
          </a>
        );
      })}
    </Content>
  );
}
