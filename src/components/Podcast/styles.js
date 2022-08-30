import styled from "styled-components";


export const Content = styled.div`
  width: 100%;
  height: 696px;
  // background: red;
  display: flex;
  @media (max-width: 480px) {
    height: 810px;
  }
`;
export const BackBanner = styled.div`
  width: 100%;
  height: 400px;
  background: purple;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 480px) {
    height: 620px;
  }
`;

export const ItensBanner = styled.div`
  width: 80%;
  height: 696px;
  // background: blue;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 296px;
  @media (max-width: 480px) {
    top: 280px;
    height: 900px;
  }
`;

export const Topic = styled.div`
  width: 100%;
  height: 75%;
  // background: lightblue;
  display: flex;
  align-items: center;
  margin-bottom: -25px;
  @media (max-width: 480px) {
    height: 68.9%;
    flex-direction: column;
  }
`;

export const BannerInfos = styled.div`
  width: 44%;
  height: 124px;
  // background: pink;
  display: flex;
  flex-direction: column;
  margin-left: 58px;
  @media (max-width: 480px) {
    width: 100%;
    height: 53%;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }
`;