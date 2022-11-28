import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 74px 0 30px 0;
  /* background: blue; */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 100%;
    height: 476px;
    flex-direction: row;
    margin: 91px 0 90px 0;
  }
`;

export const LeftImage = styled.div`
  width: 100%;
  height: 253px;
  background: #6c7492;
  border-radius: 0;
  max-width: 800px;
  margin: 0 0 30px 0;
  @media (min-width: 1024px) {
    max-width: 800px;
    height: 100%;
    border-radius: 0 50px 50px 0;
    margin: 0 48px 0 0;
  }
`;

export const TextDiv = styled.div`
  width: 50%;
  height: auto;
  /* background: green; */
  padding: 0 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    max-width: 850px;
    padding-left: 5px;
  }
`;
