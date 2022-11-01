import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 630px;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    height: 700px;
    /* margin-bottom: -54px; */
  }
`;

export const PlaySpotify = styled.div`
  width: 35%;
  height: 230px;
  background: purple;
  display: flex;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 85%;
    height: 134px;
  }
`;

export const IframeSpotify = styled.iframe`
  width: 35%;
  height: 232px;
  h2 {
    font-weight: 100px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 26vh;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextPlats = styled.div`
  width: 50%;
  height: 300px;
  background: pink;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 85%;
    height: 500px;
  }
`;

export const OtherPlats = styled.div`
  width: 80%;
  height: 155px;
  background: red;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 9vh 7vh;
  @media (max-width: 480px) {
    margin-top: 40px;
    flex-direction: column;
    height: 300px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;
export const OtherPlatsMid = styled.div`
  width: auto;
  height: 150px;
  background: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
