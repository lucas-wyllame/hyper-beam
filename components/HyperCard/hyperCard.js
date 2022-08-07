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
    width: 253px;
    height: 253px;
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
    >
      <p>{name}</p>
      <label>{numero}</label>
    </CardBanner>
  );
}
