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
    height: 600px;
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
    width: 100%;
    height: auto;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const Group = styled.div`
  width: 90%;
  height: auto;
  @media (max-width: 480px) {
    width: 80%;
    height: 500px;
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

export const TeamButton = styled.button`
  width: 39px;
  height: 39px;
  background: #a127ff;
  border-radius: 50%;
`;

export const ButtonsMobile = styled.div`
  @media (max-width: 1980px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 108px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const TeamButtonMobile = styled.div`
    width: 39px;
    height: 39px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #a127ff;
    border-radius: 50px;
  }
`;

export const LeftArrow = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  top: 50%;
  left: -3vw;
  z-index: 2;
`;

export const RightArrow = styled.img`
  height: 30px;
  width: auto;
  position: absolute;
  right: -3vw;
  top: 50%;
  z-index: 2;
`;
