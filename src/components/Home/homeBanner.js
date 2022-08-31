import HyperCard from "../HyperCard/hyperCard";
import {
  Content,
  Banner,
  TextsDiv,
  TitleInside,
  Desc,
  BigImg,
  ListHomeBanner,
  HyperCardGroup,
  HyperText,
} from "./styles";
import Slider from "react-slick";

export default function HomeBanner() {
  var slider = ".slider";
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
    ],
  };

  return (
    <Content>
      <Banner>
        <TextsDiv>
          <TitleInside margin={"10px 0"}>
            Hyper Beam <div /> <span>03</span>
          </TitleInside>
          <Desc>Pokémon Unite e The World Ends with You</Desc>
          <button>Play</button>
        </TextsDiv>
        <BigImg></BigImg>
        <ListHomeBanner>
          <Slider {...settings}>
            {TitleInsides.map((res) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <HyperCardGroup>
                  <HyperCard
                    width={"196px"}
                    height={"196px"}
                    widthMobile={"80%"}
                    name={res.name}
                    numero={res.numero}
                  ></HyperCard>
                  <HyperText>{res.name}</HyperText>
                </HyperCardGroup>
              );
            })}
          </Slider>
        </ListHomeBanner>
      </Banner>
    </Content>
  );
}