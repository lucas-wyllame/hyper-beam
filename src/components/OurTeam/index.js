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
  AlingCountBaseDiv,
  AlingArrowBaseDiv,
} from "./styles";
import Slider from "react-slick";
import { ConnectContent } from "../../ConfigContent";
import React, { useEffect } from "react";
import { useState } from "react";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/blueArrowLeft.svg"
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/purpleArrowRight.svg"
      onClick={onClick}
    />
  );
}

export default function OurTeam() {
  const [all, setAll] = useState([]);

  let name;
  let nameUrl;

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "collaborators"
      );
      setAll(allContent);
    }
    FetchMyApi();
  }, []);

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
        <Slider {...settings}>
          {all.map((res, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <React.Fragment key={index}>
                <Peoples>
                  <CardsOurTeam
                    image={
                      `url(${res.fields.profilePicture?.fields.file.url})` || ""
                    }
                    imageHover={
                      `url(${res.fields.profilePictureHover?.fields.file.url})` ||
                      ""
                    }
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
        </Slider>
        {/* <AlingArrowBaseDiv> */}
        {/* <AlingCountBaseDiv /> */}
        {/* </AlingArrowBaseDiv> */}
      </GlobalPeoples>
    </Content>
  );
}
