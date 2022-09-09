import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 716px;
  background: #1b1b36;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  @media (max-width: 480px) {
    height: 1350px;
    justify-content: flex-start;
  }
`;

export const GlobalPeoples = styled.div`
  width: 60%;
  height: 343px;
  display: flex;
  justify-content: space-around;
  margin-top: 69px;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 85%;
    height: 1200px;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Group = styled.div`
  width: 90%;
  height: auto;
  @media (max-width: 480px) {
    width: 80%;
    height: 1100px;
  }
`;

export const Peoples = styled.div`
  height: 370px;
  display: flex;
`;

export const CardsOurTeam = styled.div`
  width: 285px;
  height: 285px;
  background: #9697c7;
  border-radius: 20px;
  margin-bottom: 20px;
  :hover {
    width: 293px;
    height: 293px;
    background: yellow;
  }
  @media (max-width: 480px) {
    width: 253px;
    height: 253px;
    :hover {
      width: 253px;
      height: 253px;
      background: #9697c7;
    }
  }
`;

export const NameCasters = styled.label`
  font-size: 23px;
  color: #fff;
  span {
    color: #ffe747;
  }
`;

export const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
`;

export const Buttons = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: absolute;
  right: -0.4vw;
  top: 50%;
  z-index: 2;
  @media (max-width: 480px) {
    top: 100%;
    right: 20vw;
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
    top: 100%;
    left: 20vw;
  }
`;
