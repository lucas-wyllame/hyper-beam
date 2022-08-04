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
  width: 60%;
  height: 343px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 69px;
  align-items: center;
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
  span{
    color: #FFE747;
  }
`;

const FuncCasters = styled.label`
  font-size: 20px;
  color: #9a8dac;
`;

const Buttons = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const TeamButton = styled.button`
  width: 39px;
  height: 39px;
  background: #a127ff;
  border-radius: 50%;
`;

export default function OurTeam() {
  const listCardsOurTeam = [
    { name: "Leandro", surname: "Radnas", func: "Host e Caster" },
    { name: "Leo", surname: "Dratini", func: "Caster" },
    { name: "Davi", surname: "Hayato", func: "Caster" },
  ];

  const CarouselButtons = [
    { linkimg: "diretorio da imagem1" },
    { linkimg: "diretorio da imagem2" },
  ];

  return (
    <Content>
      <Title>Nosso time</Title>
      <Desc>A equipe que trabalha no Hyper Beam</Desc>
      <GlobalPeoples>
        <Buttons>
          <TeamButton></TeamButton>
        </Buttons>
        {listCardsOurTeam.map((res) => {
          return (
            <Peoples>
              <CardsOurTeam></CardsOurTeam>
              <NameCasters>
                <div>
                  {res.name}
                  <span> {res.surname} </span>
                </div>
              </NameCasters>
              <FuncCasters>
                <div>{res.func}</div>
              </FuncCasters>
            </Peoples>
          );
        })}
        <Buttons>
          <TeamButton></TeamButton>
        </Buttons>
      </GlobalPeoples>
    </Content>
  );
}
