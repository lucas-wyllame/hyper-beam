import { useRouter } from "next/router";
import {
  Top,
  CenterLogoDiv,
  LogoTop,
  SearchLogoBox,
  SearchBar,
  AfterSearch,
  IconAndButtonGrid,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "@styles/globalStyles";
import { Control } from "@icon/IconComTag";
import { ButtonsEp } from "../LastEpisodes/styles";
import { TitleInsideComponent } from "@styles/globalStyles";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Top>
        <CenterLogoDiv>
          <LogoTop onClick={handleClick} />
          <SearchLogoBox>
            <SearchIcon
              onClick={(e) => setIsClicked(!isClicked)}
              sx={{ fontSize: 35, color: "#fff" }}
            />
          </SearchLogoBox>
        </CenterLogoDiv>
      </Top>
      {isClicked ? (
        <SearchBar
          onChange={() => setShowResult(!showResult)}
          placeholder="Pesquise aqui..."
        />
      ) : (
        ""
      )}
      {showResult ? (
        <AfterSearch>
          <HyperCard width="104px" height="104px" />
          <TitleInsideComponent />
          <IconAndButtonGrid>
            <Icon
              grid-column="1/2"
              grid-row="1/2"
              widthIcon={"42px"}
              heightIcon={"42px"}
            >
              <Control />
            </Icon>
            <ButtonsEp
              grid-column="2/3"
              grid-row="1/2"
              width={"159px"}
              widthLaptop={"202px"}
            >
              Pokémon Unite
            </ButtonsEp>
            <ButtonsEp
              grid-column="1/3"
              grid-row="2/3"
              width={"230px"}
              widthLaptop={"293px"}
            >
              The World Ends with You
            </ButtonsEp>
          </IconAndButtonGrid>
        </AfterSearch>
      ) : (
        ""
      )}
    </>
  );
}
