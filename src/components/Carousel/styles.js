import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 3890px;
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
    height: 950px;
  }
  @media (max-width: 1145px) {
    width: 816px;
    height: 950px;
  }
  @media (max-width: 946px) {
    width: 540px;
    height: 930px;
  }
  @media (max-width: 644px) {
    width: 225px;
    height: 3686px;
  }
`;

export const CarouselStyled = styled.div`
  width: 100%;
  height: 270px;
  /* background: blue; */
  display: flex !important;
  align-items: center;
  flex-direction: column;
  margin-bottom: 37px;
  @media (min-width: 1024px) {
    height: auto;
    margin-bottom: 65px;
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
  top: 3715.5px;
  left: 0px;
  z-index: 2;
  @media (min-width: 645px) {
    top: 952.6px;
    left: 158px;
  }
  @media (min-width: 947px) {
    left: 295px;
  }
  @media (min-width: 1024px) {
    top: 970.8px;
    left: 296px;
  }
  @media (min-width: 1146px) {
    left: 419px;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: -7px;
  left: 186px;
  z-index: 2;
  @media (min-width: 645px) {
    left: 344px;
  }
  @media (min-width: 947px) {
    left: 481px;
  }
  @media (min-width: 1024px) {
    top: -16px;
    left: 482px;
  }
  @media (min-width: 1146px) {
    left: 605px;
  }
`;

export const AlingArrowBaseDiv = styled.div`
  width: 225px;
  height: 94px;
  /* background: gray; */
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

export const AlingCountBaseDiv = styled.div`
  width: 225px;
  height: 39px;
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountLabel = styled.label`
  font-size: 1.8rem;
  text-align: ${(props) => props.textAlignDesc};
  color: #9a8dac;
  font-weight: 500;
`;


