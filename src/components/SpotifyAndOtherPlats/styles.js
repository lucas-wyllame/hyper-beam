import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 890px;
    margin-top: 30px;
  }
  @media (min-width: 1024px) {
    height: 590px;
    margin-top: 31px;
  }
`;

export const IframeSpotify = styled.iframe`
  width: 100%;
  max-width: 623px;
  height: 152px;
  h2 {
    font-weight: 100px;
  }
  @media (min-width: 555px) {
    height: 152px;
  }
  @media (min-width: 768px) {
    width: 409px;
    height: 730px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 232px;
  }
`;

export const OtherPlats = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1024px) {
    height: auto;
  }
`;

export const DivForGroupingPlatsButton = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-top: 40px;
  justify-items: center;
  @media (min-width: 1024px) {
    max-width: 800px;
    height: 155px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 9vh 7vh;
  }
`;
