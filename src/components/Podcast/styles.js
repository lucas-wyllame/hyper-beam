import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  @media (min-width: 1024px) {
    height: 700px;
  }
`;

export const BackBanner = styled.div`
  width: 100%;
  height: 645px;
  background: purple;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* padding: 50px 33px; */
  /* flex-direction: column; */
  @media (min-width: 1024px) {
    height: 400px;
  }
`;

export const ItensBanner = styled.div`
  width: 80%;
  height: 600px;
  background: blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: static;
  gap: 0;
  top: 0;
  @media (min-width: 1024px) {
    position: relative;
    height: 340px;
    flex-direction: row;
    gap: 50px;
    top: 60px;
  }
`;

export const BannerInfos = styled.div`
  width: 100%;
  height: 220px;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 60px;
  margin-left: 0px;
  align-items: center;
  @media (min-width: 1024px) {
    width: 40%;
    height: 250px;
    margin-top: 0;
    align-items: normal;
  }
  @media (min-width: 1330px) {
    width: 55%;
    max-width: 638px;
    height: 135px;
  }
`;

export const SeparationDiv = styled.div`
  width: 100%;
  height: 60px;
  background: green;
  @media (max-width: 480px) {
    height: 110px;
  }
`;

export const Topic = styled.div`
  width: 80%;
  height: auto;
  background: black;
  display: flex;
  align-items: normal;
  /* margin-bottom: -25px; */
  @media (min-width: 1024px) {
    height: 250px;
    align-items: center;
  }
`;
