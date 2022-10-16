import { Content, BackBanner, ItensBanner, Topic, BannerInfos } from "./styles";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { Icon } from "../../components/Footer/styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { TitleInside } from "../../components/LastEpisodes/styles";
import { MoreInfs } from "../../components/Global/globalStyles";
import { Control } from "../../../public/icon/IconComTag";

export default function Podcast() {
  return (
    <Content>
      <BackBanner>
        <ItensBanner>
          <Topic>
            <HyperCard
              width={"337px"}
              height={"337px"}
              top={"40px"}
              position={"relative"}
              widthMobile={"100%"}
              heightMobile={"280px"}
            ></HyperCard>
            <BannerInfos>
              <TitleInside margin={"20px 0"}>
                Hyperbeam <div /> <span>03</span>
              </TitleInside>
              <IconAndButtons
                width={"87.5%"}
                margin={"0"}
                alignItems={"center"}
                heightMobile={"170px"}
              >
                <Control></Control>
                <ButtonsEp widthButton={"202px"} widthMobile={"152px"}>
                  Pokémon Unite
                </ButtonsEp>
                <ButtonsEp widthButton={"293px"} widthMobile={"219px"}>
                  The World Ends with You
                </ButtonsEp>
              </IconAndButtons>
            </BannerInfos>
          </Topic>
          <MoreInfs
            width={"929px"}
            widthMobile={"300px"}
            paddingTop={"45px"}
            fontsize={"15px"}
            heightMobile={"168px"}
          >
            Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
            rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat
            a cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
            finibus purus. orci, non malesuada augue.
          </MoreInfs>
        </ItensBanner>
      </BackBanner>
    </Content>
  );
}
