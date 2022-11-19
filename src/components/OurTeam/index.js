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
  const listCardsOurTeam = [
    { name: "Leandro", surname: "Radnas", func: "Host e Caster" },
    { name: "Leo", surname: "Dratini", func: "Caster" },
    { name: "Davi", surname: "Hayato", func: "Caster" },
    { name: "LuKAS", surname: "SuP", func: "Dev" },
    { name: "Gabriel", surname: "C4rds", func: "Dev" },
  ];

  const CarouselButtons = [
    { linkimg: "diretorio da imagem1" },
    { linkimg: "diretorio da imagem2" },
  ];

  const carousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    resposive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
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

        <Peoples>
          <Carousel>
            <Slider style={{ width: "1000px" }} {...carousel}>
              {listCardsOurTeam.map((res) => {
                return (
                  <div key=""
                    style={{
                      width: "500px",
                      height: "500px",
                      background: "yellow",
                    }}
                  >
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
                  </div>
                );
              })}
            </Slider>
          </Carousel>
        </Peoples>

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
