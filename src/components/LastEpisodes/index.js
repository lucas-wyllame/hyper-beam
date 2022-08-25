import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "../Footer/styles";
import {
  Content,
  ListPodcasts,
  Background,
  CardAndText,
  TextsDivEp,
  TitleInside,
  IconAndButtons,
  ButtonsEp,
  ThinBarsGroup,
  ThinBars,
  ButtonSeeAll,
} from "./styles";

export default function LastEpisodes() {
  return (
    <Content>
      <Title margin={"0 0 0 18px"}>Episódios Recentes</Title>
      <Desc maxWidth={"50%"} margin={"0 0 30px 18px"}>
        Acompanhe nosso podcast e seus episódios
      </Desc>
      <ListPodcasts>
        <Background>
          <CardAndText>
            <HyperCard
              position={"static"}
              width={"337px"}
              height={"337px"}
              margin={"-26px 0 0 53px"}
              widthMobile={"253px"}
              heightMobile={"253px"}
            ></HyperCard>
            <TextsDivEp>
              <TitleInside margin={"10px 0"}>
                Hyper Beam <div /> <span>03</span>
              </TitleInside>
              <MoreInfs widthMobile={"324px"} heightMobile={"174px"} fontsize={"18px"} width={"694px"}>
                Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum
                sodales rutrum. Praesent eget lobortis purus. Donec a finibus
                neque. Nu erat a cursus sodales. Fusce vel nulla aliquam,
                convallis odio semper, finibus purus. orci, non malesuada augue.
              </MoreInfs>
            </TextsDivEp>
          </CardAndText>
          <IconAndButtons
            width={"36%"}
            margin={"10px 10px 41px 60px"}
            justifyContent={"space-between"}
            heightMobile={"191px"}
          >
            <Icon widthIcon={"40px"} heightIcon={"40px"}>
              Control
            </Icon>
            <ButtonsEp widthButton={"202px"} widthMobile={"152px"}>
              Pokémon Unite
            </ButtonsEp>
            <ButtonsEp widthButton={"293px"} widthMobile={"219px"}>
              {" "}
              World Ends with You{" "}
            </ButtonsEp>
          </IconAndButtons>
        </Background>
        <ThinBarsGroup>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
          <ThinBars></ThinBars>
        </ThinBarsGroup>
        <ButtonSeeAll>Ver todos</ButtonSeeAll>
      </ListPodcasts>
    </Content>
  );
}
