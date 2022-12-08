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
import { useEffect } from "react";
import { ConnectContent } from "../../ConfigContent";
import { useState } from "react";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/Grupo 21.svg"
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/Grupo 22.svg"
      onClick={onClick}
    />
  );
}

export default function HomeBanner() {
  const [all, setAll] = useState([]);
  const [lastPodcast, setLastPodcast] = useState([])
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setAll(allContent);
      setLastPodcast(allContent[allContent.length - 1]);
    }
    FetchMyApi();
  }, []);

  const TitleInsides = [
    { name: "Hyper Beam 1", image: "genericImageURLLink" },
    { name: "Hyper Beam 2", image: "genericImageURLLink2" },
    { name: "Hyper Beam 3", image: "genericImageURLLink3" },
    { name: "Hyper Beam 4", image: "genericImageURLLink4" },
    { name: "Hyper Beam 5", image: "genericImageURLLink5" },
    { name: "Hyper Beam 6", image: "genericImageURLLink6" },
  ];

  var slider = ".slider";

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1337,
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
      {
        breakpoint: 986,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 480,
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
      {console.log("la ele infinito", all)}
      <Banner>
        <FeaturedPodcastInfo>
          <TitleInsideComponent number={lastPodcast.fields?.number}/>
          <PodcastTheme>{lastPodcast.fields?.title}</PodcastTheme>
          <PlayButton onClick={() => handleClick(lastPodcast.fields?.pathUrl)}>Play</PlayButton>
        </FeaturedPodcastInfo>
        <BigImg />
        <DivToCentralizeListHomeBanner>
          <ListHomeBanner>
            <Slider {...settings}>
              {all.reverse().slice(0, 10).map((res, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <>
                    <HyperCardGroup onClick={() => handleClick(res.fields?.pathUrl)} key={index}>
                      <HyperCard  width={"196px"} height={"196px"} />
                      <HyperText>Hyper Beam {res.fields.number}</HyperText>
                    </HyperCardGroup>
                    
                  </>
                  
                );
              })}
            </Slider>
          </ListHomeBanner>
        </DivToCentralizeListHomeBanner>
      </Banner>
    </Content>
  );
}
