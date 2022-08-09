import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 836px;
  background: #11122d;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px;
  @media (max-width: 480px) {
    height: 1401px;
    padding: 0;
    margin-top: 40px;
  }
`;

export const Plats = styled.div`
  width: 45%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
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
`;

export const PlatsGroup = styled.div`
  width: auto;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    height: auto;
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
  font-size: 20px;
  color: #fff;
  width: 247px;
  height: 49px;
  border-radius: 44px;
  background: none;
  border: 1px solid #ffffff;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;