import styled from "styled-components";

const CardBanner = styled.div`
  width: 196px;
  height: 196px;
  background: blue;
  position: absolute;
  margin: 20px 0;
  bottom: -30%;
`;

export default function HyperCard() {
    return (
        <CardBanner />
    );
}