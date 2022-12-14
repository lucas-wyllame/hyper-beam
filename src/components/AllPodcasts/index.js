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
import { TitleInsideComponentGray } from "../Header/styles";
import { useRouter } from "next/router";
import { ContentPasteSearchOutlined } from "@mui/icons-material";
import { MoreInfs } from "@styles/globalStyles";

export default function Carousel() {
  var itemsPerPage = 4;
  const [all, setAll] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNext() {
    var NextBtnStyle = await document.getElementById("nextBtn");
    var PreviousBtnStyle = await document.getElementById("previousBtn");
    console.log("esquilo", offset);
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
                margin="0 0 13px 0"
              />
              <TitleInsideComponentGray
                width="155px"
                number={res.fields?.number}
                colorSpan="#FFE747"
                cursor="pointer"
                widthCircle="6px"
                heightCircle="6px"
              />
              <MoreInfs
                textOverflow="ellipsis"
                overflow="hidden"
                display="-webkit-box !important"
                wbkLineClamp={9}
                wbkLineClampLaptop={5}
                wbkBoxOrient="vertical"
                whiteSpace="normal"
                fontSize="1.5rem"
              >
                {res.fields.description}
              </MoreInfs>
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
