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
    height: 691px;
    padding: 0 88px;
  }
  @media (min-width: 1440px) {
    height: auto;
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
  position: relative;
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
  background: #a57bca;
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
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    height: 49px;
    font-size: 2rem;
  }
`;

export const ButtonSeeAll = styled.button`
  width: 184px;
  height: 49px;
  background: #ffe747;
  border-radius: 44px;
  border: none;
  color: #a127ff;
  font-size: 20px;
  margin-top: 52px;
  cursor: pointer;
  align-self: center;
  :hover {
    width: 161px;
    height: 51px;
    text-shadow: 0px 3px 6px #ff00c47a;
  }
  @media (min-width: 1024px) {
    width: 160px;
    height: 50px;
  }
`;

export const RightArrow = styled.img`
  display: none;
`;

export const LeftArrow = styled.img`
  display: none;
`;
export const Dots = styled.div`
  height: 20px;
  bottom: -10px;
  display: flex;
  background: #11122d;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  margin: -18px 0px;
  @media (min-width: 1024px) {
    margin: 0;
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
  width: 334px;
  height: 49px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 688px;
  left: 0px;
  z-index: 9;
  color: #000;
  font-size: 20px;
  border-radius: 44px;
  padding-left: 25px;
  @media (min-width: 388px) {
    font-size: 20px;
  }
  @media (min-width: 421px) {
    top: 688px;
  }
  @media (min-width: 428px) {
    top: 661px;
  }
  @media (min-width: 462px) {
    top: 634px;
  }
  @media (min-width: 545px) {
    top: 607px;
  }
  @media (min-width: 687px) {
    top: 580px;
  }
  @media (min-width: 768px) {
    top: 536px;
  }
  @media (min-width: 1024px) {
    top: 420px;
    width: 404px;
    height: 49px;
  }
  @media (min-width: 1440px) {
    top: 495px;
    width: 404px;
    height: 49px;
  }
`;
