import HyperCard from "../HyperCard/hyperCard";
import {
  Content,
  Banner,
  TextsDiv,
  TitleInside,
  Desc,
  BigImg,
  HyperCards,
  HyperCardGroup,
  HyperText,
} from "./styles";

export default function HomeBanner() {
  const TitleInsides = [
    {
      name: "Hyper Beam 1",
      numero: 1,
      foto: "linkgenericodefotourl",
    },
    {
      name: "Hyper Beam 2",
      numero: 2,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 3",
      numero: 3,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 4",
      numero: 4,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 5",
      numero: 5,
      foto: "linkgenericodefotourl2",
    },
  ];

  return (
    <Content>
      <Banner>
        <TextsDiv>
          <TitleInside>
            Hyper Beam <div /> <span>03</span>
          </TitleInside>
          <Desc>Pokémon Unite e The World Ends with You</Desc>
          <button>Play</button>
        </TextsDiv>
        <BigImg></BigImg>
        <HyperCards>
          {TitleInsides.map((res) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <HyperCardGroup
                bottom1500={"-27px"}
                bottom1280={"37px"}
                bottom1080={"13px"}
                bottom925={"7px"}
                bottom760={"4px"}
              >
                <HyperCard
                  width={"100%"}
                  height={"85%"}
                  name={res.name}
                  numero={res.numero}
                ></HyperCard>
                <HyperText>Hyper Beam ● 01</HyperText>
              </HyperCardGroup>
            );
          })}
        </HyperCards>
      </Banner>
    </Content>
  );
}
