import { Content, BackBanner, ItensBanner, BannerInfos, Topic } from "./styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import {
  TitleInsideComponent,
  MoreInfs,
  Icon,
  TextInsideIcon,
} from "@styles/globalStyles";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { ControlWithCircle } from "@icon/ControlWithCircle";
import { Control } from "@icon/Control";

export default function PodcastHeader(props) {
  return (
    <Content>
      <BackBanner backgroundImg={props.backgroundImg}>
        <ItensBanner>
          <HyperCard
            hyperCardImg={props.hyperCardImage}
            width={"275px"}
            height={"275px"}
            widthLaptop={"340px"}
            heightLaptop={"340px"}
          />
          <BannerInfos>
            <TitleInsideComponent number={props.number} />
            <IconAndButtons
              gap="15px"
              margin="0"
              alignItems="normal"
              widthLaptop="90%"
              heightLaptop="216px"
              heightLaptopLarge="100px"
              flexDLaptopLarge="row"
            >
              <Icon
                height="49px"
                // widthIcon={"40px"}
                // heightIcon={"40px"}
                // widthIconLaptop="53px"
                // heightIconLaptop="53px"
              >
                <Control />
                <TextInsideIcon>Assuntos desse episódio</TextInsideIcon>
                {/* <ControlWithCircle /> */}
              </Icon>
              {props.gameTags[0]?.map((res, index) => (
                <ButtonsEp
                  key={index}
                  width="auto"
                  height="49px"
                  heightLaptop="49px"
                  fontSizeLaptop="2rem"
                >
                  {res}
                </ButtonsEp>
              ))}
            </IconAndButtons>
          </BannerInfos>
        </ItensBanner>
      </BackBanner>
      <Topic>
        <MoreInfs fontSize="1.5rem">{props.desc}</MoreInfs>
      </Topic>
    </Content>
  );
}
