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

const SocialMedia = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSocial = styled.p`
  font-size: 24px;
  color: #fff;
  margin: 0;
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
  color: white;
  background: #a127ff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export default function Footer() {
  return (
    <Content>
      <MainImage></MainImage>
      <SocialMedia>
        <TitleSocial>Contatos e Redes</TitleSocial>
        <IconsRow>
          <Icon>
            <a
              href="https://twitter.com/lucas_wyllame"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
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
          <Icon>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </Icon>
          <Icon>
            <a
              href="https://twitter.com/lucas_wyllame"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </Icon>
        </IconsRow>
      </SocialMedia>
    </Content>
  );
}
