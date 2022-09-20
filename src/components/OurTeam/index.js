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
  Group,
} from "./styles";
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
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
      <Title margin={"-40px 0 0px 0"}>Nosso time</Title>
      <Desc textAlignDescMobile={"center"} margin={"2px"}>
        A equipe que trabalha no Hyper Beam
      </Desc>
      <GlobalPeoples>
        <Group>
          <Slider {...settings}>
            {listCardsOurTeam.map((res) => {
              return (
                <Peoples>
                  <CardsOurTeam></CardsOurTeam>
                  <NameCasters>
                    <div>
                      {res.name}
                      <span> {res.surname} </span>
                    </div>
                  </NameCasters>
                  <FuncCasters>
                    <div>{res.func}</div>
                  </FuncCasters>
                </Peoples>
              );
            })}
          </Slider>
        </Group>
      </GlobalPeoples>
    </Content>
  );
}
