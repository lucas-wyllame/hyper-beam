import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 70px;
  @media (min-width: 1024px) {
    height: 700px;
  }
`;

export const BackBanner = styled.div`
  width: 100%;
  height: auto;
  background-color: #a57bca;
  background-image: ${(props) => props.backgroundImg};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px 0;
  @media (min-width: 1024px) {
    height: 400px;
    padding: 0;
  }
`;

export const ItensBanner = styled.div`
  width: 81%;
  height: auto;
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
  height: auto;
  display: flex;
  /* background: cyan; */
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 60px; */
  @media (min-width: 1024px) {
    width: 40%;
    height: 250px;
    margin-top: -60px;
  }
  @media (min-width: 1330px) {
    width: 70%;
    height: 135px;
    align-items: normal;
  }
`;

export const Topic = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  padding: 30px 0;
  @media (min-width: 1024px) {
    height: 250px;
    align-items: center;
    margin-top: 38px;
  }
`;
