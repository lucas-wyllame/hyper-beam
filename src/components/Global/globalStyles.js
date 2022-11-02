import styled from "styled-components";

export const Title = styled.p`
  font-size: 4.5rem;
  color: #fff;
  margin: 0;
  font-weight: bold;
  @media (max-width: 1130px) {
    font-size: 3.5rem;
  }
  @media (max-width: 870px) {
    font-size: 4rem;
  }
  @media (max-width: 650px) {
  }

  @media (max-width: 480px) {
    font-size: 27px;
    /* width: ${(props) => props.widthMobile}; */
    text-align: ${(props) => props.textAlignMobile};
    margin: ${(props) => props.margin};
  }
`;

export const Desc = styled.h1`
  font-size: 2.8rem;
  color: #9a8dac;
  max-width: ${(props) => props.maxWidth};
  font-weight: 500;
  @media (max-width: 1130px) {
    font-size: 2.1rem;
  }
  @media (max-width: 870px) {
    font-size: 2.5rem;
  }
  @media (max-width: 650px) {
  }

  /* @media (max-width: 1169px) {
    width: 80%;
  } */
  @media (max-width: 480px) {
    font-size: 16px;
    /* width: ${(props) => props.widthDescMobile}; */
    /* max-width: ${(props) => props.maxWidthMobile}; */
    text-align: ${(props) => props.textAlignDescMobile};
    margin: ${(props) => props.margin};
  }
`;

export const MoreInfs = styled.h2`
  /* width: ${(props) => props.width}; */
  /* height: 143px; */
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: 500;
  @media (max-width: 1130px) {
    font-size: 1.9rem;
  }
  @media (max-width: 870px) {
    font-size: 2rem;
  }
  @media (max-width: 650px) {
  }

  /* @media (max-width: 1169px) {
    font-size: 22px;
  } */
  @media (max-width: 480px) {
    /* width: ${(props) => props.widthMobile}; */
    /* height: ${(props) => props.heightMobile}; */
    font-size: ${(props) => props.fontSizeMobile};
    padding-top: ${(props) => props.paddingTop};
  }
`;
