import { Title, Desc, MoreInfs } from "@styles/globalStyles";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "@styles/globalStyles";
import {
  Content,
  ListPodcasts,
  HoveringIcon,
  Background,
  Block,
  CardAndText,
  TextsDivEp,
  IconAndButtons,
  ButtonsEp,
  ButtonSeeAll,
  LeftArrow,
  RightArrow,
  Dots,
  LittleDots,
} from "./styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { useState } from "react";
import { Control } from "@icon/IconComTag";
import { TitleInsideComponent } from "@styles/globalStyles";

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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
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
      <Title margin="0">Episódios Recentes</Title>
      <Desc margin="0">Acompanhe nosso podcast e seus episódios</Desc>
      <ListPodcasts>
        {isHovering && (
          <HoveringIcon>Qual jogo aparece nesse episodio?</HoveringIcon>
        )}
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
                        widthLaptopLarge={"337px"}
                        heightLaptopLarge={"337px"}
                      />
                      <TextsDivEp>
                        <TitleInsideComponent />
                        <MoreInfs fontSize={"1.8rem"} width={"694px"}>
                          Lorem ipsum dolor sit amet, consectetur a elit. Sed
                          dictum sodales rutrum. Praesent eget lobortis purus.
                          Donec a finibus neque. Nu erat a cursus sodales. Fusce
                          vel nulla aliquam, convallis odio semper, finibus
                          purus. orci, non malesuada augue.
                        </MoreInfs>
                      </TextsDivEp>
                    </CardAndText>
                    <IconAndButtons
                      height="140px"
                      widthLaptop="580px"
                      heightLaptop="auto"
                      flexDLaptop="row"
                      margin="25px 0 90px 0"
                    >
                      <Icon
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        widthIcon={"40px"}
                        heightIcon={"40px"}
                        widthIconLaptop="53px"
                        heightIconLaptop="53px"
                      >
                        <Control />
                      </Icon>

                      <ButtonsEp
                        width="152px"
                        widthLaptop="202px"
                        heightLaptop="49px"
                        fontSizeLaptop="2rem"
                      >
                        Pokémon Unite
                      </ButtonsEp>
                      <ButtonsEp
                        width="220px"
                        widthLaptop="293px"
                        heightLaptop="49px"
                        fontSizeLaptop="2rem"
                      >
                        World Ends with You
                      </ButtonsEp>
                    </IconAndButtons>
                  </Block>
                </Background>
              </>
            );
          })}
        </Slider>
        <ButtonSeeAll onClick={handleClick}>Ver todos</ButtonSeeAll>
      </ListPodcasts>
    </Content>
  );
}
