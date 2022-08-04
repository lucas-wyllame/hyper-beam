import styled from "styled-components";

export const Title = styled.p`
  font-size: 45px;
  color: #fff;
  margin: 0;
  font-weight: bold;
  @media (max-width:480px)  {
    font-size: 27px;
    width: 70%;
    text-align: center;
  }
`;

export const Desc = styled.h1`
  font-size: 28px;
  color: #9a8dac;
  max-width: 50%;
  @media (max-width:480px)  {
    font-size: 16px;
    max-width: 180px;
    text-align: center;
  }
`;