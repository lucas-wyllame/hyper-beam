import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 790px;
  /* background: #11129d; */
  display: flex;
  justify-content: center;
  margin-top: 80px;
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
  border-radius: 44px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  @media (min-width: 1024px) {
    height: 488px;
    justify-content: space-between;
    flex-direction: row;
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
  @media (min-width: 1024px) {
    width: 45%;
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
  :hover {
    width: 135px;
    height: 54px;
    text-shadow: 0px 3px 6px #ff00c47a;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

export const PodcastTheme = styled.p`
  font-size: 2.1rem;
  margin: 0 0 21px 0;
  color: #fff;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1440px) {
    font-size: 2.5rem;
  }
`;

export const BigImg = styled.div`
  width: 329px;
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
  @media (min-width: 1024px) {
    width: 387px;
    height: 375px;
    max-width: 540px;
    right: 80px;
  }
  @media (min-width: 1440px) {
    width: 532px;
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
  @media (min-width: 1024px) {
    top: 465px;
  }
`;

export const ListHomeBanner = styled.div`
  width: 68%;
  height: 200px;
  /* background: red; */
  @media (min-width: 1440px) {
    width: 1090px;
  }
`;

export const HyperCardGroup = styled.div`
  height: 220px;
  // background: green;
  cursor: pointer;
  display: flex !important;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const HyperText = styled.label`
  width: 60%;
  font-size: 17px;
  color: #9a8dac;
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: auto;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;
  @media (max-width: 480px) {
    left: -10vw;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: auto;
  position: absolute;
  right: -3vw;
  top: 50%;
  z-index: 2;
  @media (max-width: 480px) {
    right: -10vw;
  }
`;
