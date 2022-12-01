import { Title, Desc } from "@styles/globalStyles";
import {
  Content,
  GroupText,
  GlobalPeoples,
  Peoples,
  CardsOurTeam,
  CastersBox,
  NameCasters,
  FuncCasters,
  LeftArrow,
  RightArrow,
} from "./styles";
import Slider from "react-slick";
import { ConnectContent } from '../../ConfigContent';
import { useEffect } from 'react';
import { useState } from 'react';

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

 
  let name;
  let nameUrl;

  const [all, setAll] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(x => x.sys.contentType.sys.id == "collaborators");
      setAll(allContent)
    }
    FetchMyApi();
  }, []);
  
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          rows: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
          vertical: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
          vertical: true,
        },
      },
    ],
  };
  
  return (
    <Content>
      {console.log("La ele", all)}
      <GroupText>
        <Title margin="0 0 5px 0">Nosso time</Title>
        <Desc margin="0">A equipe que trabalha no Hyper Beam</Desc>
      </GroupText>
      <GlobalPeoples>
        <Slider {...settings}>
          {all.map((res, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <>
                <Peoples key={index}>
                  <CardsOurTeam />
                  <CastersBox>
                    <NameCasters>
                      {res.fields.name}
                      <span> {res.fields.surname} </span>
                    </NameCasters>
                    <FuncCasters>{res.fields.role}</FuncCasters>
                  </CastersBox>
                </Peoples>
              </>
            );
          })}
        </Slider>
      </GlobalPeoples>
    </Content>
  );
}
