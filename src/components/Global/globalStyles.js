import styled from "styled-components";

export const Title = styled.p`
  font-size: 45px;
  color: #fff;
  margin: 0;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 27px;
    width: ${(props) => props.widthMobile};
    text-align: ${(props) => props.textAlignMobile};
    margin: ${(props) => props.margin};
  }
`;

export const Desc = styled.h1`
  font-size: 28px;
  color: #9a8dac;
  max-width: ${(props) => props.maxWidth};
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 16px;
    width: ${(props) => props.widthDescMobile};
    max-width: ${(props) => props.maxWidthMobile};
    text-align: ${(props) => props.textAlignDescMobile};
    margin: ${(props) => props.margin};
  }
`;

export const MoreInfs = styled.h2`
  width: ${(props) => props.width};
  height: 143px;
  font-size: 25px;
  color: #ffffff;
  font-weight: 500;
  @media (max-width: 480px) {
    font-size: ${(props) =>props.fontsize};
    height: 125px;
    width: 324px;
  }
`;

