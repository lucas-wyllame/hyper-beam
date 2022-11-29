import { Content, BackBanner, ItensBanner, BannerInfos, Topic } from "./styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { TitleInsideComponent, MoreInfs } from "@styles/globalStyles";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { Control } from "@icon/IconComTag";

export default function Podcast() {
  return (
    <Content>
      <BackBanner>
        <ItensBanner>
          <HyperCard
            width={"275px"}
            height={"275px"}
            widthLaptop={"340px"}
            heightLaptop={"340px"}
          />
          <BannerInfos>
            <TitleInsideComponent />
            <IconAndButtons
              height="150px"
              margin="0"
              alignItems="center"
              widthLaptop="90%"
              heightLaptop="182px"
              heightLaptopLarge="100px"
              flexDLaptopLarge="row"
            >
              <Control />
              <ButtonsEp
                widthLaptop="202px"
                width="152px"
                heightLaptop="49px"
                fontSizeLaptop="2rem"
              >
                Pokémon Unite
              </ButtonsEp>
              <ButtonsEp
                widthLaptop="293px"
                width="219px"
                heightLaptop="49px"
                fontSizeLaptop="2rem"
              >
                The World Ends with You
              </ButtonsEp>
            </IconAndButtons>
          </BannerInfos>
        </ItensBanner>
      </BackBanner>
      <Topic>
        <MoreInfs fontSize="1.5rem">
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </Topic>
    </Content>
  );
}
