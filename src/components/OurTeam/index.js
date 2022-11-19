import { Title, Desc } from "../Global/globalStyles";
import {
  Content,
  GlobalPeoples,
  Peoples,
  CardsOurTeam,
  NameCasters,
  FuncCasters,
  LeftArrow,
  RightArrow,
  GroupText,
} from "./styles";
import Slider from "react-slick";

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

export default function OurTeam() {
  var slider = ".slider";
  const listCardsOurTeam = [
    { name: "Leandro", surname: "Radnas", func: "Host e Caster" },
    { name: "Leo", surname: "Dratini", func: "Caster" },
    { name: "Davi", surname: "Hayato", func: "Caster" },
    { name: "Lucas", surname: "SuP", func: "Dev" },
    { name: "Gabriel", surname: "C4rds", func: "Dev" },
    { name: "Walter", surname: "Com Dablio", func: "Editor" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
        },
      },
    ],
  };

  return (
    <Content>
      <GroupText>
        <Title>Nosso time</Title>
        <Desc>
          A equipe que trabalha no Hyper Beam
        </Desc>
      </GroupText>
      <GlobalPeoples>
        <>
          <Slider {...settings}>
            {listCardsOurTeam.map((res, index) => {
              return (
                <>
                  <Peoples key={index}>
                    <CardsOurTeam></CardsOurTeam>
                    <NameCasters>
                      {res.name}
                      <span> {res.surname} </span>
                    </NameCasters>
                    <FuncCasters>{res.func}</FuncCasters>
                  </Peoples>
                </>
              );
            })}
          </Slider>
        </>
      </GlobalPeoples>
    </Content>
  );
}
