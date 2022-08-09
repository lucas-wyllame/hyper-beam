import { Title, Desc } from "../Global/globalStyles";
import {
  Content,
  GlobalPeoples,
  Peoples,
  CardsOurTeam,
  NameCasters,
  FuncCasters,
  Buttons,
  TeamButton,
  ButtonsMobile,
  TeamButtonMobile,
} from "./styles";

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
      <Title margin={"-40px 0 0px 0"}>Nosso time</Title>
      <Desc textAlignDescMobile={"center"} margin={"2px"}>
        A equipe que trabalha no Hyper Beam
      </Desc>
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
        <ButtonsMobile>
          <TeamButtonMobile></TeamButtonMobile>
          <TeamButtonMobile></TeamButtonMobile>
        </ButtonsMobile>
      </GlobalPeoples>
    </Content>
  );
}
