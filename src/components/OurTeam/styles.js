import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 1350px;
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  @media (min-width: 1024px) {
    height: 716px;
    justify-content: space-around;
  }
  /* @media (max-width: 860px) {
    height: 1200px;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    height: 1100px;
  } */
`;

export const GroupText = styled.div`
  width: 100%;
  height: auto;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
  }
`;

export const GlobalPeoples = styled.div`
  width: 68%;
  max-width: 253px;
  height: 1100px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  @media (min-width: 1024px) {
    width: 986px;
    max-width: 986px;
    height: 370px;
  }
  @media (max-width: 1175px) {
    width: 100%;
    max-width: 655px;
    height: 370px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 253px;
    height: auto;
  }
`;

export const Peoples = styled.div`
  width: 100%;
  height: 350px;
  background: aqua;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 286px;
    height: 370px;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const CardsOurTeam = styled.div`
  width: 253px;
  height: 253px;
  max-width: 253px;
  max-height: 253px;
  background: #9697c7;
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
      background: yellow;
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
      background: yellow;
    }
  }
`;

export const NameCasters = styled.label`
  font-size: 23px;
  color: #fff;
  span {
    font-size: 23px;
    color: #ffe747;
  }
  @media (min-width: 1024px) {
  }
`;

export const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
  @media (min-width: 1024px) {
  }
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;
  @media (max-width: 480px) {
    position: relative;
    top: 139vh;
    left: 13vw;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: absolute;
  left: 100%;
  top: 50%;
  z-index: 2;
  @media (max-width: 480px) {
    position: relative;
    top: 10.6vw;
    left: 39vw;
  }
`;
