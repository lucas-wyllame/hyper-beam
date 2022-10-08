import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "../Footer/styles";
import {
  Content,
  ListPodcasts,
  Background,
  CardAndText,
  TextsDivEp,
  TitleInside,
  IconAndButtons,
  ButtonsEp,
  ThinBarsGroup,
  ThinBars,
  ButtonSeeAll,
  RightArrow,
  LeftArrow,
  Dots,
  LittleDots,
} from "./styles";
import { useRouter } from "next/router";
import Slider from "react-slick";

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
  const slider = ".slider";
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

  const settings = {
    appendDots: (dots) => (
      <Dots>
        <ul
          style={{
            margin: "0px",
            width: "100%",
            display: "flex",
            background: "red",
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
      <Title margin={"0 0 0 18px"}>Episódios Recentes</Title>
      <Desc maxWidth={"50%"} margin={"0 0 30px 18px"}>
        Acompanhe nosso podcast e seus episódios
      </Desc>
      <ListPodcasts>
        <Slider {...settings} style={{background:"green"}}>
          {listBackground.map((res) => {
            return (
              <Background>
                <CardAndText>
                  <HyperCard
                    position={"relative"}
                    width={"337px"}
                    height={"337px"}
                    margin={"-26px 0 0 53px"}
                    widthMobile={"253px"}
                    heightMobile={"253px"}
                  ></HyperCard>
                  <TextsDivEp>
                    <TitleInside margin={"10px 0"}>
                      Hyper Beam <div /> <span>{res.number}</span>
                    </TitleInside>
                    <MoreInfs
                      widthMobile={"324px"}
                      heightMobile={"174px"}
                      fontsize={"18px"}
                      width={"694px"}
                    >
                      Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum
                      sodales rutrum. Praesent eget lobortis purus. Donec a
                      finibus neque. Nu erat a cursus sodales. Fusce vel nulla
                      aliquam, convallis odio semper, finibus purus. orci, non
                      malesuada augue.
                    </MoreInfs>
                  </TextsDivEp>
                </CardAndText>
                <IconAndButtons
                  width={"36%"}
                  margin={"10px 10px 41px 60px"}
                  justifyContent={"space-between"}
                  heightMobile={"191px"}
                >
                  <Icon widthIcon={"40px"} heightIcon={"40px"}>
                    Control
                  </Icon>
                  <ButtonsEp widthButton={"202px"} widthMobile={"152px"}>
                    Pokémon Unite
                  </ButtonsEp>
                  <ButtonsEp widthButton={"293px"} widthMobile={"219px"}>
                    World Ends with You
                  </ButtonsEp>
                </IconAndButtons>
              </Background>
            );
          })}
        </Slider>
        <ButtonSeeAll onClick={handleClick}>Ver todos</ButtonSeeAll>
      </ListPodcasts>
    </Content>
  );
}
