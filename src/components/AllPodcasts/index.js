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
  GropingTexts,
} from "./styles";
import HyperCard from "../HyperCard/hyperCard";
import { useEffect, useState } from "react";
import { ConnectContent } from "src/ConfigContent";
import { TitleInsideComponentGray } from "../Header/styles";
import { useRouter } from "next/router";
import { ContentPasteSearchOutlined } from "@mui/icons-material";
import { MoreInfs, TitleInsideComponent } from "@styles/globalStyles";

export default function Carousel() {
  var itemsPerPage = 4;
  const [all, setAll] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNext() {
    var NextBtnStyle = await document.getElementById("nextBtn");
    var PreviousBtnStyle = await document.getElementById("previousBtn");
    if (offset < totalRecords) {
      setCurrentPage(offset);
      setOffset(offset + itemsPerPage);
    }
    if (offset + 1 >= totalRecords) {
      NextBtnStyle.style.backgroundImage = "url('./icon/blueArrowRight.svg')";
      // setCurrentPage(offset);
      // setOffset(offset + itemsPerPage);
    }
    if (offset >= itemsPerPage) {
      PreviousBtnStyle.style.backgroundImage =
        "url('./icon/purpleArrowLeft.svg')";
    } else {
      PreviousBtnStyle.style.backgroundImage =
        "url('./icon/blueArrowLeft.svg')";
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
          "url('./icon/blueArrowLeft.svg')";
      }
      if (totalRecords - offset >= itemsPerPage) {
        NextBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowRight.svg')";
      } else {
        NextBtnStyle.style.display = "flex";
        NextBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowRight.svg')";
      }
    }
  }

  useEffect(() => {
    async function FetchMyApi() {
      var PreviousBtnStyle = await document.getElementById("previousBtn");
      var NextBtnStyle = await document.getElementById("nextBtn");
      var CounterLabel = await document.getElementById("counter");
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setAll(allContent.reverse());
      setCurrentPage(0);
      setOffset(itemsPerPage);
      setTotalRecords(allContent.length);
      if (itemsPerPage < allContent.length) {
        NextBtnStyle.style.backgroundImage =
          "url('./icon/purpleArrowRight.svg')";
        PreviousBtnStyle.style.backgroundImage =
          "url('./icon/blueArrowLeft.svg')";
        CounterLabel.style.display = "flex";
      } else {
        CounterLabel.style.display = "none";
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
                hyperCardImg={`url(${res.fields?.littleImage?.fields.file.url})`}
                width="151px"
                height="151px"
                widthTablet="171px"
                heightTablet="171px"
                widthLaptop="200px"
                heightLaptop="200px"
                // margin="0 0 13px 0"
              />
              <GropingTexts>
                <TitleInsideComponent
                  width="170px"
                  widthTablet="240px"
                  number={res.fields?.number}
                  colorSpan="#FFE747"
                  cursor="pointer"
                  widthCircle="6px"
                  heightCircle="6px"
                  fontSize="2.0rem"
                  fontSizeTablet="2.8rem"
                />
                <MoreInfs
                  textOverflow="ellipsis"
                  overflow="hidden"
                  display="-webkit-box !important"
                  wbkLineClamp={9}
                  wbkLineClampLaptop={4}
                  wbkLineClampTablet={3}
                  wbkBoxOrient="vertical"
                  whiteSpace="normal"
                  fontSize="1.9rem"
                  fontSizeTablet={"1.7rem"}
                  fontSizeLaptopLarge="1.9rem"
                >
                  {res.fields.description}
                </MoreInfs>
              </GropingTexts>
            </CarouselStyled>
          );
        })}
        <PageButtons>
          <AlignCountBaseDiv>
            <LeftArrow id="previousBtn" onClick={() => handlePrev()} />
            <CountLabel id="counter">
              {currentPage / itemsPerPage + 1}/
              {Math.ceil(totalRecords / itemsPerPage)}
            </CountLabel>
            <RightArrow id="nextBtn" onClick={() => handleNext()} />
          </AlignCountBaseDiv>
        </PageButtons>
      </PodcastsList>
    </Content>
  );
}
