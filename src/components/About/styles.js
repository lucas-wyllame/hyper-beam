import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 476px;
  margin: 90px 0;
  display: flex;
  background: blue;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1130px) {
    height: 350px;
  }
  @media (max-width: 870px) {
    height: 750px;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    height: 600px;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const LeftImage = styled.div`
  width: 45%;
  max-width: 800px;
  height: 100%;
  background: red;
  border-radius: 0 50px 50px 0;
  @media (max-width: 870px) {
    width: 90%;
    border-radius: 50px;
    height: 45%;
  }
  @media (max-width: 650px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 253px;
    border-radius: 0;
  }
`;

export const TextDiv = styled.div`
  width: 50%;
  max-width: 850px;
  height: auto;
  background: green;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  @media (max-width: 870px) {
    width: 90%;
    height: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    height: 40%;
    padding-left: 18px;
    width: 100%;
  }
`;
