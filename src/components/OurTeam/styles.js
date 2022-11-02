import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 716px;
  background: blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (max-width: 860px) {
    height: 1200px;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    height: 1100px;
  }
  @media (max-width: 480px) {
    height: 1100px;
  }
`;

export const GlobalPeoples = styled.div`
  width: 50%;
  height: 370px;
  background: red;
  @media (max-width: 1604px) {
    width: 55%;
  }
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 860px) {
    width: 35%;
    height: 1000px;
  }
  @media (max-width: 700px) {
    width: 35%;
    height: 900px;
  }
  @media (max-width: 570px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 60%;
    height: 1100px;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const GroupText = styled.div`
  width: 100%;
  height: 140px;
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Peoples = styled.div`
  width: 96%;
  height: 370px;
  background: aqua;
  display: flex;
  flex-direction: column;
  @media (max-width: 1604px) {
    height: 320px;
  }
  @media (max-width: 1280px) {
    height: 300px;
  }
  @media (max-width: 1024px) {
    height: 280px;
  }
  @media (max-width: 860px) {
    height: 330px;
  }
  @media (max-width: 700px) {
    height: 290px;
  }
  @media (max-width: 570px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    width: 90%;
    height: 300px;
  }
`;

export const CardsOurTeam = styled.div`
  width: 95%;
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
    font-size: 23px;
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
  /* @media (max-width: 480px) {
    display: none;
  } */
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: absolute;
  left: 100%;
  top: 50%;
  z-index: 2;
  /* @media (max-width: 480px) {
    position: relative;
    top: 10vw;
    right: -34vw;
  } */
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;
  /* @media (max-width: 480px) {
    position: relative;
    top: 408.6vh;
    left: 10vw;
  } */
`;
