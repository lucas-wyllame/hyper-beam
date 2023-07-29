import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { theme } from "@styles/globalStyles";

export const Top = styled.div`
  width: 100%;
  height: 66px;
  background: #11122d 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 16px #0000004f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  top: -1px;
  justify-content: flex-end;
  padding: 0 13px 0 30px;
  @media (min-width: 768px) {
    padding: 0 39px 0 0;
    top: 0;
  }
  @media (min-width: 1024px) {
    padding: 0 145px 0 0;
  }
`;

export const CenterLogoDiv = styled.div`
  width: 375px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: calc(50% + 26.5px);
    padding-left: 19.5px;
  }
  @media (min-width: 1024px) {
    width: calc(50% + 26.5px);
    padding-left: 72.5px;
  }
`;

export const LogoTop = styled.div`
  width: 53px;
  height: 53px;
  background-image: ${(props) => props.headerLogo};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
`;

export const ButtonSeeAllTopBar = styled.div`
  width: 169px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: none;
  border-radius: 44px;
  border: 1px solid #ffe747;
  color: #ffe747;
  cursor: pointer;
`;

export const LogoButtonSeeAllTopBar = styled.div`
  width: 18px;
  height: 18px;
  box-shadow: 0px 2px 2px #0000000f;
`;

export const TextButtonSeeAllTopBar = styled.div`
  font-size: 20px;
  color: #ffe747;
  text-shadow: 0px 1px 1px #00000029;
  text-align: center;
`;

export const SearchLogoBox = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 23px;
  @media (min-width: 768px) {
    margin-right: 50px;
  }
  @media (min-width: 1024px) {
    margin-right: 155px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 66px;
  background: #1b1b36;
  border: 0px;
  font-size: 2rem;
  padding-left: 18px;
  outline: none;
  color: #fff;
  position: relative;
  ::placeholder {
    color: #9a8dac;
  }
  @media (min-width: 768px) {
    padding-left: 50px;
  }
  @media (min-width: 1024px) {
    padding-left: 90px;
  }
  @media (min-width: 1366px) {
    padding-left: 140px;
  }
`;

export const AfterSearch = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #423e5a;
  position: relative;
  @media (min-width: 768px) {
    height: 142px;
    flex-direction: row;
    justify-content: normal;
    padding: 0 0 0 50px;
  }
  @media (min-width: 1024px) {
    padding: 0 0 0 90px;
  }
  @media (min-width: 1366px) {
    padding: 0 0 0 140px;
  }
`;

export const InfoSearch = styled.div`
  width: 100%;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: auto;
    height: 104px;
    align-items: normal;
    margin-left: 25px;
  }
  @media (min-width: 1024px) {
  }
`;

export const IconAndTagBox = styled.div`
  width: 231px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 454px;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
  }
`;

export const IconAndTagRow = styled.div`
  width: 212px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: auto;
  }
  @media (min-width: 1024px) {
  }
`;

export const Circle = styled.div`
  width: ${(props) => props.widthCircle};
  height: ${(props) => props.heightCircle};
  background: #9e9e9e;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: ${(props) => props.widthCircleTablet};
    height: ${(props) => props.heightCircleTablet};
  }
`;

export function TitleInsideComponentGray(props) {
  const TitleInsideGray = styled.div`
    width: ${(props) => props.width};
    font-size: 1.7rem;
    color: #9a8dac;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${(props) => props.cursor};
    @media (min-width: 768px) {
      width: ${(props) => props.widthTablet};
      font-size: ${props.fontSizeTablet};
    }
    @media (min-width: 1024px) {
      width: 180px;
      font-size: 2rem;
    }
    span {
      font-size: 2rem;
      color: ${(props) => props.colorSpan};
      @media (min-width: 768px) {
        font-size: ${props.fontSizeTablet};
      }
      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }
  `;

  return (
    <TitleInsideGray
      width={props.width}
      widthTablet={props.widthTablet}
      colorSpan={props.colorSpan}
      cursor={props.cursor}
      fontSizeTablet={props.fontSizeTablet}
    >
      Hyper Beam
      <Circle
        widthCircle={props.widthCircle}
        heightCircle={props.heightCircle}
        widthCircleTablet={props.widthCircleTablet}
        heightCircleTablet={props.heightCircleTablet}
      />
      <span>
        {props.number < 10 ? 0 : ""}
        {props.number}
      </span>
    </TitleInsideGray>
  );
}
