import styled from "styled-components";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { Icon } from "../../components/Footer/styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { TitleInside } from "../../components/LastEpisodes/styles";
import { MoreInfs } from "../../components/Global/globalStyles";

const Content = styled.div`
  width: 100%;
  height: 696px;
  // background: red;
  display: flex;
  @media (max-width: 480px) {
    height: 810px;
  }
`;
const BackBanner = styled.div`
  width: 100%;
  height: 400px;
  background: purple;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 480px) {
    height: 620px;
  }
`;

const ItensBanner = styled.div`
  width: 80%;
  height: 696px;
  // background: blue;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 296px;
  @media (max-width: 480px) {
    top: 280px;
    height: 900px;
  }
`;

const Topic = styled.div`
  width: 100%;
  height: 75%;
  // background: lightblue;
  display: flex;
  align-items: center;
  margin-bottom: -25px;
  @media (max-width: 480px) {
    height: 68.9%;
    flex-direction: column;
  }
`;

const BannerInfos = styled.div`
  width: 44%;
  height: 124px;
  // background: pink;
  display: flex;
  flex-direction: column;
  margin-left: 58px;
  @media (max-width: 480px) {
    width: 100%;
    height: 53%;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }
`;

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
                <Icon>Control</Icon>
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
