import Slider from "react-slick";
import {
  Content,
  PodcastsList,
  CarousselStyled,
  HyperText,
  RightArrow,
  LeftArrow,
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { casts } from "./casts";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/Grupo 22.svg"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/Grupo 21.svg"
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var slider = ".slider";
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1149,
        settings: {
          slidesToShow: 3,
          rows: 3,
          infinite: slider.length > 1 ? true : false,
          centerMode: false,
        },
      },
      {
        breakpoint: 946,
        settings: {
          slidesToShow: 2,
          rows: 3,
          infinite: slider.length > 1 ? true : false,
          centerMode: false,
        },
      },
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 1,
          rows: 12,
          infinite: slider.length > 1 ? true : false,
          centerMode: false,
          // vertical: true,
        },
      },
    ],
  };

  return (
    <Content>
      <PodcastsList>
        <Slider {...settings}>
          {casts.map((res, index) => {
            return (
              <CarousselStyled key={index}>
                <HyperCard
                  width={"225px"}
                  height={"225px"}
                  name={res.name}
                  numero={res.numero}
                ></HyperCard>
                <HyperText>{res.name}</HyperText>
              </CarousselStyled>
            );
          })}
        </Slider>
      </PodcastsList>
    </Content>
  );
}
