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
  RightArrow,
  LeftArrow,
  PlayButton,
} from "./styles";
import Slider from "react-slick";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { gray } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#9e9e9e",
    },
  },
});

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/Grupo 22.svg"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/Grupo 21.svg"
      onClick={onClick}
    />
  );
}

export default function HomeBanner() {
  const TitleInsides = [
    { name: "Hyper Beam 1", image: "genericImageURLLink" },
    { name: "Hyper Beam 2", image: "genericImageURLLink2" },
    { name: "Hyper Beam 3", image: "genericImageURLLink3" },
    { name: "Hyper Beam 4", image: "genericImageURLLink4" },
    { name: "Hyper Beam 5", image: "genericImageURLLink5" },
    { name: "Hyper Beam 6", image: "genericImageURLLink6" },
  ];

  var slider = ".slider";

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 1176,
        settings: {
          slidesToShow: 4,
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
          <TitleInside>
            Hyper Beam
            <ThemeProvider theme={theme}>
              <FiberManualRecordIcon sx={{ color: "#9e9e9e" }} />
            </ThemeProvider>
            <span>03</span>
          </TitleInside>
          <Desc>Pokémon Unite e The World Ends with You</Desc>
          <PlayButton>Play</PlayButton>
        </TextsDiv>
        <BigImg />
        <ListHomeBanner>
          <Slider {...settings}>
            {TitleInsides.map((res, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <>
                  <HyperCardGroup key={index}>
                    <HyperCard
                      width={"196px"}
                      height={"196px"}
                      widthMobile={"80%"}
                      heightMobile={"196px"}
                    ></HyperCard>
                    <HyperText>{res.name}</HyperText>
                  </HyperCardGroup>
                </>
              );
            })}
          </Slider>
        </ListHomeBanner>
      </Banner>
    </Content>
  );
}
