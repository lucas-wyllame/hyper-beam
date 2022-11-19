import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 66px;
  background: #11122d 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 16px #0000004f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoTop = styled.div`
  width: 53px;
  height: 53px;
  background: white;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  height: 650px;
  background: #11129d;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @media (max-width: 480px) {
    height: 790px;
  }
`;

export const Banner = styled.div`
  width: 95%;
  height: 488px;
  background: purple;
  border-radius: 44px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  @media (max-width: 1400px) {
    height: 430px;
  }
  @media (max-width: 1176px) {
    height: 380px;
  }
  @media (max-width: 962px) {
    height: 315px;
  }
  @media (max-width: 860px) {
    height: 600px;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 95%;
    height: 610px;
    flex-direction: column;
  }
`;

export const TextsDiv = styled.div`
  width: 45%;
  height: 40%;
  background: lightblue 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 34px;
  @media (max-width: 860px) {
  }
  @media (max-width: 480px) {
    width: 100%;
    border-radius: 44px;
  }
  button {
    @media (max-width: 480px) {
      width: 130px;
      height: 49px;
      font-size: 20px;
    }
  }
`;

export const PlayButton = styled.div`
  width: 25%;
  height: 50px;
  background: #ffe747 0% 0% no-repeat padding-box;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    width: 26%;
    height: 54px;
    text-shadow: 0px 3px 6px #ff00c47a;
  }
  @media (max-width: 1400px) {
    width: 22%;
    font-size: 2.5rem;
  }
  @media (max-width: 1252px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1112px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    width: 130px;
    height: 49px;
    font-size: 2rem;
  }
`;

export const TitleInside = styled.div`
  font-size: 3.5rem;
  margin: 10px 0;
  max-width: 280px;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #ffe747;
    font-size: 3.5rem;
    @media (max-width: 1520px) {
      font-size: 3rem;
    }
    @media (max-width: 1252px) {
      font-size: 2.5rem;
    }
    @media (max-width: 1112px) {
      font-size: 2.4rem;
    }
    @media (max-width: 1025px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 1520px) {
    width: 40%;
    font-size: 3rem;
  }
  @media (max-width: 1400px) {
    width: 240px;
  }
  @media (max-width: 1252px) {
    font-size: 2.5rem;
    width: 220px;
  }
  @media (max-width: 1112px) {
    width: 200px;
    font-size: 2.4rem;
  }
  @media (max-width: 1025px) {
    width: 180px;
    font-size: 2rem;
  }
  @media (max-width: 860px) {
  }
  @media (max-width: 480px) {
    width: 62%;
    font-size: 2.5rem;
  }
`;

export const Desc = styled.p`
  font-size: 3rem;
  margin: 0 0 21px 0;
  color: #fff;
  font: Poppins;
  font-weight: bold;
  @media (max-width: 1520px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1252px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1112px) {
    font-size: 2rem;
  }
  @media (max-width: 1025px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 21px;
    width: 262px;
  }
`;

export const BigImg = styled.img`
  width: 540px;
  max-width: 540px;
  position: absolute;
  background: yellow;
  height: 520px;
  right: 80px;
  bottom: 0;
  @media (max-width: 1400px) {
    width: 35%;
    height: 454px;
  }
  @media (max-width: 1176px) {
    width: 35%;
    height: 400px;
  }
  @media (max-width: 962px) {
    width: 34%;
    height: 370px;
  }
  @media (max-width: 860px) {
  }
  @media (max-width: 480px) {
    width: 329px;
    height: 317px;
    right: 14px;
  }
`;

export const ListHomeBanner = styled.div`
  width: 85%;
  height: 200px;
  background: red;
  position: absolute;
  bottom: -140px;
  left: 7%;

  @media (max-width: 480px) {
    width: 68%;
    left: 60px;
    bottom: -150px;
  }
`;

export const HyperCardGroup = styled.div`
  height: 220px;
  // background: green;
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
