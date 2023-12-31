import Nav from "./Nav";
const Header = () => {
  return (
    <header className="flex items-center gap-8 px-5 py-5 custom:px-8 ">
      <div id="logo-container">
        <img src="images/logo.svg" alt="LOGO" className="h-[27px] w-[84px] " />
      </div>
      <Nav />
    </header>
  );
};
export default Header;
