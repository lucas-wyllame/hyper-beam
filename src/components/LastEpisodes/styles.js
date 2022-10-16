import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 1000px;
  // background: pink;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  padding: 0 88px;
  @media (max-width: 480px) {
    padding: 0;
    align-items: center;
    height: 1280px;
  }
`;

export const ListPodcasts = styled.div`
  width: 100%;
  height: 630px;
  background: blue;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 480px) {
    height: 1130px;
  }
`;

export const Background = styled.div`
  width: 95%;
  height: 470px;
  border-radius: 44px 44px 0px 0px;
  position: relative;
  top: 60px;
  background: purple;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 480px) {
    height: 1000px;
    justify-content: flex-start;
  }
`;

export const CardAndText = styled.div`
  width: 100%;
  height: 7630px0%;
  // background: orange;
  display: flex;
  justify-content: flex-start;
  border-radius: 44px 44px 0px 0px;
  @media (max-width: 480px) {
    flex-direction: column;
    height: 65%;
  }
`;

export const TextsDivEp = styled.div`
  width: auto;
  height: auto;
  margin-left: 62px;
  @media (max-width: 480px) {
    margin: 0 0 0 20px;
    width: 329px;
    height: 304px;
  }
`;

export const TitleInside = styled.div`
  width: 43%;
  font-size: 38px;
  margin: ${(props) => props.margin};
  color: #fff;
  font: Poppins;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    font-size: 28px;
    width: 70%;
    margin: ${(props) => props.marginMobile};
  }
  span {
    color: #ffe747;
    @media (max-width: 480px) {
      font-size: 29px;
    }
  }
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: gray;
    opacity: 1;
    margin-top: 5px;
    @media (max-width: 480px) {
      width: 8px;
      height: 8px;
    }
  }
`;

export const IconAndButtons = styled.div`
  width: ${(props) => props.width};
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.margin};
  background: yellow;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    height: ${(props) => props.heightMobile};
    margin-left: 0;
    margin-bottom: 0;
    padding-left: 20px;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
  }
`;

export const ButtonsEp = styled.div`
  width: ${(props) => props.widthButton};
  height: 49px;
  background: rgba(17, 18, 45, 0.6);
  border-radius: 44px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: ${(props) => props.widthMobile};
    font-size: 15px;
  }
`;

export const ThinBarsGroup = styled.div`
  width: 100%;
  height: 20px;
  background: #11122d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  @media (max-width: 480px) {
    padding-right: 9px;
    padding-left: 9px;
  }
`;

export const ThinBars = styled.button`
  width: 330px;
  height: 10px;
  background: #fff;
  border: none;
  border-radius: 44px;
  opacity: 0.12;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 58px;
    height: 20px;
  }
`;

export const ButtonSeeAll = styled.button`
  width: 160px;
  height: 49px;
  background: #ffe747;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  font-size: 20px;
  margin-top: 19px;
  cursor: pointer;
  position: relative;
  left: 45%;
  :hover {
    width: 161px;
    height: 51px;
    text-shadow: 0px 3px 6px #ff00c47a;
  }
  @media (max-width: 480px) {
    width: 184px;
    height: 49px;
    position: relative;
    left: 95px;
  }
`;

export const RightArrow = styled.img`
  display: none;
`;

export const LeftArrow = styled.img`
  display: none;
`;
export const Dots = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  background: #11122d;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    position: relative;
    height: 25px;
    bottom: -10px;
  }
`;

export const LittleDots = styled.div`
  width: auto;
  height: 10px;
  background: #2e2f47;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  border-radius: 50px;
  :hover {
    background: purple;
  }
  @media (max-width: 480px) {
    height: 25px;
  }
`;

export const HoveringIcon = styled.label`
  background: white;
  width: 320px;
  height: 40px;
  position: absolute;
  color: #000;
  z-index: 9;
  top: 80px;
  left: -37px;
  font-size: 20px;
`;
