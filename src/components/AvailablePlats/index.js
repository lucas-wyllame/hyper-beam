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
  const [cardsInfos, setCardsInfos] = useState([]);
  const [buttonsName, setButtonsName] = useState([]);
  var teste;
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let cardsInfosContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "availablePlats"
      );
      let buttonsNameContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "availablePlatsButtons"
      );
      setCardsInfos(cardsInfosContent);
      setButtonsName(buttonsNameContent);
    }
    FetchMyApi();
  }, []);

  return (
    <Content>
      {console.log("La ele", cardsInfos)}
      <Title textAlign="center" margin="0 0 22px 0">
        Plataformas disponíveis
      </Title>
      <Desc margin="0" textAlignDesc="center">
        Onde encontrar nosso podcast para escutar
      </Desc>
      <Plats>
        {cardsInfos.map((res, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <PlatsGroup colorHoverText={res.colorHoverText} key={index}>
              <PlatsCards
                width={res.fields.styling?.width}
                height={res.fields.styling?.height}
                widthHover={res.fields.styling?.widthHover}
                heightHover={res.fields.styling?.heightHover}
                widthHoverDiv={res.fields.styling?.widthHoverDiv}
                heightHoverDiv={res.fields.styling?.heightHoverDiv}
                href={res.fields.styling?.url}
                imageHover={`url(${res.fields.platsIconsHover?.fields.file.url})` || ""}
                target="_blank"
                rel="noreferrer"
              >
                <PlatsIcons
                  widthIcon={res.fields.styling?.widthIcon}
                  heightIcon={res.fields.styling?.heightIcon}
                  image={`url(${res.fields.platsIcons?.fields.file.url})` || ""}
                />
              </PlatsCards>
              <PlatsTitle
                href={res.url}
                target="_blank"
                rel="noreferrer"
                fontSize={res.fields.styling?.fontSize}
                fontWeight={res.fields.styling?.fontWeight}
                margin={"15px 0 0 0"}
              >
                {res.fields.platsName}
              </PlatsTitle>
            </PlatsGroup>
          );
        })}
      </Plats>
      {/* {buttonsName.map((res, index) => {
        return ( */}
          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
          >
            {/* {res.fields.buttonName} */}
            Podcast Addict
          </PlatsButton>
          <PlatsButton
            href="https://bit.ly/3Qe9421"
            target="_blank"
            rel="noreferrer"
          >
            {/* {res.fields.buttonName} */}
            Sugerir plataforma
          </PlatsButton>
        {/* );
      })} */}
    </Content>
  );
}
