import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .slick-dots li {
    width: 100%;
    height: 10px;
}
`;

export const Title = styled.p`
  font-size: 2.7rem;
  /* text-align: ${(props) => props.textAlignMobile}; */
  margin: ${(props) => props.margin};
  color: #fff;
  font-weight: bold;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

export const Desc = styled.h1`
  font-size: 1.6rem;
  /* text-align: ${(props) => props.textAlignDescMobile}; */
  margin: ${(props) => props.margin};
  color: #9a8dac;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

export const MoreInfs = styled.h2`
  font-size: ${(props) => props.fontSizeMobile};
  padding-top: ${(props) => props.paddingTop};
  color: #ffffff;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
