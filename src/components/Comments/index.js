import styled from "styled-components";
import { useState, useEffect } from "react";
import { PlatsCards } from "../AvailablePlats/styles";
import { Desc, MoreInfs, Title } from "@styles/globalStyles";
import { EmailPokeCenter } from "@icon/EmailPokeCenter";
import { BrTag, Divider, GroupTexts } from "./styles";

const Content = styled.div`
  width: 100%;
  height: 305px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 100px 0;
  @media (min-width: 768px) {
    height: 362px;
    margin: 80px 0 110px 0;
  }
  @media (min-width: 1024px) {
    height: 324px;
    margin: 85px 0 120px 0;
  }
`;

export default function Comments() {
  return (
    <Content>
      <GroupTexts>
        <Title textAlign="center" margin="0">
          O que achou do episódio?
        </Title>
        <Desc textAlignDesc="center" margin="0">
          Mande um e-mail e apareça no PokéCenter, nossa leitura de e-mails no
          fim de cada episódio
        </Desc>
      </GroupTexts>
      <a
        href="mailto:perguntehyperbeam@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <PlatsCards
          width="346px"
          height="111px"
          widthTablet="557px"
          widthDesktop="682px"
          heightDesktop="126px"
        >
          <EmailPokeCenter />
          <Divider />
          <MoreInfs
            fontSize="1.4rem"
            fontSizeTablet="1.9rem"
            fontSizeLaptop="2.3rem"
            fontSizeLaptopLarge="2.3rem"
          >
            Mande um e-mail pra gente!
            <br />
            <span>Apareça na leitura de e-mails</span>
          </MoreInfs>
        </PlatsCards>
      </a>
    </Content>
  );
}
