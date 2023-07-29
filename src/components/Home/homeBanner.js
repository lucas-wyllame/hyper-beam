import {
  Content,
  Banner,
  FeaturedPodcastInfo,
  PlayButton,
  PodcastTheme,
  BigImg,
  OverlayDiv,
} from "./styles";
import { useRouter } from "next/router";
import { TitleInsideComponent } from "@styles/globalStyles";
import React, { useEffect, useRef } from "react";
import { ConnectContent } from "../../ConfigContent";
import { useState } from "react";

export default function HomeBanner() {
  const [all, setAll] = useState([]);
  const sliderRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
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

  useEffect(() => {
    if (window.innerWidth > 1100 && activeSlide > 5) {
      sliderRef.current.slickGoTo(3);
    }
  }, [activeSlide, sliderRef.current]);

  var slider = ".slider";

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    mobileFirst: true,
    slickGoTo: 5,
    transformEnabled: false,
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
          initialSlide: 6,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          initialSlide: 6,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          initialSlide: 5,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slickGoTo: 5,
        },
      },
    ],
  };

  const router = useRouter();

  const handleClick = (link) => {
    router.push(`/podcasts/${link}`);
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Content>
      <Banner
        onClick={() => handleClick(lastPodcast.fields?.pathUrl)}
        image={`url(${lastPodcast.fields?.bigImage?.fields.file.url})`}
      >
        <OverlayDiv>
          <FeaturedPodcastInfo>
            <TitleInsideComponent
              width="210px"
              widthTablet="250px"
              fontSize="2.5rem"
              fontSizeTablet="3rem"
              margin="12px 0"
              widthCircle="7px"
              heightCircle="7px"
              widthCircleTablet="8px"
              heightCircleTablet="8px"
              number={lastPodcast.fields?.number}
              title="Hyper Beam"
            />
            <PodcastTheme onClick={(e) => handleChildElementClick(e)}>
              {lastPodcast.fields?.title}
            </PodcastTheme>
            <PlayButton
              onClick={() => handleClick(lastPodcast.fields?.pathUrl)}
            >
              Play
            </PlayButton>
          </FeaturedPodcastInfo>
          <BigImg
            onClick={(e) => handleChildElementClick(e)}
            image={`url(${lastPodcast.fields?.detachedImage?.fields.file.url})`}
          />
        </OverlayDiv>
      </Banner>
    </Content>
  );
}
