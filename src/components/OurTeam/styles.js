import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 650px;
  /* background: green; */
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  @media (min-width: 769px) {
    height: 647px;
  }
  @media (min-width: 1024px) {
    height: 620px;
  }
  @media (min-width: 1440px) {
    height: 720px;
  }
`;

export const GroupText = styled.div`
  width: 100%;
  height: auto;
  /* background: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GlobalPeoples = styled.div`
  width: 68%;
  max-width: 253px;
  height: 1100px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  position: relative;
  @media (min-width: 1024px) {
    width: 986px;
    max-width: 986px;
    height: 418px;
  }
  @media (max-width: 1175px) {
    width: 100%;
    max-width: 655px;
    height: 384px;
  }
  @media (max-width: 768px) {
    width: 281px;
    /* max-width: 253px; */
    height: auto;
  }
`;

export const Peoples = styled.div`
  width: 100%;
  height: 370px;
  /* background: green; */
  display: flex !important;
  align-items: center;
  flex-direction: column;
`;

export const CardsOurTeam = styled.div`
  width: 253px;
  height: 253px;
  max-width: 253px;
  max-height: 253px;
  background-image: ${(props) => props.image};
  background-color: #9697c7;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-bottom: 20px;
  @media (min-width: 1175px) {
    width: 100%;
    height: 254px;
    max-width: 254px;
    max-height: 254px;
    :hover {
      width: 293px;
      height: 293px;
      background-color: yellow;
      background-image: ${(props) => props.imageHover};
    }
  }
  @media (min-width: 1645px) {
    width: 100%;
    height: 285px;
    max-width: 285px;
    max-height: 285px;
    :hover {
      width: 293px;
      height: 293px;
    }
  }
`;

export const CastersBox = styled.div`
  width: 253px;
  display: flex;
  /* background: green; */
  flex-direction: column;
  @media (min-width: 1175px) {
    width: 254px;
  }
  @media (min-width: 1645px) {
    width: 285px;
  }
`;

export const NameCasters = styled.label`
  font-size: 23px;
  color: #fff;
  span {
    font-size: 23px;
    color: #ffe747;
  }
`;

export const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 433px;
  left: 86px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 433px;
    left: 263px;
  }
  @media (min-width: 1024px) {
    top: 186px;
    left: -40px;
  }
  @media (min-width: 1176px) {
    top: 186px;
    left: -40px;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 24px;
  left: 157px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 24px;
    left: 354px;
  }
  @media (min-width: 1024px) {
    top: -223px;
    left: 655px;
  }
  @media (min-width: 1176px) {
    left: 986px;
  }
`;

export const AlingArrowBaseDiv = styled.div`
  width: 253px;
  height: 160px;
  /* background: gray; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 292px;
  left: 14px;
  @media (min-width: 769px) {
    width: 100%;
    top: 292px;
    left: 0px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 370px;
    top: 0px;
    left: 0px;
    align-items: center;
  }
  @media (min-width: 1146px) {
    width: 100%;
    top: 0px;
    left: 0px;
  }
`;

export const AlingCountBaseDiv = styled.div`
  width: 130px;
  height: 39px;
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
