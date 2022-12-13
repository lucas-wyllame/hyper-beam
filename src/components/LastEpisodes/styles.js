import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: pink; */
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 643px;
    padding: 0 88px;
  }
  @media (min-width: 1366px) {
    height: 850px;
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
    height: 548px;
  }
  @media (min-width: 1366px) {
    height: 534px;
  }
`;

export const HoveringIcon = styled.label`
  width: 334px;
  height: auto;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 670px;
  left: 0px;
  z-index: 9;
  color: #000;
  font-size: 20px;
  border-radius: 44px;
  padding: 0 25px;
  @media (min-width: 428px) {
    top: 643px;
  }
  @media (min-width: 462px) {
    top: 616px;
  }
  @media (min-width: 545px) {
    top: 589px;
  }
  @media (min-width: 687px) {
    top: 562px;
  }
  @media (min-width: 768px) {
    top: 523px;
  }
  @media (min-width: 1024px) {
    width: 404px;
    height: 49px;
    top: 420px;
    padding: 0;
  }
  @media (min-width: 1366px) {
    height: 49px;
    top: 495px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: auto;
  border-radius: 44px 44px 0px 0px;
  position: relative;
  top: 60px;
  background-color: #a57bca;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  z-index: 0;
  @media (min-width: 1024px) {
    height: 420px;
  }
  @media (min-width: 1366px) {
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
  height: auto;
  gap: ${(props) => props.gap};
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
    justify-content: start;
  }
  @media (min-width: 1330px) {
    width: auto;
    height: ${(props) => props.heightLaptopLarge};
    flex-direction: ${(props) => props.flexDLaptopLarge};
    justify-content: start;
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
  padding: 0 25px;
  margin: 0 -3px;
  max-width: max-content;
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    height: ${(props) => props.heightLaptop};
    font-size: ${(props) => props.fontSizeLaptop};
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
  cursor: pointer;
  margin-top: 50px;
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

export const LeftArrow = styled.img`
  display: none;
`;

export const RightArrow = styled.img`
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
    background: #a127ff;
  }
  @media (min-width: 1024px) {
    height: 10px;
  }
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 520px;
  background-color: black;
  opacity: 0.1;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
`;