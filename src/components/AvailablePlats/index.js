import { Title, Desc } from "@styles/globalStyles";
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
            <PlatsGroup
              colorHoverText={res.fields.styling?.colorHoverText}
              key={index}
            >
              <PlatsCards
                widthLaptop={res.fields.styling?.widthLaptop}
                heightLaptop={res.fields.styling?.heightLaptop}
                widthHoverLaptop={res.fields.styling?.widthHoverLaptop}
                heightHoverLaptop={res.fields.styling?.heightHoverLaptop}
                

                widthIconLaptop={res.fields.styling?.widthIconLaptop}
                heightIconLaptop={res.fields.styling?.heightIconLaptop}
                widthHoverIconLaptop={res.fields.styling?.widthHoverIconLaptop}
                heightHoverIconLaptop={res.fields.styling?.heightHoverIconLaptop}

                href={res.fields.url}
                filter={res.fields.styling?.filter}
                platsCardsPicture={
                  `url(${res.fields.cardPicture?.fields.file.url})` || ""
                }
                imageIconHover={
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
