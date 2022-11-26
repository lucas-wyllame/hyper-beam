import { Title, Desc, MoreInfs } from "@styles/globalStyles";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "../Footer/styles";
import {
  Content,
  ListPodcasts,
  Background,
  CardAndText,
  TextsDivEp,
  IconAndButtons,
  ButtonsEp,
  ThinBarsGroup,
  ThinBars,
  ButtonSeeAll,
  RightArrow,
  LeftArrow,
  Dots,
  LittleDots,
  HoveringIcon,
  Block,
} from "./styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { useState } from "react";
import { Control } from "../../../public/icon/IconComTag";
import { ThemeProvider } from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { theme } from "../Home/homeBanner";
import { TitleInside } from "../Home/styles";

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

export default function LastEpisodes() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/podcasts");
  };

  const listBackground = [
    { number: "01" },
    { number: "02" },
    { number: "03" },
    { number: "04" },
    { number: "05" },
  ];

  const slider = ".slider";

  const settings = {
    appendDots: (dots) => (
      <Dots>
        <ul
          style={{
            margin: "0px",
            width: "100%",
            display: "flex",
            paddingInlineStart: "0",
          }}
        >
          {dots}
        </ul>
      </Dots>
    ),
    customPaging: (pagi, i, dots) => <LittleDots></LittleDots>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
        },
      },
    ],
  };

  return (
    <Content>
      <Title>Episódios Recentes</Title>
      <Desc>Acompanhe nosso podcast e seus episódios</Desc>
      <ListPodcasts>
        <Slider {...settings}>
          {listBackground.map((res, index) => {
            return (
              <>
                <Background key={index}>
                  <Block>
                    <CardAndText>
                      <HyperCard
                        width={"253px"}
                        height={"253px"}
                        position={"relative"}
                        top={"-35px"}
                      />
                      <TextsDivEp>
                        <TitleInside margin={"10px 0"}>
                          Hyper Beam{" "}
                          <ThemeProvider theme={theme}>
                            <FiberManualRecordIcon sx={{ color: "#9e9e9e" }} />
                          </ThemeProvider>
                          <span>{res.number}</span>
                        </TitleInside>
                        <MoreInfs
                          fontSize={"1.8rem"}
                          width={"694px"}
                        >
                          Lorem ipsum dolor sit amet, consectetur a elit. Sed
                          dictum sodales rutrum. Praesent eget lobortis purus.
                          Donec a finibus neque. Nu erat a cursus sodales. Fusce
                          vel nulla aliquam, convallis odio semper, finibus
                          purus. orci, non malesuada augue.
                        </MoreInfs>
                      </TextsDivEp>
                    </CardAndText>

                    <IconAndButtons>
                      <Icon
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        widthIcon={"40px"}
                        heightIcon={"40px"}
                      >
                        <Control></Control>
                        {isHovering && (
                          <HoveringIcon>
                            Qual jogo aparece nesse episodio?
                          </HoveringIcon>
                        )}
                      </Icon>

                      <ButtonsEp width={"152px"} widthLaptop={"202px"}>
                        Pokémon Unite
                      </ButtonsEp>
                      <ButtonsEp width={"220px"} widthLaptop={"293px"}>
                        World Ends with You
                      </ButtonsEp>
                    </IconAndButtons>
                  </Block>
                </Background>
              </>
            );
          })}
        </Slider>
        {/* <ButtonSeeAll onClick={handleClick}>Ver todos</ButtonSeeAll> */}
      </ListPodcasts>
    </Content>
  );
}
