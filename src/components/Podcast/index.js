import {
  Content,
  BackBanner,
  ItensBanner,
  BannerInfos,
  SeparationDiv,
  Topic,
} from "./styles";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { Icon } from "../../components/Footer/styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { TitleInside } from "../../components/LastEpisodes/styles";
import { Control } from "../../../public/icon/IconComTag";
import { MoreInfs } from "../../components/Global/globalStyles";

export default function Podcast() {
  return (
    <Content>
      <BackBanner>
        <ItensBanner>
          <HyperCard
            width={"340px"}
            height={"340px"}
            // top={"40px"}
            // position={"relative"}
            widthMobile={"100%"}
            heightMobile={"280px"}
          ></HyperCard>
          <BannerInfos>
            <TitleInside margin={"0px 0px"}>
              Hyperbeam <div /> <span>03</span>
            </TitleInside>
            <IconAndButtons
              width={"100%"}
              margin={"0"}
              alignItems={"center"}
              heightMobile={"170px"}
            >
              <Control />
              <ButtonsEp widthButton={"202px"} width={"152px"}>
                Pokémon Unite
              </ButtonsEp>
              <ButtonsEp widthButton={"293px"} width={"219px"}>
                The World Ends with You
              </ButtonsEp>
            </IconAndButtons>
          </BannerInfos>
        </ItensBanner>
      </BackBanner>
      {/* <SeparationDiv /> */}
      <Topic>
        <MoreInfs
          width={"929px"}
          widthMobile={"300px"}
          paddingTop={"45px"}
          fontsize={"15px"}
          heightMobile={"168px"}
        >
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </Topic>
    </Content>
  );
}
