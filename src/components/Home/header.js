import { useRouter } from "next/router";
import { Top, LogoTop } from "./styles";

export default function Header() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Top>
      <LogoTop onClick={handleClick} />
    </Top>
  );
}
