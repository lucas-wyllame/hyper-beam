import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background-image: url("/img/degrade logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (min-width: 645px) {
    min-height: 635px;
  }
  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`;

export const PodcastsList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  margin-bottom: 70px;
  flex-direction: column;
  padding: 0 37px;
  @media (min-width: 1024px) {
    gap: 30px;
    margin-bottom: 0;
    align-items: center;
    padding: 0 70px;
  }
  @media (min-width: 1366px) {
    padding: 0 196px;
  }
`;

export const CarouselStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  background: #0a0b26;
  display: flex !important;
  flex-direction: column;
  margin-bottom: 37px;
  gap: 15px;
  padding: 25px 20px 40px;
  border-radius: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 25px 20px 40px;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    padding: 40px 15px 40px 11px;
    margin-bottom: 0;
  }
`;

export const HyperText = styled.label`
  width: 86%;
  font-size: 1.7rem;
  color: #9a8dac;
  padding-left: 60px;
`;

export const LeftArrow = styled.div`
  height: 39px;
  width: 39px;
  background-image: url("./icon/blueArrowLeft.svg");
  cursor: pointer;
`;

export const RightArrow = styled.div`
  height: 39px;
  width: 39px;
  background-image: url("./icon/purpleArrowRight.svg");
  cursor: pointer;
`;

export const AlignArrowBaseDiv = styled.div`
  width: 225px;
  height: 94px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 3641px;
  left: 0px;
  @media (min-width: 645px) {
    width: 100%;
    top: 878px;
  }
  @media (min-width: 947px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    top: 896px;
  }
  @media (min-width: 1146px) {
    width: 100%;
  }
`;

export const AlignCountBaseDiv = styled.div`
  width: 200px;
  height: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountLabel = styled.label`
  font-size: 1.8rem;
  text-align: ${(props) => props.textAlignDesc};
  color: #9a8dac;
  font-weight: 500;
`;

export const PageButtons = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageButton = styled.div`
  width: 7vw;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  label {
    color: #fff;
    font-size: 15px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    width: 30vw;
  }
`;

export const GropingTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 75%;
  }
  @media (min-width: 1336px) {
    width: 75%;
  }
`;
