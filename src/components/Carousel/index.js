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
  PageButton,
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { useEffect, useState } from "react";
import { ConnectContent } from "src/ConfigContent";
import { TitleInsideComponentSearch } from "../Header/styles";
import { useRouter } from "next/router";

export default function Carousel() {
  var itemsPerPage = 3;
  const [all, setAll] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNext() {
    var NextBtnStyle = await document.getElementById("nextBtn");
    if (offset <= totalRecords) {
      var PreviousBtnStyle = await document.getElementById("previousBtn");
      if (offset > 0) {
        PreviousBtnStyle.style.display = "flex";
        PreviousBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowTurnLeft.svg')";
      }
      NextBtnStyle.style.backgroundImage =
        "url('./icon/purpleArrowTurnRight.svg')";
      setCurrentPage(offset);
      setOffset(offset + itemsPerPage);
    } else {
      NextBtnStyle.style.backgroundImage =
        "url('./icon/blueArrowTurnLeft.svg')";
    }
    if (totalRecords - offset <= itemsPerPage) {
      NextBtnStyle.style.backgroundImage =
        "url('./icon/blueArrowTurnRight.svg')";
    } else {
      NextBtnStyle.style.display = "flex";
      NextBtnStyle.style.backgroundImage =
        "url('./icon/purpleArrowTurnRight.svg')";
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
      } else {
        PreviousBtnStyle.style.backgroundImage =
          "url('./icon/blueArrowTurnLeft.svg')";
      }
      if (totalRecords - offset >= itemsPerPage) {
        NextBtnStyle.style.backgroundImage =
          "url('./icon/blueArrowTurnLeft.svg')";
      } else {
        NextBtnStyle.style.display = "flex";
        NextBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowTurnRight.svg')";
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
      if (allContent.length <= itemsPerPage) {
        PreviousBtnStyle.style.display = "none";
        NextBtnStyle.style.display = "none";
      } else {
        NextBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowTurnRight.svg')";
        PreviousBtnStyle.style.display = "flex";
        NextBtnStyle.style.display = "flex";
      }
    }
    FetchMyApi();
  }, []);

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
          <AlignCountBaseDiv>
            <LeftArrow id="previousBtn" onClick={() => handlePrev()} />
            <CountLabel>1/2</CountLabel>
            <RightArrow id="nextBtn" onClick={() => handleNext()} />
          </AlignCountBaseDiv>
        </PageButtons>
      </PodcastsList>
    </Content>
  );
}
