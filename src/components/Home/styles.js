import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 790px;
  /* background: blue; */
  display: flex;
  justify-content: center;
  margin-top: 80px;
  @media (min-width: 768px) {
    height: 850px;
    margin-top: 90px;
  }
  @media (min-width: 1024px) {
    height: 650px;
    margin-top: 100px;
  }
`;

export const Banner = styled.div`
  width: 95%;
  height: 610px;
  flex-direction: column;
  background-color: #a57bca;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  background-position: center;
  @media (min-width: 768px) {
    width: 91%;
    height: 692px;
  }
  @media (min-width: 1024px) {
    width: 95%;
    height: 488px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1366px) {
    height: 520px;
  }
`;

export const OverlayDiv = styled.div`
  width: 100%;
  height: 610px;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%
  );
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 60px;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 692px;
  }
  @media (min-width: 1024px) {
    height: 488px;
    justify-content: space-between;
    flex-direction: row;
  }
  @media (min-width: 1366px) {
    height: 520px;
  }
`;

export const FeaturedPodcastInfo = styled.div`
  width: 100%;
  /* border-radius: 44px; */
  height: 201px;
  /* background: lightblue; */
  display: flex;
  flex-direction: column;
  padding: 0 34px;
  @media (min-width: 768px) {
    padding: 0 117px;
    position: absolute;
    top: 10px;
  }
  @media (min-width: 1024px) {
    padding: 0 34px;
    width: 45%;
    top: 25%;
  }
`;

export const PlayButton = styled.button`
  width: 130px;
  height: 49px;
  font-size: 2rem;
  background: #ffe747;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 1s;
  transition: text-shadow 1s;
  :hover {
    /* width: 135px; */
    /* height: 54px; */
    text-shadow: 0px 3px 6px #ff00c47a;
    transform: scale(1.03);
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const PodcastTheme = styled.p`
  font-size: 2.1rem;
  margin: 0 0 21px 0;
  color: #fff;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1366px) {
    font-size: 2.5rem;
  }
`;

export const BigImg = styled.div`
  width: 332px;
  height: 317px;
  position: absolute;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 0;
  /* background-image: url("/img/Pkm.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center; */
  @media (min-width: 768px) {
    width: 494px;
    height: 470px;
    max-width: 540px;
  }
  @media (min-width: 1024px) {
    right: 80px;
    width: 394px;
    height: 375px;
  }
  @media (min-width: 1440px) {
    width: 539px;
    height: 513px;
  }
`;
export const DivToCentralizeListHomeBanner = styled.div`
  width: 100%;
  height: 160px;
  /* background: gray; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 580px;
  left: 0px;
  @media (min-width: 768px) {
    top: 96%;
  }
  @media (min-width: 1024px) {
    top: 465px;
  }
  @media (min-width: 1366px) {
    top: 497px;
  }
`;

export const ListHomeBanner = styled.div`
  width: 242px;
  height: auto;
  /* background: red; */
  @media (min-width: 569px) {
    width: 440px;
  }
  @media (min-width: 768px) {
    width: 570px;
  }
  @media (min-width: 987px) {
    width: 662px;
  }
  @media (min-width: 1101px) {
    width: 900px;
  }
  @media (min-width: 1366px) {
    width: 1090px;
  }
`;

export const HyperCardGroup = styled.div`
  height: 220px;
  /* background: green; */
  cursor: pointer;
  display: flex !important;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    div {
      box-shadow: 0px 3px 8px #0000003d;
      mix-blend-mode: soft-light;
    }
    div {
      color: #ffe747;
      div {
        background-color: #ffe747;
      }
    }
  }
  @media (min-width: 768px) {
    height: 195px;
  }
  @media (min-width: 1024px) {
    height: 220px;
  }
`;

export const HyperText = styled.label`
  width: 60%;
  font-size: 17px;
  color: #9a8dac;
`;

export const LeftArrow = styled.img`
  width: auto;
  height: 39px;
  position: absolute;
  top: 50%;
  left: -39px;
  z-index: 2;
`;

export const RightArrow = styled.img`
  width: auto;
  height: 39px;
  position: absolute;
  right: -39px;
  top: 50%;
  z-index: 2;
`;
