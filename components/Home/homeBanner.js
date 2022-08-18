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
  Carousel
} from "./styles";
import Slider from "react-slick";

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
    {
      name: "Hyper Beam 6",
      numero: 5,
      foto: "linkgenericodefotourl2",
    },
  ];
  var carousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

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
            <Slider style={{ width: "1500px" }} {...carousel}>
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
                      width={"78%"}
                      height={"80%"}
                      name={res.name}
                      numero={res.numero}
                    ></HyperCard>
                    <HyperText>{res.name}</HyperText>
                  </HyperCardGroup>
                );
              })}
            </Slider>
        </HyperCards>
      </Banner>
    </Content>
  );
}
