import styled from "styled-components";

const CardBanner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => props.backgroundImg};
  background-size: cover;
  background-repeat: no-repeat;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: 31px;
  margin: ${(props) => props.margin};
  border-radius: 15px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    height: ${(props) => props.heightLaptop};
  }
  @media (min-width: 1440px) {
    width: ${(props) => props.widthLaptopLarge};
    height: ${(props) => props.heightLaptopLarge};
  }
`;

export default function HyperCard({
  position,
  width,
  height,
  top,
  margin,
  widthMobile,
  heightMobile,
  widthLaptop,
  heightLaptop,
  widthLaptopLarge,
  heightLaptopLarge,
  backgroundImg
}) {
  return (
    <CardBanner
      backgroundImg={backgroundImg}
      position={position}
      width={width}
      height={height}
      top={top}
      margin={margin}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
      widthLaptop={widthLaptop}
      heightLaptop={heightLaptop}
      widthLaptopLarge={widthLaptopLarge}
      heightLaptopLarge={heightLaptopLarge}
    />
  );
}
