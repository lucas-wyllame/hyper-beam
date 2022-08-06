import styled from "styled-components";

const Content = styled.div`
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

const MainImage = styled.img`
  width: 290px;
  height: 124px;
  background: gray;
  @media (max-width: 480px) {
    width: 214px;
    height: 92px;
    margin-bottom: 50px;
  }
`;

const Contacts = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 480px) {
    align-items: center;
    margin-bottom: 100px;
  }
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

export default function Footer() {
  const listLinks = [
    { name: "E-mail", url: "https://linktr.ee/hyperbeamcast" },
    { name: "Twitter", url: "https://twitter.com/hyperbeamcast" },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCrB_y3PT-cLvv2WKB17B2lw",
    },
    { name: "Instagram", url: "https://www.instagram.com/davihayato/" },
  ];

  return (
    <Content>
      <MainImage></MainImage>
      <Contacts>
        <ContactTitle>Contatos e Redes</ContactTitle>
        <IconsRow>
          {listLinks.map((res) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Icon>
                <a href={res.url} target="_blank" rel="noreferrer">
                  {res.name}
                </a>
              </Icon>
            );
          })}
        </IconsRow>
      </Contacts>
    </Content>
  );
}
