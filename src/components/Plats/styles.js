import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 725px;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    height: 700px;
    margin-bottom: -54px;
  }
`;

export const PlaySpotify = styled.div`
  width: 30%;
  height: 256px;
  background: purple;
  display: flex;
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 85%;
    height: 134px;
  }
`;

export const TextPlats = styled.div`
  width: 50%;
  height: 55%;
  background: pink;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 85%;
    height: 70%;
  }
`;

export const OtherPlats = styled.div`
  width: 83%;
  height: 50%;
  background: green;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    margin-top: 40px;
    flex-direction: column;
    height: 61%;
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
