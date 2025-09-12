import HeaderLogo from "./HeaderLogo";
import SubNav from "./SubNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <HeaderLogo />
      <SubNav />
    </header>
  );
}
