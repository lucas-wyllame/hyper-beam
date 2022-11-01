import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 1100px;
  background: #11122d 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 3500px;
  }
`;
export const PodcastsList = styled.div`
  width: 1062px;
  height: 936px;
  background: red;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 225px;
    height: 3240px;
  }
`;

export const CarousselStyled = styled.div`
  width: 100%;
  height: 312px;
  background: blue;
  display: flex;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 480px) {
    height: 270px;
  }
`;

export const HyperText = styled.label`
  width: 60%;
  font-size: 17px;
  color: #9a8dac;
  padding-left: 60px;
`;