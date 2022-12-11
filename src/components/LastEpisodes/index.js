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
import { useEffect, useState } from "react";
import { Control } from "@icon/IconComTag";
import { TitleInsideComponent } from "@styles/globalStyles";
import { ConnectContent } from "src/ConfigContent";

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
  const [all, setAll] = useState([]);
  const [clicked, setClicked] = useState(false);

  function teste() {
    let liTeste =
      document.getElementsByClassName("slick-active div").style?.background;
    liTeste = "red !important";
    console.log("AQQ TESTLI", liTeste);
  }

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setAll(allContent.reverse());
    }
    FetchMyApi();
    teste();
  }, []);

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
    customPaging: (pagi, i, dots) => <LittleDots />,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
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
      {console.log("la ele infinito", all)}
      <Title margin="0">Episódios Recentes</Title>
      <Desc margin="0">Acompanhe nosso podcast e seus episódios</Desc>
      <ListPodcasts>
        {isHovering && (
          <HoveringIcon>Sobre o que falamos nesse episodio?</HoveringIcon>
        )}
        <Slider {...settings}>
          {all.slice(0, 5).map((res, index) => {
            return (
              <>
                <Background key={index}>
                  <Block>
                    <CardAndText>
                      <HyperCard
                        backgroundImg={`url(${res.fields?.littleImage?.fields?.file.url})`}
                        width={"253px"}
                        height={"253px"}
                        position={"relative"}
                        top={"-35px"}
                        widthLaptopLarge={"337px"}
                        heightLaptopLarge={"337px"}
                      />
                      <TextsDivEp>
                        <TitleInsideComponent number={res.fields?.number} />
                        <MoreInfs fontSize={"1.8rem"} width={"694px"}>
                          {res.fields.description}
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

                      {res.fields.gameTags?.map((res, index) => (
                        <ButtonsEp
                          key={index}
                          width="auto"
                          widthLaptop="auto"
                          heightLaptop="49px"
                          fontSizeLaptop="2rem"
                        >
                          {res}
                        </ButtonsEp>
                      ))}
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
