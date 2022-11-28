import { useRouter } from "next/router";
import { Top, LogoTop, CenterLogoDiv, SearchLogoBox } from "./stylesHeader";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Top>
      <CenterLogoDiv>
        <LogoTop onClick={handleClick} />
        <SearchLogoBox>
          <SearchIcon sx={{ fontSize: 35, color: "#fff" }} />
        </SearchLogoBox>
      </CenterLogoDiv>
    </Top>
  );
}
