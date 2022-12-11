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
  width,
  height,
  backgroundImg,
  position,
  top,
  margin,
  widthLaptop,
  heightLaptop,
  widthLaptopLarge,
  heightLaptopLarge,
}) {
  return (
    <CardBanner
      width={width}
      height={height}
      backgroundImg={backgroundImg}
      position={position}
      top={top}
      margin={margin}
      widthLaptop={widthLaptop}
      heightLaptop={heightLaptop}
      widthLaptopLarge={widthLaptopLarge}
      heightLaptopLarge={heightLaptopLarge}
    />
  );
}
