import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 0 14px;
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
    height: 900px;
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
  align-items: center;
  margin-bottom: 56px;
  margin-top: 45px;
  @media (min-width: 1024px) {
    width: 880px;
    height: 346px;
    margin-bottom: 50px;
  }
`;

export const PlatsCards = styled.a`
  width: 100%;
  height: 82px;
  background: #a127ff;
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 15px;
  border-radius: 15px;
  @media (min-width: 768px) {
    width: 502px;
    height: 105px;
  }
  @media (min-width: 1024px) {
  }
`;

export const PlatsIcons = styled.div`
  width: 48.79px;
  height: 48.79px;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Divider = styled.div`
  width: 1px;
  height: 51px;
  background: #711bb4;
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
  @media (min-width: 1024px) {
    grid-column: ${(props) => props.gridColumnLaptop};
    grid-row: ${(props) => props.gridRowLaptop};
  }
`;
