import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 3500px;
  background: green;
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
  background: red;
  display: flex;
  flex-direction: column;
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

export const Teste2 = styled.div`
  width: 100%;
  height: 270px;
  background: blue;
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
  top: 3298px;
  left: 0;
  z-index: 2;
  @media (min-width: 645px) {
    top: 868.3px;
    left: 201px;
  }
  @media (min-width: 947px) {
    top: 869px;
    left: 294px;
  }
  @media (min-width: 1024px) {
    top: 824.3px;
    left: 299px;
  }
  @media (min-width: 1146px) {
    top: 821px;
    left: 429px;
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
    top: 19px;
    left: 300px;
  }
  @media (min-width: 947px) {
    top: 20px;
    left: 482px;
  }
  @media (min-width: 1024px) {
    top: 32px;
    left: 485px;
  }
  @media (min-width: 1146px) {
    top: 28.7px;
    left: 588px;
  }
`;

export const CountLabel = styled.label`
  width: 30px;
  font-size: 1.8rem;
  text-align: ${(props) => props.textAlignDesc};
  position: relative;
  bottom: 70px;
  left: 100px;
  color: #9a8dac;
  font-weight: 500;
  @media (min-width: 645px) {
    bottom: 34px;
    left: 257px;
  }
  @media (min-width: 947px) {
    bottom: 33px;
    left: 398px;
  }
  @media (min-width: 1024px) {
    bottom: 50px;
    left: 397px;
  }
  @media (min-width: 1146px) {
    bottom: 22px;
    left: 520px;
  }
`;
