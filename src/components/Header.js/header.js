import { useRouter } from "next/router";
import { Top, CenterLogoDiv, LogoTop } from "./styles";
import { useState } from "react";

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
          {/* <SearchLogoBox>
            <SearchIcon
              onClick={(e) => setIsClicked(!isClicked)}
              sx={{ fontSize: 35, color: "#fff" }}
            />
          </SearchLogoBox> */}
        </CenterLogoDiv>
      </Top>
      {/* {isClicked ? (
        <SearchBar
          onChange={() => setShowResult(!showResult)}
          placeholder="Pesquise aqui..."
        />
      ) : (
        ""
      )} */}
      {/* {showResult ? (
        <AfterSearch>
          <HyperCard width="104px" height="104px" />
          <InfoSearch>
            <TitleInsideComponentSearch />
            <IconAndTagBox>
              <IconAndTagRow>
                <Icon
                  widthIcon="42px"
                  heightIcon="42px"
                  widthIconLaptop="42px"
                  heightIconLaptop="42px"
                  fontSizeLaptop="15px"
                >
                  <Control />
                </Icon>
                <ButtonsEp width="159px" widthLaptop="150px">
                  Pokémon Unite
                </ButtonsEp>
              </IconAndTagRow>
              <ButtonsEp
                width="230px"
                widthLaptop="230px"
                heightLaptop="36px"
                fontSizeLaptop="15px"
              >
                The World Ends with You
              </ButtonsEp>
            </IconAndTagBox>
          </InfoSearch>
        </AfterSearch>
      ) : (
        ""
      )} */}
    </>
  );
}
