import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 214px;
  background: #1b1b40;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    height: 463px;
    justify-content: center;
  }
`;

export const MainImage = styled.img`
  width: 290px;
  height: 124px;
  background: gray;
  @media (max-width: 480px) {
    width: 214px;
    height: 92px;
    margin-bottom: 50px;
  }
`;

export const Contacts = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 480px) {
    align-items: center;
    margin-bottom: 80px;
  }
`;

export const ContactTitle = styled.label`
  font-size: 20px;
  color: #ffffff;
`;

export const IconsRow = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  width: ${(props) => props.widthIcon};
  height: ${(props) => props.heightIcon};
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: #ffffff;
  position: relative;
  @media (min-width: 1024px) {
    width: 53px;
    height: 53px;
  }
`;
