import Slider from "react-slick";
import {
  Content,
  PodcastsList,
  CarouselStyled,
  HyperText,
  LeftArrow,
  RightArrow,
  AlignArrowBaseDiv,
  AlignCountBaseDiv,
  CountLabel,
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { casts } from "./casts";
import { useEffect, useState, useRef } from "react";


export default function Carousel() {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef();
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <RightArrow
        className={className}
        src="./icon/Grupo 22.svg"
        onClick={() => handleNext()}
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
        onClick={() => handlePrev()}
        id="previousBtn"
      />
    );
  }
  var itemsPerPage = 12;
  var itemsTotal = casts.length;
  var totalNumberOfPages = itemsTotal / itemsPerPage;


  async function handleNext() {
    (console.log("ATIVOU ESSA FUNÇÃO NEXT"))
    sliderRef?.current?.slickNext();
    (console.log("offset", offset))
  
   
    var PreviousBtnStyle = document?.getElementById("previousBtn");
    PreviousBtnStyle.style.display = "none";
    if (offset <= itemsTotal) {
      if (offset > 0) {
        console.log("heeeeey", PreviousBtnStyle)
      } else {
        PreviousBtnStyle.style.display = "none";
      }
      setCurrentPage(offset);
      setOffset(offset + itemsPerPage);
    }
  }

  async function handlePrev() {
    (console.log("ATIVOU ESSA FUNÇÃO PREV"));
    sliderRef?.current?.slickPrev();
    // if (offset > itemsPerPage) {
    //   var PreviousBtnStyle = await document.getElementById("previousBtn");
    //   setOffset(offset - itemsPerPage);
    //   setCurrentPage(offset - 2 * itemsPerPage);

    //   if (offset > 2 * itemsPerPage) {
    //     PreviousBtnStyle.style.display = "flex";
    //   } else {
    //     PreviousBtnStyle.style.display = "none";
    //   }
    // }
  }
  useEffect(() => {
    async function FetchMyApi() {
      setCurrentPage(0);

      setOffset(itemsPerPage);
     
      // if (itemsPerPage > totalNumberOfPages) {
      //   PreviousBtnStyle.style.display = "flex";
      // } else {
      //   PreviousBtnStyle.style.display = "flex";
      // }
    }
    FetchMyApi();
  }, []);

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
        <Slider ref={sliderRef} {...settings}>
          {casts.map((res, index) => {
            return (
              <CarouselStyled key={index}>
                <HyperCard width={"225px"} height={"225px"}></HyperCard>
                <HyperText>{res.name}</HyperText>
              </CarouselStyled>
            );
          })}
        </Slider>
        <AlignArrowBaseDiv>
          <AlignCountBaseDiv>
            <CountLabel>1/2</CountLabel>
          </AlignCountBaseDiv>
        </AlignArrowBaseDiv>
      </PodcastsList>
    </Content>
  );
}
