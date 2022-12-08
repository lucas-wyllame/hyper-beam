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
import { useState, useEffect } from "react";
import { ConnectContent } from "src/ConfigContent";

export default function AvailablePlats() {
  const [all, setAll] = useState([]);
  var teste;
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
            <PlatsGroup
              colorHoverText={res.fields.styling?.colorHoverText}
              key={index}
            >
              <PlatsCards
                width={res.fields.styling?.width}
                height={res.fields.styling?.height}
                widthHover={res.fields.styling?.widthHover}
                heightHover={res.fields.styling?.heightHover}
                widthHoverDiv={res.fields.styling?.widthHoverDiv}
                heightHoverDiv={res.fields.styling?.heightHoverDiv}
                href={res.fields.url}
                imageHover={
                  `url(${res.fields.iconHover?.fields.file.url})` || ""
                }
                target="_blank"
                rel="noreferrer"
              >
                <PlatsIcons
                  widthIcon={res.fields.styling?.widthIcon}
                  heightIcon={res.fields.styling?.heightIcon}
                  image={`url(${res.fields.icon?.fields.file.url})` || ""}
                />
              </PlatsCards>
              <PlatsTitle
                href={res.fields.url}
                target="_blank"
                rel="noreferrer"
                fontSize={res.fields.styling?.fontSize}
                fontWeight={res.fields.styling?.fontWeight}
                margin={"15px 0 0 0"}
              >
                {res.fields.platformName}
              </PlatsTitle>
            </PlatsGroup>
          );
        })}
      </Plats>
      {all.slice(3).map((res, index) => {
        return (
          <PlatsButton
            key={index}
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
          >
            {res.fields.platformName}
          </PlatsButton>
        );
      })}
    </Content>
  );
}
