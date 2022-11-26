import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: pink; */
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 626px;
    padding: 0 88px;
  }
  @media (min-width: 1440px) {
    height: 800px;
  }
`;

export const ListPodcasts = styled.div`
  width: 100%;
  height: auto;
  /* background: blue; */
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    height: 630px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: auto;
  border-radius: 44px 44px 0px 0px;
  position: relative;
  top: 60px;
  background: purple;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    height: 420px;
  }
  @media (min-width: 1440px) {
    height: 520px;
  }
`;

export const Block = styled.div`
  width: 90%;
  height: auto;
  /* background: green; */
  border-radius: 44px 44px 0px 0px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: 520px;
  }
`;

export const CardAndText = styled.div`
  width: 100%;
  height: auto;
  /* background: orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 44px 44px 0px 0px;
  @media (min-width: 1024px) {
    /* height: 350px; */
    flex-direction: row;
  }
`;

export const TextsDivEp = styled.div`
  width: 100%;
  height: auto;
  /* background: red; */
  @media (min-width: 1024px) {
    width: 60%;
    margin-left: 62px;
  }
`;

export const IconAndButtons = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  /* background: yellow; */
  margin-left: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0px;
  margin: ${(props) => props.margin};
  /* justify-content: ${(props) => props.justifyContent}; */
  align-items: ${(props) => props.alignItems};
  @media (min-width: 1024px) {
    align-items: center;
    width: ${(props) => props.widthLaptop};
    height: ${(props) => props.heightLaptop};
    flex-direction: ${(props) => props.flexDLaptop};
  }
  @media (min-width: 1330px) {
    height: ${(props) => props.heightLaptopLarge};
    flex-direction: ${(props) => props.flexDLaptopLarge};
  }
`;

export const ButtonsEp = styled.div`
  width: ${(props) => props.width};
  font-size: 1.5rem;
  height: 36px;
  background: rgba(17, 18, 45, 0.6);
  border-radius: 44px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    height: 49px;
    font-size: 2rem;
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
  margin-top: 52px;
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
  position: relative;
  height: 20px;
  bottom: -10px;
  display: flex;
  background: #11122d;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  @media (min-width: 1024px) {
    width: 100%;
    height: 10px;
  }
`;

export const LittleDots = styled.div`
  width: auto;
  height: 20px;
  background: #2e2f47;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  border-radius: 50px;
  :hover {
    background: purple;
  }
  @media (min-width: 1024px) {
    height: 10px;
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
