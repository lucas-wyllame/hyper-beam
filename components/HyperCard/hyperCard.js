import styled from "styled-components";

const CardBanner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: blue;
  position: ${(props) => props.position};
  margin: 20px 0;
  bottom: -30%;
`;

export default function HyperCard({ position, width, height }) {
    return (
        <CardBanner 
        position={position} 
        width= {width}
        height= {height}
        />
    );
}