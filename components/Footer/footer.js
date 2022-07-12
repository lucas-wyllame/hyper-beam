import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 214px;
  background: #1B1B40;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainImage = styled.img`
  width: 290px;
  height: 124px;
  background: gray;
`;

const LinksDiv = styled.div`
  width: 15%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactTitle = styled.p`
  font-size: 24px;
  color: #fff;
  margin: 0px;
`;

const Iconsrow = styled.div`
  width: 100%;
  heigth: 53px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 53px;
  height: 53px;
  color: white;
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <Content>
      <MainImage></MainImage>
      <LinksDiv>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <Iconsrow>
          <Icon>
            <a href="https://twitter.com/lucas_wyllame" target="_blank">
              Twitter
            </a>
          </Icon>
          <Icon>
            <a href="https://www.instagram.com/davihayato/" target="_blank">
              Instagram
            </a>
          </Icon>
          <Icon>
            <a href="https://www.youtube.com" target="_blank">
              Youtube
            </a>
          </Icon>
          <Icon>
            <a href="https://twitter.com/lucas_wyllame" target="_blank">
              Twitter
            </a>
          </Icon>
        </Iconsrow>
      </LinksDiv>
    </Content>
  );
}
