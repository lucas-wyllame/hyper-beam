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
  p {
    color: #fff;
  }

  @media (min-width: 1024px) {
    width: 304px;
    height: 304px;
  }
  @media (min-width: 1440px) {
    width: 337px;
    height: 337px;
  }
  /* @media (max-width: 1310px) {
    width: 176px;
    height: 176px;
  }
  @media (max-width: 962px) {
    width: 146px;
    height: 146px;
  } */
`;

export default function HyperCard({
  position,
  width,
  height,
  name,
  numero,
  top,
  margin,
  widthMobile,
  heightMobile,
}) {
  return (
    <CardBanner
      position={position}
      width={width}
      height={height}
      name={name}
      numero={numero}
      top={top}
      margin={margin}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
    >
      <p>{name}</p>
      <label>{numero}</label>
    </CardBanner>
  );
}
