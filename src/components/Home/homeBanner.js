import HyperCard from "../HyperCard/hyperCard";
import {
  Content,
  Banner,
  FeaturedPodcastInfo,
  PlayButton,
  PodcastTheme,
  BigImg,
  ListHomeBanner,
  HyperCardGroup,
  HyperText,
  LeftArrow,
  RightArrow,
  DivToCentralizeListHomeBanner,
} from "./styles";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { TitleInsideComponent } from "@styles/globalStyles";
import React, { useEffect } from "react";
import { ConnectContent } from "../../ConfigContent";
import { useState } from "react";
import { TitleInsideComponentGray } from "../Header/styles";

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <LeftArrow
//       className={className}
//       src="./icon/blueArrowLeft.svg"
//       onClick={onClick}
//     />
//   );
// }

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <RightArrow
//       className={className}
//       src="./icon/purpleArrowRight.svg"
//       onClick={onClick}
//     />
//   );
// }

export default function HomeBanner() {
  const [all, setAll] = useState([]);
  const [lastPodcast, setLastPodcast] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setLastPodcast(allContent[allContent.length - 1]);
      setAll(allContent.reverse());
    }
    FetchMyApi();
  }, []);

  var slider = ".slider";

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      // {
      //   breakpoint: 986,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: slider.length > 1 ? true : false,
      //   },
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
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
      {console.log("Home banner all", all)}
      <Banner image={`url(${lastPodcast.fields?.bigImage?.fields.file.url})`}>
        <FeaturedPodcastInfo>
          <TitleInsideComponent
            margin="12px 0"
            number={lastPodcast.fields?.number}
          />
          <PodcastTheme>{lastPodcast.fields?.title}</PodcastTheme>
          <PlayButton onClick={() => handleClick(lastPodcast.fields?.pathUrl)}>
            Play
          </PlayButton>
        </FeaturedPodcastInfo>
        <BigImg
          image={`url(${lastPodcast.fields?.detachedImage?.fields.file.url})`}
        />
        <DivToCentralizeListHomeBanner>
          <ListHomeBanner>
            <Slider {...settings}>
              {all.slice(1, 10).map((res, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <React.Fragment key={index}>
                    <HyperCardGroup
                      onClick={() => handleClick(res.fields?.pathUrl)}
                    >
                      <HyperCard
                        hyperCardImg={`url(${res.fields?.littleImage?.fields?.file.url})`}
                        width={"196px"}
                        height={"196px"}
                        widthLaptop={"196px"}
                        heightLaptop={"196px"}
                      />
                      <TitleInsideComponentGray number={res.fields?.number} />
                    </HyperCardGroup>
                  </React.Fragment>
                );
              })}
            </Slider>
          </ListHomeBanner>
        </DivToCentralizeListHomeBanner>
      </Banner>
    </Content>
  );
}
