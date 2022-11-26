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
import { Control } from "../../../public/icon/IconComTag";
import { MoreInfs } from "../../styles/globalStyles";
import { TitleInside } from "../Home/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../Home/homeBanner";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
          ></HyperCard>
          <BannerInfos>
            <TitleInside>
              Hyper Beam
              <ThemeProvider theme={theme}>
                <FiberManualRecordIcon sx={{ color: "#9e9e9e" }} />
              </ThemeProvider>
              <span>03</span>
            </TitleInside>
            <IconAndButtons
              height="150px"
              margin="0"
              alignItems="center"
              heightLaptop="182px"
              heightLaptopLarge="100px"
              flexDLaptopLarge="row"
            >
              <Control />
              <ButtonsEp widthLaptop="202px" width="152px">
                Pokémon Unite
              </ButtonsEp>
              <ButtonsEp widthLaptop="293px" width="219px">
                The World Ends with You
              </ButtonsEp>
            </IconAndButtons>
          </BannerInfos>
        </ItensBanner>
      </BackBanner>
      {/* <SeparationDiv /> */}
      <Topic>
        <MoreInfs paddingTop="30px" fontSize="1.5rem">
          Lorem ipsum dolor sit amet, consectetur a elit. Sed dictum sodales
          rutrum. Praesent eget lobortis purus. Donec a finibus neque. Nu erat a
          cursus sodales. Fusce vel nulla aliquam, convallis odio semper,
          finibus purus. orci, non malesuada augue.
        </MoreInfs>
      </Topic>
    </Content>
  );
}
