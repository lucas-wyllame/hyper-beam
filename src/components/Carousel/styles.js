import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 3500px;
  /* background: green; */
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
  @media (min-width: 1024px) {
    width: 1062px;
    height: 936px;
  }
  @media (max-width: 1145px) {
    width: 816px;
    height: 936px;
  }
  @media (max-width: 946px) {
    width: 540px;
    height: 936px;
  }
  @media (max-width: 644px) {
    width: 225px;
    height: 3380px;
  }
`;

export const CarousselStyled = styled.div`
  width: 100%;
  height: 270px;
  /* background: blue; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media (min-width: 1024px) {
    height: 312px;
  }
`;

export const HyperText = styled.label`
  width: 60%;
  font-size: 17px;
  color: #9a8dac;
  padding-left: 60px;
`;

export const LeftArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 3298px;
  left: 0;
  z-index: 2;
  @media (min-width: 645px) {
    top: 873px;
    left: 160px;
  }
  @media (min-width: 947px) {
    top: 882.9px;
    left: 328px;
  }
  @media (min-width: 1024px) {
    top: 953.9px;
    left: 332px;
  }
  @media (min-width: 1146px) {
    top: 953px;
    left: 434px;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 19px;
  left: 186px;
  z-index: 2;
  @media (min-width: 645px) {
    top: 25px;
    left: 300px;
  }
  @media (min-width: 947px) {
    top: 34px;
    left: 402px;
  }
  @media (min-width: 1024px) {
    top: -22px;
    left: 408px;
  }
  @media (min-width: 1146px) {
    top: -22px;
    left: 552px;
  }
`;
