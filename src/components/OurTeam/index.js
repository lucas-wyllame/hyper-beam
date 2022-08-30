import { Title, Desc } from "../Global/globalStyles";
import {
  Content,
  GlobalPeoples,
  Peoples,
  CardsOurTeam,
  NameCasters,
  FuncCasters,
  Buttons,
  TeamButton,
  ButtonsMobile,
  TeamButtonMobile,
  Carousel,
  LeftArrow,
  RightArrow,
  Group,
} from "./styles";
import Slider from "react-slick";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/Grupo21.svg"
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/Grupo22.svg"
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

  const CarouselButtons = [
    { linkimg: "diretorio da imagem1" },
    { linkimg: "diretorio da imagem2" },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
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
        {/* <Buttons>
          <TeamButton></TeamButton>
        </Buttons> */}

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

        {/* <Buttons>
          <TeamButton></TeamButton>
        </Buttons>
        <ButtonsMobile>
          <TeamButtonMobile></TeamButtonMobile>
          <TeamButtonMobile></TeamButtonMobile>
        </ButtonsMobile> */}
      </GlobalPeoples>
    </Content>
  );
}
