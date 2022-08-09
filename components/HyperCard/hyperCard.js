import styled from "styled-components";

const CardBanner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: orange;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: 31px;
  margin: ${(props) => props.margin};
  border-radius: 15px;
  p {
    color: #fff;
  }
  @media (max-width: 480px) {
    width: ${(props) => props.width480};
    height: ${(props) => props.height480};
  }
  @media (max-width: 1510px) {
    width: ${(props) => props.width1510};
    height: ${(props) => props.height1510};
  }
  @media (max-width: 1279px) {
    width: ${(props) => props.width1279};
    height: ${(props) => props.height1279};
  }
  @media (max-width: 1080px) {
    width: ${(props) => props.width1080};
    height: ${(props) => props.height1080};
  }
  @media (max-width: 925px) {
    width: ${(props) => props.width925};
    height: ${(props) => props.height925};
  }
  @media (max-width: 760px) {
    width: ${(props) => props.width760};
    height: ${(props) => props.height760};
  }
`;

export default function HyperCard({
  position,
  width,
  height,
  name,
  numero,
  top,
  margin,
  width480,
  height480,
  width1510,
  height1510,
  width1279,
  height1279,
  width1080,
  height1080,
  width925,
  height925,
  width760,
  height760,
}) {
  return (
    <CardBanner
      position={position}
      width={width}
      height={height}
      width480={width480}
      height480={height480}
      width1510={width1510}
      height1510={height1510}
      width1279={width1279}
      height1279={height1279}
      width1080={width1080}
      height1080={height1080}
      width925={width925}
      height925={height925}
      width760={width760}
      height760={height760}
      name={name}
      numero={numero}
      top={top}
      margin={margin}
    >
      <p>{name}</p>
      <label>{numero}</label>
    </CardBanner>
  );
}
