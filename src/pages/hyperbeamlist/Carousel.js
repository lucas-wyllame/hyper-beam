import styled from "styled-components";
import Slider from "react-slick";
import HyperCard from "../../components/HyperCard/hyperCard";

const Content = styled.div`
  width: 100%;
  height: 1101px;
  background: #11122d 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 3340px;
  }
`;

const Carrossel = styled.div`
  width: 100%;
  height: 312px;
  background: blue;
  display: flex;
  justify-content: space-between;
  text-aling: center;
  @media (max-width: 480px) {
    height: 270px;
  }
`;

const PodcastsList = styled.div`
  width: 1062px;
  height: 936px;
  background: red;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 225px;
    height: 3240px;
  }
`;
const HyperText = styled.label`
  width: 60%;
  font-size: 17px;
  color: #9a8dac;
  padding-left: 60px;
`;

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
              <Carrossel>
                <HyperCard
                  width={"225px"}
                  height={"225px"}
                  name={res.name}
                  numero={res.numero}
                ></HyperCard>
                <HyperText>{res.name}</HyperText>
              </Carrossel>
            );
          })}
        </Slider>
      </PodcastsList>
    </Content>
  );
}
