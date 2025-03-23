// import reactLogo from "../../public/logo512.png";

function Header() {
  const reactLogoSrc = "../../public/assets/logo512.png";
  return (
    <header className="app-header">
      <img src={reactLogoSrc} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
