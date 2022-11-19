import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 700px;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  @media (max-width: 480px) {
    height: 1050px;
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
    height: 850px;
  }
`;

export const ItensBanner = styled.div`
  width: 80%;
  height: 340px;
  background: blue;
  display: flex;
  /* align-items: center; */
  gap: 50px;
  position: relative;
  top: 60px;
  @media (max-width: 480px) {
    /* position: static; */
    height: 600px;
    flex-direction: column;
    gap: 0;
    top: 0;
  }
`;

export const BannerInfos = styled.div`
  width: 40%;
  height: 145px;
  background: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
    margin-left: 0px;
    align-items: center;
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
  height: 250px;
  background: lightblue;
  display: flex;
  align-items: center;
  /* margin-bottom: -25px; */
  @media (max-width: 480px) {
    align-items: normal;
    height: 490px;
  }
`;
