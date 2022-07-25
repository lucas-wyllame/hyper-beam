import styled from "styled-components";
import { Title, Desc } from "../Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 716px;
  background: #1b1b36;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
`;

const GlobalPeoples = styled.div`
  width: 1000px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 69px;
`;

const Peoples = styled.div`
  width: 285px;
  heigth: auto;
  background: #1b1b36;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardsOurTeam = styled.div`
  width: 285px;
  height: 285px;
  background: purple;
  border-radius: 20px;
`;

const NameCasters = styled.label`
  font-size: 23px;
  color: #fff;
`;

const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
`;

const TeamButtons = styled.button`
  width: 100px;
  height: 100px;
  background: red;
`;

export default function OurTeam() {
  const listCardsOurTeam = [
    { name: "Leandro Radnas", func: "Host e Caster" },
    { name: "Leo Dratini", func: "Caster" },
    { name: "Davi Hayato", func: "Caster" },
  ];

  return (
    <Content>
      <Title>Nosso time</Title>
      <Desc>A equipe que trabalha no Hyper Beam</Desc>
      <GlobalPeoples>
        {listCardsOurTeam.map((res) => {
          return (
            <Peoples>
              <CardsOurTeam></CardsOurTeam>
              <NameCasters>
                <div>{res.name}</div>
              </NameCasters>
              <FuncCasters>
                <div>{res.func}</div>
              </FuncCasters>
            </Peoples>
          );
        })}
      </GlobalPeoples>
      <TeamButtons></TeamButtons>
    </Content>
  );
}
