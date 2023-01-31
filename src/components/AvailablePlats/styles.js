import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  /* background: #11129d; */
  background-image: url("/img/degrade logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 14px;
  @media (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Plats = styled.div`
  width: 100%;
  height: auto;
  /* background: red; */
  flex-direction: column;
  display: flex;
  row-gap: 14px;
  margin-bottom: 25px;
  margin-top: 45px;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
    width: 880px;
    margin-bottom: 30px;
  }
`;

export const PlatsCards = styled.a`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #a127ff;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 15px;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: ${(props) => props.widthTablet};
    height: 105px;
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthDesktop};
    height: ${(props) => props.heightDesktop};
  }
`;

export const PlatsIcons = styled.div`
  width: 48.79px;
  height: 48.79px;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    width: 62px;
    height: 62px;
  }
  @media (min-width: 1024px) {
    width: 74px;
    height: 74px;
  }
`;

export const Divider = styled.div`
  width: 1.23px;
  height: 51px;
  background: #711bb4;
  @media (min-width: 768px) {
    height: 64px;
  }
  @media (min-width: 1024px) {
    height: 78px;
  }
`;

export const PlatsButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 2rem;
  color: #fff;
  background: none;
  border-radius: 44px;
  border: 1px solid #ffffff;
  margin-bottom: 28px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  :hover {
    color: #11122d;
    background: #fff;
  }
  @media (min-width: 768px) {
    width: 502px;
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    grid-column: ${(props) => props.gridColumnLaptop};
    grid-row: ${(props) => props.gridRowLaptop};
  }
`;
