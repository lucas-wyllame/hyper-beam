import styled from "styled-components";

const CardBanner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: linear-gradient(
    135deg,
    rgba(224, 201, 66, 1) 40%,
    rgba(205, 158, 110, 1) 50%,
    rgba(163, 51, 237, 1) 50%
  );
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: 31px;
  margin: ${(props) => props.margin};
  border-radius: 15px;
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
}) {
  return (
    <CardBanner
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
