import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const GlobalStyles = createGlobalStyle`
  .slick-dots li {
    width: 100%;
    height: 10px;
}
`;

export const Title = styled.p`
  font-size: 2.7rem;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  color: #fff;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.3rem;
  }
  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`;

export const Desc = styled.h1`
  font-size: 1.6rem;
  text-align: ${(props) => props.textAlignDesc};
  margin: ${(props) => props.margin};
  color: #9a8dac;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 2.8rem;
  }
`;

export const MoreInfs = styled.h2`
  font-size: ${(props) => props.fontSize};
  padding-top: ${(props) => props.paddingTop};
  color: #ffffff;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    font-size: ${(props) => props.fontSizeLaptop};
  }
  @media (min-width: 1440px) {
    font-size: 2.5rem;
    /* font-size: ${(props) => props.fontSizeLaptop}; */
  }
`;

export const TitleInside = styled.div`
  max-width: 220px;
  font-size: 2.5rem;
  margin: 12px 0;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: blue; */
  span {
    color: #ffe747;
    font-size: 2.5rem;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    font-size: 2.7rem;
    span {
      font-size: 2.7rem;
    }
  }
  @media (min-width: 1440px) {
    max-width: 240px;
    font-size: 3rem;
    span {
      font-size: 3rem;
    }
  }
`;

export const Icon = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 16px; */
  color: #ffffff;
  position: relative;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  @media (min-width: 1024px) {
    width: 53px;
    height: 53px;
  }
`;

export function TitleInsideComponent() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#9e9e9e",
      },
    },
  });
  return (
    <TitleInside>
      Hyper Beam
      <ThemeProvider theme={theme}>
        <FiberManualRecordIcon sx={{ color: "#9e9e9e" }} />
      </ThemeProvider>
      <span>03</span>
    </TitleInside>
  );
}
