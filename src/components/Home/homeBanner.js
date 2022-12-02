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

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/podcasts/hyperbeam1");
  };

  return (
    <Content>
      <Banner>
        <FeaturedPodcastInfo>
          <TitleInsideComponent />
          <PodcastTheme>Pokémon Unite e The World Ends with You</PodcastTheme>
          <PlayButton onClick={handleClick}>Play</PlayButton>
        </FeaturedPodcastInfo>
        <BigImg />
        <DivToCentralizeListHomeBanner>
          <ListHomeBanner>
            <Slider {...settings}>
              {TitleInsides.map((res, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <>
                    <HyperCardGroup key={index}>
                      <HyperCard width={"196px"} height={"196px"} />
                      <HyperText>{res.name}</HyperText>
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
