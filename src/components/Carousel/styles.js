import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 3500px;
  /* background: green; */
  background-image: url("/img/degrade logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 645px) {
    height: 1100px;
  }
`;

export const PodcastsList = styled.div`
  width: 225px;
  height: 3240px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 1024px) {
    width: 1062px;
    height: 844px;
  }
  @media (max-width: 1145px) {
    width: 816px;
    height: 889px;
  }
  @media (max-width: 946px) {
    width: 540px;
    height: 888px;
  }
  @media (max-width: 644px) {
    width: 225px;
    height: 3380px;
  }
`;

export const CarouselStyled = styled.div`
  width: 100%;
  height: 270px;
  /* background: blue; */
  display: flex !important;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    height: auto;
  }
`;

export const HyperText = styled.label`
  width: 86%;
  font-size: 1.7rem;
  color: #9a8dac;
  padding-left: 60px;
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 3308.5px;
  left: 0px;
  z-index: 2;
  @media (min-width: 645px) {
    top: 878.6px;
    left: 157px;
  }
  @media (min-width: 947px) {
    top: 879px;
    left: 295px;
  }
  @media (min-width: 1024px) {
    top: 841.8px;
    left: 296px;
  }
  @media (min-width: 1146px) {
    top: 841px;
    left: 419px;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 30px;
  left: 186px;
  z-index: 2;
  @media (min-width: 645px) {
    top: 30px;
    left: 343px;
  }
  @media (min-width: 947px) {
    top: 30px;
    left: 481px;
  }
  @media (min-width: 1024px) {
    top: 49px;
    left: 482px;
  }
  @media (min-width: 1146px) {
    top: 48.7px;
    left: 605px;
  }
`;

export const CountLabel = styled.label`
  font-size: 1.8rem;
  text-align: ${(props) => props.textAlignDesc};
  color: #9a8dac;
  font-weight: 500;
`;

export const AlingArrowBaseDiv = styled.div`
  width: 225px;
  height: 94px;
  /* background: gray; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 3234px;
  left: 0px;
  @media (min-width: 645px) {
    width: 540px;
    top: 804px;
    left: 0px;
  }
  @media (min-width: 947px) {
    width: 816px;
    top: 804px;
    left: 0px;
  }
  @media (min-width: 1024px) {
    top: 766px;
    left: 0px;
  }
  @media (min-width: 1146px) {
    width: 1062px;
    top: 766px;
    left: 0px;
  }
`;

export const AlingCountBaseDiv = styled.div`
  width: 225px;
  height: 39px;
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
