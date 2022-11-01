import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 476px;
  margin: 91px 0;
  display: flex;
  background: blue;
  @media (max-width: 480px) {
    height: 800px;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const LeftImage = styled.div`
  width: 50%;
  height: 476px;
  background: red;
  border-radius: 0 50px 50px 0;
  @media (max-width: 480px) {
    width: 100%;
    height: 253px;
    border-radius: 0;
  }
`;

export const TextDiv = styled.div`
  width: 35%;
  height: 100%;
  // background: green;
  display: flex;
  flex-direction: column;
  padding-left: 48px;
  @media (max-width: 480px) {
    height: 58%;
    padding-left: 18px;
    width: 100%;
  }
`;
