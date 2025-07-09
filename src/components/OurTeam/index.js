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
  CardsOurTeamHover,
} from "./styles";
import Slider from "react-slick";
import { ConnectContent } from "../../ConfigContent";
import React, { useEffect, useState, useRef } from "react";

function SamplePrevArrow(props) {
  const { className, onClick, style } = props;
  return <LeftArrow className={className} style={{ ...style, backgroundColor: "none", borderStyle: "0" }} onClick={onClick} />;
}

function SampleNextArrow(props) {
  const { className, onClick, style } = props;
  return <RightArrow className={className} style={{ ...style, backgroundColor: "none", borderStyle: "0" }} onClick={onClick} />;
}

export default function OurTeam() {
  let castersList;
  let othersList;
  const sliderRef = useRef();
  const [allCollaborators, setAllCollaborators] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let response = await items.filter((x) => x.sys.contentType.sys.id == "collaborators");
      castersList = response.filter((x) => (x.fields?.caster === true ? x : null));
      othersList = response.filter((x) => (x.fields?.caster === false ? x : null));
      setAllCollaborators([...castersList, ...othersList]);
      setIsMobile(window.screen.width > 1175 ? false : true);
    }
    FetchMyApi().then(() => {
      if (isMobile) handleNext();
    });
  }, [isMobile]);

  const handleNext = () => {
    sliderRef?.current?.slickNext();
  };

  var slider = ".slider";

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
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          initialSlide: 3,
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
        <Title margin="0 0 5px 0">Nosso time</Title>
        <Desc margin="0">A equipe que trabalha no Hyper Beam</Desc>
      </GroupText>
      <GlobalPeoples>
        <Slider ref={sliderRef} {...settings}>
          {allCollaborators?.map((res, index) => {
            return (
              <React.Fragment key={index}>
                <Peoples>
                  <CardsOurTeamHover image={`url(${res.fields.profilePicture?.fields.file.url})` || ""} />
                  <CardsOurTeam
                    image={`url(${res.fields.profilePicture?.fields.file.url})` || ""}
                    imageHover={`url(${res.fields.profilePictureHover?.fields.file.url})`}
                  />
                  <CastersBox>
                    <NameCasters>
                      {res.fields.name}
                      <span> {res.fields.surname} </span>
                    </NameCasters>
                    <FuncCasters>{res.fields.role}</FuncCasters>
                  </CastersBox>
                </Peoples>
              </React.Fragment>
            );
          })}
          <Peoples>
            <CardsOurTeamHover image={`url(/img/imagemhover.png)` || ""} />
            <CardsOurTeam image={`url(/img/imagemhover.png)` || ""} imageHover={`url(/img/imagem.jpg)`} />
            <CastersBox>
              <NameCasters>
                Lucas
                <span> SuP </span>
              </NameCasters>
              <FuncCasters>Desenvolvedor</FuncCasters>
            </CastersBox>
          </Peoples>
        </Slider>
      </GlobalPeoples>
    </Content>
  );
}
