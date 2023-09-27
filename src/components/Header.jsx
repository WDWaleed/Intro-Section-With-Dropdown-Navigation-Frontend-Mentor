
import Nav from "./Nav"
const Header = () => {
  return (
    <header className="flex items-center gap-8 py-5 px-5 custom:px-8">
        <div id="logo-container"><img src="images/logo.svg" alt="LOGO" className="w-[84px] h-[27px] " /></div>
        <Nav />
    </header>
  )
}
export default Header