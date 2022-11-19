import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 900px;
  background: #11129d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 480px) {
    height: 1401px;
    padding: 0;
    margin-top: 40px;
  }
`;

export const Plats = styled.div`
  width: 80%;
  height: 80%;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 1680px) {
    width: 95%;
  }
  @media (max-width: 1290px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 65%;
    flex-direction: column;
    margin-bottom: 56px;
    margin-top: 45px;
  }
`;

export const PlatsCards = styled.a`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #7c7da2;
  margin: 0px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media (max-width: 1290px) {
    width: ${(props) => props.widthCards1290};
  }
  @media (max-width: 1050px) {
    height: ${(props) => props.heightCards1050};
  }
  @media (max-width: 480px) {
    width: ${(props) => props.widthCardsMobile};
    height: ${(props) => props.heightCardsMobile};
  }
  :hover {
    width: ${(props) => props.widthHover};
    height: ${(props) => props.heightHover};
    div {
      width: ${(props) => props.widthHoverDiv};
      height: ${(props) => props.heightHoverDiv};
      background: ${(props) => props.backColor};
    }
  }
`;

export const PlatsIcons = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #fff;
  border-radius: 50%;
  @media (max-width: 1050px) {
    width: ${(props) => props.widthIcon1050};
    height: ${(props) => props.heightIcon1050};
  }
`;

export const PlatsGroup = styled.div`
  width: 34%;
  height: 390px;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1050px) {
    height: 350px;
  }
  @media (max-width: 480px) {
    height: auto;
    width: 80%;
  }
`;

export const PlatsTitle = styled.a`
  width: auto;
  font-size: ${(props) => props.fontSize};
  color: #ffffff;
  margin: ${(props) => props.margin};
  font-weight: bold;
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
`;

export const PlatsButton = styled.a`
  width: 290px;
  height: 90px;
  font-size: 20px;
  color: #fff;
  border-radius: 44px;
  background: none;
  border: 1px solid #ffffff;
  margin-bottom: 25px;
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
  @media (max-width: 480px) {
    grid-column: ${(props) => props.gridColumnMobile};
    grid-row: ${(props) => props.gridRowMobile};
    width: 248px;
    height: 50px;
  }
`;
