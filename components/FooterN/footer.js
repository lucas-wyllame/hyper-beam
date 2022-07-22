import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 214px;
  background: #1b1b40;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainImage = styled.img`
  width: 290px;
  height: 124px;
  background: gray;
`;

const Contacts = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactTitle = styled.label`
  font-size: 20px;
  color: #ffffff;
`;

const IconsRow = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  width: 53px;
  height: 53px;
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: #ffffff;
`;

export default function FooterN() {
  return (
    <Content>
      <MainImage></MainImage>
      <Contacts>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <IconsRow>
        <Icon>
            <a
              href="https://linktr.ee/hyperbeamcast"
              target="_blank"
              rel="noreferrer"
            >
              E-mail
            </a>
          </Icon>
          <Icon>
            <a
              href="https://twitter.com/hyperbeamcast"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </Icon>
          <Icon>
            <a href="https://www.youtube.com/channel/UCrB_y3PT-cLvv2WKB17B2lw" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.instagram.com/davihayato/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </Icon>
        </IconsRow>
      </Contacts>
    </Content>
  );
}
