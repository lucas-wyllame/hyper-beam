import Slider from "react-slick";
import { Content, PodcastsList, CarousselStyled, HyperText } from "./styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { RightArrow, LeftArrow } from "../OurTeam/styles";

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
  const TextInside = [
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
      numero: 6,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 7",
      numero: 7,
      foto: "linkgenericodefotourl",
    },
    {
      name: "Hyper Beam 8",
      numero: 8,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 9",
      numero: 9,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 10",
      numero: 10,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 11",
      numero: 11,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 12",
      numero: 12,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 13",
      numero: 13,
      foto: "linkgenericodefotourl",
    },
    {
      name: "Hyper Beam 14",
      numero: 14,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 15",
      numero: 15,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 16",
      numero: 16,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 17",
      numero: 17,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 18",
      numero: 18,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 19",
      numero: 19,
      foto: "linkgenericodefotourl",
    },
    {
      name: "Hyper Beam 20",
      numero: 20,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 21",
      numero: 21,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 22",
      numero: 22,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 23",
      numero: 23,
      foto: "linkgenericodefotourl2",
    },
    {
      name: "Hyper Beam 24",
      numero: 24,
      foto: "linkgenericodefotourl2",
    },
  ];
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 12,
          infinite: slider.length > 1 ? true : false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Content>
      <PodcastsList>
        <Slider {...settings}>
          {TextInside.map((res) => {
            return (
              <CarousselStyled>
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
