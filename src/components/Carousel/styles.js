import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 3500px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 375px) {
    height: 1100px;
  }
`;

export const PodcastsList = styled.div`
  width: 225px;
  height: 3240px;
  background: red;
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
    height: 936px;
  }
`;

export const CarousselStyled = styled.div`
  width: 100%;
  height: 270px;
  background: blue;
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
  top: 391vh;
  left: 50px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 48.5vh;
    left: 257px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: -6vw;
  }
  @media (min-width: 1176px) {
    position: absolute;
    left: -52px;
    top: 50%;
  }
`;

export const RightArrow = styled.img`
  height: 39px;
  width: 39px;
  position: relative;
  top: 59px;
  left: 160px;
  z-index: 2;
  @media (min-width: 769px) {
    top: 25px;
    left: 350px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    left: 680px;
    top: 50%;
  }
  @media (min-width: 1176px) {
    position: absolute;
    left: 1037px;
    top: 50%;
  }
`;
