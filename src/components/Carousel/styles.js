import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  background: green;
  background-image: url("/img/degrade logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (min-width: 645px) {
    min-height: 500px;
    height: auto;
  }
`;

export const PodcastsList = styled.div`
  width: 225px;
  height: auto;
  background: red;
  display: flex;
  position: relative;
  margin-bottom: 70px;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    width: 1080px;
    /* height: 950px; */
    column-gap: 60px;
    margin-bottom: 0;
    align-items: center;
  }
  /* @media (max-width: 1145px) {
    width: 816px;
    height: 950px;
  }
  @media (max-width: 946px) {
    width: 540px;
    height: 930px;
  }
  @media (max-width: 644px) {
    width: 225px;
    height: auto;
  } */
`;

export const CarouselStyled = styled.div`
  width: 225px;
  height: 270px;
  background: blue;
  display: flex !important;
  align-items: center;
  flex-direction: column;
  margin-bottom: 37px;
  /* margin-right: 45px; */
  @media (min-width: 1024px) {
    height: auto;
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
  background-image: url("./icon/Grupo 21.svg");
  cursor: pointer;
`;

export const RightArrow = styled.div`
  height: 39px;
  width: 39px;
  background-image: url("./icon/Grupo 22.svg");
  cursor: pointer;
`;

export const AlignArrowBaseDiv = styled.div`
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

export const AlignCountBaseDiv = styled.div`
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

export const PageButtons = styled.div`
  width: 100%;
  height: 5vh;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
