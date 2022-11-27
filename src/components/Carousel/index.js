import Slider from "react-slick";
import {
  Content,
  PodcastsList,
  CarousselStyled,
  HyperText,
  RightArrow,
  LeftArrow,
  CountLabel,
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { casts } from "./casts";
import { useEffect, useState } from "react";
import { SlickCss } from "../OurTeam/slickCss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/Grupo 22.svg"
      onClick={onClick}
      id="nextBtn"
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
      id="previousBtn"
    />
  );
}

export default function Carousel() {
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  // var itemsPerPage = 24;
  // var itensTotal = casts.length;
  // var totalNumberOfPages = itensTotal / itemsPerPage;

  // async function handleNext() {
  //   (console.log("ATIVOU ESSA FUNÇÃO NEXT"))
  //   if (offset < totalNumberOfPages) {
  //     var PreviousBtnStyle = await document?.getElementById("previousBtn");
  //     if (offset > 0) {
  //       PreviousBtnStyle.style.display = "flex";
  //     } else {
  //       PreviousBtnStyle.style.display = "none";
  //     }
  //     setCurrentPage(offset);
  //     setOffset(offset + itemsPerPage);
  //   }
  // }

  // async function handlePrev() {
  //   if (offset > itemsPerPage) {
  //     var PreviousBtnStyle = await document.getElementById("previousBtn");
  //     setOffset(offset - itemsPerPage);
  //     setCurrentPage(offset - 2 * itemsPerPage);

  //     if (offset > 2 * itemsPerPage) {
  //       PreviousBtnStyle.style.display = "flex";
  //     } else {
  //       PreviousBtnStyle.style.display = "none";
  //     }
  //   }
  // }
  // useEffect(() => {
  //   async function FetchMyApi() {
  //     var PreviousBtnStyle = await document.getElementById("previousBtn");
  //     var NextBtnStyle = await document.getElementById("nextBtn");
  //     setCurrentPage(0);

  //     setOffset(itemsPerPage);
  //     PreviousBtnStyle.style.display = "none";
  //     NextBtnStyle.style.display = "flex";
  //     // if (itemsPerPage > totalNumberOfPages) {
  //     //   PreviousBtnStyle.style.display = "none";
  //     // } else {
  //     //   PreviousBtnStyle.style.display = "flex";
  //     // }
  //   }
  //   FetchMyApi();
  // }, []);

  var slider = ".slider";
  var settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <SlickCss
          display={"flex"}
          background={"blue"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        />
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
        <CountLabel>1/2</CountLabel>
      </PodcastsList>
    </Content>
  );
}
