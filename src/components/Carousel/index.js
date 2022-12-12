import Slider from "react-slick";
import {
  Content,
  PodcastsList,
  CarouselStyled,
  LeftArrow,
  RightArrow,
  AlignArrowBaseDiv,
  AlignCountBaseDiv,
  CountLabel,
  PageButtons,
  PageButton
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { useEffect, useState, useRef } from "react";
import { ConnectContent } from "src/ConfigContent";
import { TitleInsideComponentSearch } from "../Header/styles";
import { useRouter } from "next/router";

export default function Carousel() {
  var itemsPerPage = 4;
  const [all, setAll] = useState([]);
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
  async function handleNext() {
    var NextBtnStyle = await document.getElementById("nextBtn");
    if (offset <= totalRecords) {
      var PreviousBtnStyle = await document.getElementById("previousBtn");
      if (offset > 0) {
        PreviousBtnStyle.style.display = "flex";
        PreviousBtnStyle.style.backgroundColor = "purple";
      } else {
        // PreviousBtnStyle.style.display = "none";
        PreviousBtnStyle.style.backgroundColor = "transparent";
      }
      NextBtnStyle.style.backgroundColor = "purple";
      setCurrentPage(offset);
      setOffset(offset + itemsPerPage);
    }
    else{
      // NextBtnStyle.style.display = "none";
        NextBtnStyle.style.backgroundColor = "transparent";
    }
    if(totalRecords - offset <= itemsPerPage){
      NextBtnStyle.style.backgroundColor = "transparent";
    }else{
      NextBtnStyle.style.display = "flex";
      NextBtnStyle.style.backgroundColor = "purple";
    }
    
  }

  async function handlePrev() {
    var NextBtnStyle = await document.getElementById("nextBtn");
    if (offset > itemsPerPage) {
      var PreviousBtnStyle = await document.getElementById("previousBtn");
      setOffset(offset - itemsPerPage);
      setCurrentPage(offset - 2 * itemsPerPage);

      if (offset > 2 * itemsPerPage) {
        PreviousBtnStyle.style.display = "flex";
        PreviousBtnStyle.style.backgroundColor = "purple";
      } else {
        // PreviousBtnStyle.style.display = "none";
        PreviousBtnStyle.style.backgroundColor = "transparent";
      }
      if(totalRecords - offset >= itemsPerPage){
        NextBtnStyle.style.backgroundColor = "transparent";
      }else{
        NextBtnStyle.style.display = "flex";
        NextBtnStyle.style.backgroundColor = "purple";
      }
    }
  }

  useEffect(() => {
    async function FetchMyApi() {
      var PreviousBtnStyle = await document.getElementById("previousBtn");
      var NextBtnStyle = await document.getElementById("nextBtn");
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setAll(allContent.reverse());
      setCurrentPage(0);
      setOffset(itemsPerPage);
      setTotalRecords(allContent.length);
      NextBtnStyle.style.backgroundColor = "purple";
      PreviousBtnStyle.style.display = "flex";
      PreviousBtnStyle.style.backgroundColor = "transparent";
      
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
    rows: 1,
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
        },
      },
    ],
  };

  const router = useRouter();

  const handleClick = (link) => {
    router.push(`/podcasts/${link}`);
  };

  return (
    <Content>
      <PodcastsList>
        {all.slice(currentPage, offset).map((res, index) => {
          return (
            <CarouselStyled
              onClick={() => handleClick(res.fields?.pathUrl)}
              key={index}
            >
              <HyperCard
                backgroundImg={`url(${res.fields?.littleImage?.fields.file.url})`}
                width={"225px"}
                height={"225px"}
              ></HyperCard>
              <TitleInsideComponentSearch number={res.fields?.number} />
            </CarouselStyled>
          );
        })}
        <PageButtons>
          <PageButton id="previousBtn" onClick={() => handlePrev()}>
            <label>Mais Recente</label>
          </PageButton>
          <PageButton id="nextBtn" onClick={() => handleNext()}>
            <label>Mais Antigo</label>
          </PageButton>
        </PageButtons>
      </PodcastsList>
    </Content>
  );
}
