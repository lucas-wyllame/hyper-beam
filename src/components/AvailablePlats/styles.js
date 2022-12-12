import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 1401px;
  padding: 0 44px;
  /* background: #11129d; */
  background-image: url("/img/degrade logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 1024px) {
    height: 900px;
    margin-top: 70px;
  }
`;

export const Plats = styled.div`
  width: 100%;
  height: 65%;
  background: red;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
  margin-top: 45px;
  @media (min-width: 1024px) {
    width: 880px;
    height: 346px;
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

export const PlatsGroup = styled.div`
  width: 100%;
  height: auto;
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    a{
      color: ${(props) => props.colorHoverText};
    }
  }
  @media (min-width: 1024px) {
    width: 34%;
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
      background-image: ${(props) => props.imageHover};
    }
  }
  @media (min-width: 1024px) {
    width: ${(props) => props.widthLaptop};
    height: ${(props) => props.heightLaptop};
  }
`;

export const PlatsIcons = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background-color: #000;
  background-image: ${(props) => props.image};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  @media (min-width: 1024px) {
    width: ${(props) => props.widthIconLaptop};
    height: ${(props) => props.heightIconLaptop};
  }
`;

export const PlatsTitle = styled.a`
  font-size: ${(props) => props.fontSize};
  color: #ffffff;
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  @media (min-width: 1024px) {
  }
`;

export const PlatsButton = styled.button`
  width: 248px;
  height: 50px;
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
